import { GoogleSpreadsheet } from 'google-spreadsheet';

// ⚠️ REPLACE WITH YOUR ACTUAL VALUES ⚠️
const SHEET_ID = '1_VxPRwR-FgsQq7M1xw4g9gywRYi7zfN8WK_prZ7cKds'; // Your Sheet ID
const API_KEY = 'AIzaSyD-PkusbWl3ZK_w3M66rWKiBhY2b--UxDk'; // From Google Cloud Console

// Cache for performance
const cache: Record<string, { data: any; timestamp: number }> = {};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache

export const sheetService = {
  // Load data from Google Sheets
  async loadSheet(sheetName: string) {
    const cacheKey = `${sheetName}`;
    const now = Date.now();
    
    // Check cache first
    if (cache[cacheKey] && (now - cache[cacheKey].timestamp < CACHE_DURATION)) {
      return cache[cacheKey].data;
    }

    try {
      const doc = new GoogleSpreadsheet(SHEET_ID);
      doc.useApiKey(API_KEY);
      
      await doc.loadInfo();
      
      const sheet = doc.sheetsByTitle[sheetName];
      if (!sheet) {
        console.warn(`Sheet "${sheetName}" not found`);
        return [];
      }
      
      const rows = await sheet.getRows();
      const data = rows.map(row => {
        const obj: any = {};
        sheet.headerValues.forEach(header => {
          obj[header] = row[header] || '';
        });
        return obj;
      });

      // Update cache
      cache[cacheKey] = { data, timestamp: now };
      
      return data;
    } catch (error) {
      console.error(`Error loading sheet "${sheetName}":`, error);
      return [];
    }
  },

  // Load employees (main function for your EmployeesGallery)
  async loadEmployees(language: 'en' | 'mr' = 'mr') {
    const data = await this.loadSheet('employees');
    
    if (data.length === 0) {
      return []; // Return empty if sheet is empty
    }
    
    return data.map((row: any) => ({
      id: parseInt(row.id) || 0,
      name: language === 'mr' ? row.name_mr : row.name_en,
      designation: language === 'mr' ? row.designation_mr : row.designation_en,
      email: row.email || '',
      phone: row.phone || '',
      image: row.image_url || '',
      description: language === 'mr' ? row.description_mr : row.description_en,
      experience: language === 'mr' ? row.experience_mr : row.experience_en,
      qualifications: language === 'mr' ? row.qualifications_mr : row.qualifications_en,
      department: row.department || ''
    }));
  },

  // Clear cache (for testing)
  clearCache() {
    Object.keys(cache).forEach(key => delete cache[key]);
  }
};