// src/components/sections/Contact.jsx

import React, { useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { EMAIL } from '../../assets/config';

export default function Contact() {
  // Use a ref to access the form element for manual resetting
  const formRef = useRef(null);
  
  // Pass only the unique Form ID, NOT the full URL.
  const [state, handleSubmit] = useForm("xovzardj");

  const onSubmit = async (e) => {
    // This calls the Formspree API
    const result = await handleSubmit(e);

    // Reset form inputs on successful submission to clear visible text
    if (result.succeeded && formRef.current) {
      formRef.current.reset();
    }
  };


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
          I’m open to new developer roles, other tech-related positions, and potential collaborations. 
          <br />You can also reach me directly at <a href={`mailto:${EMAIL}`} className="text-indigo-400 hover:text-indigo-300 transition underline">{EMAIL}</a>.
        </p>

        {/* SUCCESS MESSAGE STATE */}
        {state.succeeded ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative shadow-md mb-6" role="alert">
            <strong className="font-bold">Message Sent Successfully!</strong>
            <span className="block sm:inline"> Thanks for reaching out. I will get back to you shortly.</span>
            {/* Add a button to easily send another message */}
            <button 
              onClick={() => window.location.reload()} 
              className="mt-3 block text-sm font-medium text-green-700 hover:text-green-900 underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          /* FORMSPREE FORM */
          <form ref={formRef} onSubmit={onSubmit} className="space-y-4 max-w-xl">
            
            {/* Name Field */}
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
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            
            {/* Email Field */}
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
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                required 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 bg-white text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={state.submitting}
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-indigo-400 hover:bg-indigo-300 transition transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
