// src/components/sections/Contact.jsx

import React, { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { EMAIL, FORMSPREE_ID } from '../../assets/config';
import { Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const successRef = useRef(null);
  
  // Focus success message when submitted for A11y
  useEffect(() => {
    if (state.succeeded && successRef.current) {
      successRef.current.focus();
    }
  }, [state.succeeded]);

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="
        pt-12 pb-20 md:pt-16 md:pb-28 /* <--- CRITICAL FIX: Decoupled padding */
        bg-gradient-to-br from-gray-900 to-gray-800 text-white
        relative overflow-hidden
      "
    >
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <header className="text-center mb-10 md:mb-14 animate-in fade-in duration-1000 motion-reduce:animate-none">
          <h2
            id="contact-title"
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            Let’s Connect
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-balance">
            I’m open to full-time roles, freelance opportunities, or just interesting conversations.
            Feel free to reach out directly at{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-violet-400 hover:text-violet-300 underline underline-offset-4 transition-colors duration-200"
            >
              {EMAIL}
            </a>.
          </p>
        </header>

        {state.succeeded ? (
          <div
            ref={successRef}
            tabIndex={-1}
            role="status"
            aria-live="polite"
            className="
              bg-green-900/20 border border-green-500/50 text-green-100
              px-8 py-10 rounded-2xl shadow-2xl text-center
              animate-in zoom-in-95 duration-500
              max-w-xl mx-auto backdrop-blur-sm
            "
          >
            <h3 className="text-2xl font-bold mb-4">Message Sent Successfully!</h3>
            <p className="text-lg opacity-90">
              Thank you for reaching out — I’ll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-800 motion-reduce:animate-none"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text" 
                name="name"
                required
                autoComplete="name"
                className="
                  w-full px-5 py-4 rounded-xl bg-gray-800/70 border border-gray-600
                  text-white placeholder-gray-300
                  focus:outline-none focus:ring-4 focus:ring-violet-500/30 focus:border-violet-500
                  transition-all duration-300
                "
                placeholder="Your name"
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
                className="mt-2 text-sm text-red-400"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email" 
                name="email"
                required
                autoComplete="email"
                className="
                  w-full px-5 py-4 rounded-xl bg-gray-800/70 border border-gray-600
                  text-white placeholder-gray-300
                  focus:outline-none focus:ring-4 focus:ring-violet-500/30 focus:border-violet-500
                  transition-all duration-300
                "
                placeholder="your.email@example.com"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="mt-2 text-sm text-red-400"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="
                  w-full px-5 py-4 rounded-xl bg-gray-800/70 border border-gray-600
                  text-white placeholder-gray-300
                  focus:outline-none focus:ring-4 focus:ring-violet-500/30 focus:border-violet-500
                  transition-all duration-300 resize-none
                "
                placeholder="Tell me about your project, role, or idea..."
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="mt-2 text-sm text-red-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={state.submitting}
              className="
                w-full py-4 px-8 rounded-xl mt-4
                text-lg font-bold text-white bg-violet-600
                hover:bg-violet-700 hover:shadow-lg hover:-translate-y-1
                focus:outline-none focus:ring-4 focus:ring-violet-500/50
                disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
                transition-all duration-300 shadow-md
                flex items-center justify-center gap-2
              "
            >
              {state.submitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={20} className="ml-1" />
                </>
              )}
            </button>
            
            {/* Global Error Message (if formspree fails entirely) */}
            {state.errors && state.errors.length > 0 && (
               <p className="text-center text-red-400 mt-4" role="alert">
                 Something went wrong. Please try again or email me directly.
               </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
