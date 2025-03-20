'use client';

import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-8">
      <div className="max-w-lg w-full bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Phone</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              rows={4} 
              required 
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold">
            Send Message
          </button>
        </form>
        <div className="text-gray-400 text-sm text-center mt-4">
          <p>Contact us at: +91 9082574346</p>
          <p>Email: info@applically.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
