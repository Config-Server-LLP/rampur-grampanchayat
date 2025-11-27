import { useState } from 'react';
import { Send, CheckCircle, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { useLanguage } from '../contexts/LanguageContext';

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
  const [isLoading, setIsLoading] = useState(false);
  const [isSendingOTP, setIsSendingOTP] = useState(false);

  // ❌ REMOVE localhost:5000
  // const BACKEND_URL = 'http://localhost:5000';

  // ✔ Use relative API calls
  const API_SEND_OTP = '/demo/gprampur/send-otp';
  const API_SEND_MESSAGE = '/demo/gprampur/send-message';

  const generateOTP = () =>
    Math.floor(100000 + Math.random() * 900000).toString();

  const sendOTPEmail = async () => {
    setIsSendingOTP(true);
    const otp = generateOTP();
    setGeneratedOTP(otp);

    console.log("🔄 Sending OTP to:", formData.email, "OTP:", otp);

    try {
      const response = await fetch(API_SEND_OTP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          otp: otp,
        }),
      });

      const result = await response.json();
      console.log("📡 Backend response:", result);

      if (result.success) {
        setShowOTPBox(true);
      } else {
        alert("Failed to send OTP: " + (result.error || "Please try again."));
      }
    } catch (error) {
      console.error("❌ OTP sending error:", error);
      alert("Failed to send OTP. Please try again.");
    } finally {
      setIsSendingOTP(false);
    }
  };

  const verifyOTP = () => {
    if (userOTP === generatedOTP) {
      setShowOTPBox(false);
      handleFinalSubmit();
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  const handleFinalSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(API_SEND_MESSAGE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setUserOTP("");
          setGeneratedOTP("");
        }, 3000);
      } else {
        alert("Failed to send message: " + (result.error || "Please try again."));
      }
    } catch (error) {
      console.error("❌ Message sending error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    sendOTPEmail();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleResendOTP = () => {
    setUserOTP("");
    sendOTPEmail();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-4">
          <Mail className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">{t.contact.badge}</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          {t.contact.description}
        </p>
      </div>

      <div className="flex justify-center">
        <Card className="p-8 border border-gray-200 shadow-2xl max-w-2xl w-full bg-white rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.contact.formTitle}</h3>
            <p className="text-gray-500">
              Fill out the form below and verify your email to send message
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                {t.contact.successTitle}
              </h4>
              <p className="text-gray-600 text-center text-lg max-w-md">
                {t.contact.successMessage}
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700 flex items-center"
                    >
                      <User className="w-4 h-4 mr-2" />
                      {t.contact.form.name} *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700 flex items-center"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {t.contact.form.email} *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700 flex items-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {t.contact.form.phone}
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-700"
                    >
                      {t.contact.form.subject} *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="What is this regarding?"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    {t.contact.form.message} *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSendingOTP}
                >
                  {isSendingOTP ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending OTP...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-4 h-4 mr-2" />
                      Send OTP to Verify
                    </div>
                  )}
                </Button>
              </form>

              {showOTPBox && (
                <div className="mt-6 p-6 border-2 border-blue-100 rounded-xl shadow-lg bg-blue-50">
                  <div className="text-center mb-4">
                    <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Verify Your Email
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We've sent a 6-digit OTP to{" "}
                      <span className="font-semibold">{formData.email}</span>
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Input
                      placeholder="Enter 6-digit OTP"
                      value={userOTP}
                      onChange={(e) =>
                        setUserOTP(
                          e.target.value.replace(/\D/g, "").slice(0, 6)
                        )
                      }
                      maxLength={6}
                      className="w-full px-4 py-3 text-center text-xl font-mono border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    <div className="flex gap-3">
                      <Button
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all"
                        onClick={verifyOTP}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          "Verify & Send Message"
                        )}
                      </Button>

                      <Button
                        variant="outline"
                        className="flex-1 py-3 rounded-lg font-semibold transition-all"
                        onClick={() => {
                          setShowOTPBox(false);
                          setUserOTP("");
                        }}
                        disabled={isLoading}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button
                      type="button"
                      onClick={handleResendOTP}
                      disabled={isSendingOTP}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium disabled:opacity-50"
                    >
                      {isSendingOTP ? "Resending OTP..." : "Resend OTP"}
                    </button>
                    <p className="text-xs text-gray-500 mt-2">
                      Didn't receive the code? Check your spam folder.
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
