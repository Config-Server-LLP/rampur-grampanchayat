import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from 'emailjs-com';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [generatedOTP, setGeneratedOTP] = useState('');
  const [showOTPBox, setShowOTPBox] = useState(false);
  const [userOTP, setUserOTP] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

  const sendOTPEmail = async () => {
    const otp = generateOTP();
    setGeneratedOTP(otp);

    const templateParams = {
      to_email: formData.email,
      user_name: formData.name,
      otp_code: otp,
    };

    await emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      templateParams,
      "YOUR_PUBLIC_KEY"
    );

    setShowOTPBox(true);
  };

  const verifyOTP = () => {
    if (userOTP === generatedOTP) {
      setShowOTPBox(false);
      handleFinalSubmit();
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  const handleFinalSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendOTPEmail();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full mb-4">
          <span className="text-sm">{t.contact.badge}</span>
        </div>
        <h2 className="text-4xl text-gray-900 mb-4">{t.contact.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{t.contact.description}</p>
      </div>

      <div className="flex justify-center">
        <Card className="p-8 border-none shadow-xl max-w-2xl w-full">
          <h3 className="text-2xl text-gray-900 mb-6">{t.contact.formTitle}</h3>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-gray-900 mb-2">{t.contact.successTitle}</h4>
              <p className="text-gray-600 text-center">{t.contact.successMessage}</p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.form.name} *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.form.email} *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.contact.form.phone}</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t.contact.form.subject} *</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.form.message} *</Label>
                  <Textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} required />
                </div>

                <Button type="submit" className="w-full bg-blue-700 text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Send OTP
                </Button>
              </form>

              {showOTPBox && (
                <div className="mt-6 p-4 border rounded-lg shadow-lg bg-white">
                  <h3 className="text-lg font-bold mb-3">Enter OTP</h3>
                  <Input
                    placeholder="Enter the 6-digit OTP"
                    value={userOTP}
                    onChange={(e) => setUserOTP(e.target.value)}
                    maxLength={6}
                  />
                  <Button className="mt-4 w-full bg-green-600" onClick={verifyOTP}>
                    Verify OTP
                  </Button>
                </div>
              )}
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
