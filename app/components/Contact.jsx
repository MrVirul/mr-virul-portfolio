import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaPhone, FaEdit, FaPaperPlane, FaCheck, FaGithub, FaLinkedin, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const socialLinks = [
  {
    href: 'https://github.com/MrVirul',
    icon: <FaGithub className="w-6 h-6" />, 
    label: 'GitHub',
    color: 'from-slate-600 to-slate-800'
  },
  {
    href: 'https://www.linkedin.com/in/virul-meemana-4597292a0/',
    icon: <FaLinkedin className="w-6 h-6" />, 
    label: 'LinkedIn',
    color: 'from-cyan-600 to-cyan-800'
  },
  {
    href: 'https://x.com/SoulOfVirul',
    icon: <FaXTwitter className="w-6 h-6" />, 
    label: 'Twitter',
    color: 'from-purple-500 to-purple-700'
  },
  {
    href: 'https://www.instagram.com/virul_on_insta/',
    icon: <FaInstagram className="w-6 h-6" />,
    label: 'Instagram',
    color: 'from-pink-500 to-orange-500'
  },
  {
    href: 'https://www.facebook.com/virul.methdinu.meemana',
    icon: <FaFacebook className="w-6 h-6" />,
    label: 'Facebook',
    color: 'from-blue-600 to-blue-400'
  },
 
];

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="w-5 h-5" />,
    title: "Location",
    detail: "Available Worldwide",
    subtitle: "Remote & On-site"
  },
  {
    icon: <FaClock className="w-5 h-5" />,
    title: "Response Time",
    detail: "Within 24 hours",
    subtitle: "Usually much faster"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    if (!formData.name.trim()) return 'Name is required.';
    if (!formData.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) return 'Valid email is required.';
    if (!formData.message.trim()) return 'Message is required.';
    return '';
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const error = validate();
    if (error) {
      setResult(error);
      return;
    }
    setIsSubmitting(true);
    setResult("Sending message...");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          access_key: "a57878ca-cc8f-4241-a1fc-0fd069f361e8" // Directly using the access key
        })
      });
      const res = await response.json();
      if (res.success) {
        setResult("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setResult(res.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='relative w-full px-4 md:px-[8%] py-24 scroll-mt-20 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 text-slate-100 overflow-hidden'>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h4 
            className="text-lg font-sora text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-wider mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            GET IN TOUCH
          </motion.h4>
          <motion.h2 
            className="text-5xl lg:text-7xl font-inter font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl max-w-4xl mx-auto font-sora text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Ready to bring your vision to life? I'm available for freelance projects and full-time opportunities. Let's discuss how we can create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            className="lg:col-span-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={itemVariants}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 mb-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-inter">
                Let's Connect
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  < motion.div 
                    key={index}
                    className="flex items-start gap-4"
                    variants={itemVariants}
                  >
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-400">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white font-inter">{info.title}</h4>
                      <p className="text-slate-300 font-sora">{info.detail}</p>
                      <p className="text-sm text-purple-300 font-sora">{info.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
          </motion.div>
          </motion.div>
          
                    <motion.div 
  variants={itemVariants}
  className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 w-full max-w-md mx-auto"
>
  <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 font-inter">
    Follow Me
  </h3>
  <div className="flex flex-wrap justify-center gap-3 md:gap-4">
    {socialLinks.map((link, idx) => (
      <motion.a
        key={idx}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${link.color} text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        aria-label={link.name || "Social link"}
      >
        <span className="text-lg md:text-xl">
          {link.icon}
        </span>
      </motion.a>
    ))}
  </div>
</motion.div>

          <motion.div 
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.form 
              onSubmit={onSubmit} 
              className="p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
              variants={itemVariants}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div variants={itemVariants} className="relative group">
                  <FaUser className="absolute left-4 top-4 text-cyan-400 z-10" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent font-inter text-slate-100 placeholder-slate-400 transition-all duration-300 hover:border-cyan-400/50 backdrop-blur-sm"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </motion.div>

                <motion.div variants={itemVariants} className="relative group">
                  <FaEnvelope className="absolute left-4 top-4 text-cyan-400 z-10" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent font-inter text-slate-100 placeholder-slate-400 transition-all duration-300 hover:border-cyan-400/50 backdrop-blur-sm"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </motion.div>

                <motion.div variants={itemVariants} className="relative group">
                  <FaPhone className="absolute left-4 top-4 text-cyan-400 z-10" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent font-inter text-slate-100 placeholder-slate-400 transition-all duration-300 hover:border-cyan-400/50 backdrop-blur-sm"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </motion.div>

                <motion.div variants={itemVariants} className="relative group">
                  <FaEdit className="absolute left-4 top-4 text-cyan-400 z-10" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject (optional)"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent font-inter text-slate-100 placeholder-slate-400 transition-all duration-300 hover:border-cyan-400/50 backdrop-blur-sm"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="relative group mb-8">
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-slate-800/50 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent font-inter text-slate-100 placeholder-slate-400 transition-all duration-300 hover:border-cyan-400/50 resize-none backdrop-blur-sm"
                ></textarea>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex justify-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative inline-flex items-center gap-3 px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-2xl hover:shadow-[0_20px_40px_rgba(6,182,212,0.3)] transition-all duration-300 font-inter tracking-wider overflow-hidden ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-emerald-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="w-5 h-5" />
                      </>
                    )}
                  </span>
                </motion.button>
              </motion.div>

              {result && (
                <motion.div 
                  className={`text-center mt-6 font-inter flex items-center justify-center gap-2 ${result.includes('success') ? 'text-emerald-400' : result.includes('Sending') ? 'text-cyan-400' : 'text-red-400'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {result.includes('success') && <FaCheck className="w-4 h-4" />}
                  {result}
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;