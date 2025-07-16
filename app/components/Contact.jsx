import React, { useState } from 'react';

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

  // Handle input changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const jsonPayload = {
        ...formData,
        // Access key is now read from an environment variable
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
    };

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
        setResult("Message Sent Successfully!");
        // Clear the form
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } else {
        console.log("Error", res);
        setResult(res.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className="text-center mb-2 text-lg font-Fira_Code">Contact</h4>
        <h2 className="text-center mb-2 text-5xl font-Fira_Code">Get in Touch</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Fira_Code">
            I am available for freelance or full-time positions. Please fill out the form below to discuss any work opportunities.
        </p>

        <form onSubmit={onSubmit} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-Fira_Code" />
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-Fira_Code" />
                <input type="text" name="phone" placeholder="Phone Number (Optional)" value={formData.phone} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-Fira_Code" />
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-Fira_Code" />
            </div>
            <textarea 
                name="message" 
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-Fira_Code"
            ></textarea>
            <div className="text-center">
                <button 
                    type="submit"
                    className="mt-6 bg-gray-800 text-white font-semibold py-3 px-10 rounded-lg hover:bg-gray-900 transition-colors duration-300 font-Fira_Code"
                >
                    Send Message
                </button>
            </div>
            <p className="text-center mt-4 font-Fira_Code text-green-500">{result}</p>
        </form>
    </div>
  );
}

export default Contact
