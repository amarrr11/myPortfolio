import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const form = useRef<any>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0zccp5d', 'template_ty5dvu4', form.current, {
        publicKey: '1gdPP7tLu14S6Kiij',
      })
      .then(
        () => {
          alert('Thank you for your message! I will get back to you soon.');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send the message. Please try again.');
        },
      );
  };

  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? 'bg-[#0a192f] text-white' : 'bg-[#0a192f] text-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2">
          Contact Me
          <div className="h-1 w-16 bg-[#64ffda] mt-2"></div>
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-8 text-gray-300">
              I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#64ffda]" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-gray-300">amarshyam9199@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#64ffda]" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-gray-300">+918969079008</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#64ffda]" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Location</h3>
                  <p className="text-gray-300">Lovely Professional University, Phagwara, Punjab, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/amarrr11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:text-[#64ffda]/80 transition-colors"
                >
                  <Github className="h-8 w-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/amarnathtripathy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:text-[#64ffda]/80 transition-colors"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <form ref={form} onSubmit={handleSubmit} className="p-8 rounded-lg bg-[#112240]">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-gray-600 bg-[#0a192f] text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-gray-600 bg-[#0a192f] text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-gray-600 bg-[#0a192f] text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 rounded-md border border-gray-600 bg-[#0a192f] text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#64ffda] text-[#0a192f] font-medium py-3 px-6 rounded flex items-center justify-center hover:bg-opacity-80 transition-all duration-300"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
