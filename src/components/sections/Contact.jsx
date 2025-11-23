// src/components/sections/Contact.jsx

import React from 'react';
import { EMAIL } from '../../assets/config';

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="
        bg-gray-800 p-10 rounded-xl text-white
        transition duration-300 ease-in-out
        hover:shadow-xl hover:-translate-y-1 cursor-default
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl font-bold mb-3">Let's Connect</h3>
        <p className="text-lg mb-6 text-gray-300">
          I am actively seeking Developer roles and am eager to discuss how my analytical background can benefit your team. 
          <br />You can also reach me directly at <a href={`mailto:${EMAIL}`} className="text-indigo-400 hover:text-indigo-300 transition underline">{EMAIL}</a>.
        </p>

        {/* NETLIFY FORM: The key attributes are data-netlify="true" and the hidden input */}
        <form 
          name="contact-portfolio" 
          method="POST" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field" 
          className="space-y-4 max-w-xl"
        >
          {/* REQUIRED: Hidden input field to identify the form in Netlify */}
          <input type="hidden" name="form-name" value="contact-portfolio" />
          
          {/* REQUIRED: Honeypot field for spam prevention */}
          <p className="hidden">
            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
          </p>

          {/* Form Fields */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              autoComplete="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 bg-white text-gray-900 focus:ring-indigo-500 focus:border-indigo-500" 
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              autoComplete="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 bg-white text-gray-900 focus:ring-indigo-500 focus:border-indigo-500" 
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              required 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 bg-white text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-indigo-400 hover:bg-indigo-300 transition transform hover:scale-[1.01]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
