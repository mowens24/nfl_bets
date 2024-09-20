type ConsentCookie = {
    advertising: boolean;
    essential: boolean;
    functional: boolean;
    performance: boolean;
  };
  
  export interface CookieConsent {
    checkForCookieConsent: () => void;
    getConsentCookie: () => ConsentCookie;
  }