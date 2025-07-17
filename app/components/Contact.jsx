import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaPhone, FaEdit, FaPaperPlane, FaCheck } from 'react-icons/fa';

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  // State for submission result message
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending message...");

    const jsonPayload = {
        ...formData,
        // Access key is now read from an environment variable
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
    };

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(jsonPayload)
        });
        
        const res = await response.json();

        if (res.success) {
            setResult("Message sent successfully!");
            // Clear the form
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        } else {
            console.log("Error", res);
            setResult(res.message || "Something went wrong. Please try again.");
        }
    } catch (error) {
        setResult("Network error. Please check your connection and try again.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-20 scroll-mt-20 bg-[#0F172A] text-white'>
        <div className="animate-fade-in-up">
            <h4 className="text-center mb-2 text-lg font-Fira_Code text-[#22D3EE] tracking-wider">Get In Touch</h4>
            <h2 className="text-center mb-2 text-5xl font-Fira_Code bg-gradient-to-r from-white to-[#22D3EE] bg-clip-text text-transparent">Let's Work Together</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-16 font-Fira_Code text-gray-300 leading-relaxed">
                Ready to bring your vision to life? I'm available for freelance projects and full-time opportunities. 
                Let's discuss how we can create something amazing together.
            </p>
        </div>

        <form onSubmit={onSubmit} className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative group">
                    <FaUser className="absolute left-4 top-4 text-[#22D3EE] transition-colors duration-300" />
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Full Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="w-full pl-12 pr-4 py-4 bg-[#1E293B] border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:border-transparent font-Fira_Code text-white placeholder-gray-400 transition-all duration-300 hover:border-[#22D3EE]/50" 
                    />
                </div>
                
                <div className="relative group">
                    <FaEnvelope className="absolute left-4 top-4 text-[#22D3EE] transition-colors duration-300" />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="w-full pl-12 pr-4 py-4 bg-[#1E293B] border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:border-transparent font-Fira_Code text-white placeholder-gray-400 transition-all duration-300 hover:border-[#22D3EE]/50" 
                    />
                </div>
                
                <div className="relative group">
                    <FaPhone className="absolute left-4 top-4 text-[#22D3EE] transition-colors duration-300" />
                    <input 
                        type="text" 
                        name="phone" 
                        placeholder="Phone Number (Optional)" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="w-full pl-12 pr-4 py-4 bg-[#1E293B] border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:border-transparent font-Fira_Code text-white placeholder-gray-400 transition-all duration-300 hover:border-[#22D3EE]/50" 
                    />
                </div>
                
                <div className="relative group">
                    <FaEdit className="absolute left-4 top-4 text-[#22D3EE] transition-colors duration-300" />
                    <input 
                        type="text" 
                        name="subject" 
                        placeholder="Subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        required 
                        className="w-full pl-12 pr-4 py-4 bg-[#1E293B] border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:border-transparent font-Fira_Code text-white placeholder-gray-400 transition-all duration-300 hover:border-[#22D3EE]/50" 
                    />
                </div>
            </div>
            
            <div className="relative group mb-8">
                <textarea 
                    name="message" 
                    placeholder="Tell me about your project..."
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-[#1E293B] border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:border-transparent font-Fira_Code text-white placeholder-gray-400 transition-all duration-300 hover:border-[#22D3EE]/50 resize-none"
                ></textarea>
            </div>
            
            <div className="text-center">
                <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#22D3EE] to-[#0EA5E9] text-[#0F172A] font-bold rounded-xl hover:from-[#FACC15] hover:to-[#F59E0B] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_30px_rgba(34,211,238,0.3)] font-Fira_Code tracking-wider ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {isSubmitting ? (
                        <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0F172A]"></div>
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <FaPaperPlane className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                    )}
                </button>
            </div>
            
            {result && (
                <div className={`text-center mt-6 font-Fira_Code flex items-center justify-center gap-2 ${result.includes('success') ? 'text-green-400' : result.includes('Sending') ? 'text-[#22D3EE]' : 'text-red-400'}`}>
                    {result.includes('success') && <FaCheck className="w-4 h-4" />}
                    {result}
                </div>
            )}
        </form>
    </div>
  );
}

export default Contact;