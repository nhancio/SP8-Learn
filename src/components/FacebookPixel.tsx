import React, { useEffect } from 'react';

// Declare fbq as a global function
declare global {
  interface Window {
    fbq: any;
  }
}

interface FacebookPixelProps {
  pixelId: string;
}

const FacebookPixel: React.FC<FacebookPixelProps> = ({ pixelId }) => {
  useEffect(() => {
    // Initialize Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
    }
  }, [pixelId]);

  return null; // This component doesn't render anything
};

// Utility functions for tracking events
export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

// Common event tracking functions
export const trackPurchase = (value: number, currency: string = 'INR') => {
  trackEvent('Purchase', {
    value: value,
    currency: currency,
  });
};

export const trackAddToCart = (value: number, currency: string = 'INR') => {
  trackEvent('AddToCart', {
    value: value,
    currency: currency,
  });
};

export const trackInitiateCheckout = (value: number, currency: string = 'INR') => {
  trackEvent('InitiateCheckout', {
    value: value,
    currency: currency,
  });
};

export const trackViewContent = (contentName: string, value?: number) => {
  trackEvent('ViewContent', {
    content_name: contentName,
    value: value,
  });
};

export const trackLead = (value?: number) => {
  trackEvent('Lead', {
    value: value,
  });
};

export const trackCompleteRegistration = () => {
  trackEvent('CompleteRegistration');
};

export default FacebookPixel; 