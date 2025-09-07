// Google Ads conversion tracking
export const trackConversion = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17495391485/3i0vCJne3ZQbEP35uZZB',
      'value': 1.0,
      'currency': 'BRL'
    });
  }
};

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}