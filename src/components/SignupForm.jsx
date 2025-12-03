import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';

const SignupForm = ({ className = '', source = 'landing' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Mock success
      setStatus('success');
      console.log('Form submitted:', { email, source });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center space-x-2 text-green-600 font-medium p-4 bg-green-50 rounded-lg border border-green-100"
      >
        <Check className="w-5 h-5" />
        <span>You're on the list — thank you!</span>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`w-full max-w-md ${className}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-grow relative">
          <input
            type="email"
            placeholder="your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            className={`w-full px-4 py-3 rounded-lg border ${errorMessage ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-100'} focus:border-primary-start focus:ring-4 outline-none transition-all disabled:bg-gray-50 disabled:text-gray-400`}
            aria-label="Email address"
            aria-invalid={!!errorMessage}
            aria-describedby={errorMessage ? "email-error" : undefined}
          />
          {/* Honeypot field */}
          <input 
            type="text" 
            name="website" 
            style={{ display: 'none' }} 
            tabIndex="-1" 
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-gradient-to-r from-primary-start to-primary-end text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
        >
          {status === 'loading' ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            'Get early access'
          )}
        </button>
      </div>
      {errorMessage && (
        <p id="email-error" className="mt-2 text-sm text-red-500 animate-pulse">
          {errorMessage}
        </p>
      )}
      <p className="mt-3 text-sm text-gray-500">
        From founders who built 0→1 at Bubble, Ramp, and Scale AI.
      </p>
    </form>
  );
};

export default SignupForm;