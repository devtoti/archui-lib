// LogRocket user identification script
(function() {
  'use strict';
  
  // Wait for LogRocket to be available
  function identifyUser() {
    if (!window.LogRocket) {
      // Retry after a short delay if LogRocket isn't loaded yet
      setTimeout(identifyUser, 100);
      return;
    }

    // Generate or retrieve a unique visitor ID
    function getVisitorId() {
      const STORAGE_KEY = 'archui-visitor-id';
      let visitorId = localStorage.getItem(STORAGE_KEY);
      
      if (!visitorId) {
        // Generate a unique ID (simple UUID-like string)
        visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem(STORAGE_KEY, visitorId);
      }
      
      return visitorId;
    }

    // Get user preferences from localStorage
    function getUserMetadata() {
      const metadata = {
        // Theme preferences
        themeType: localStorage.getItem('archui-theme-type') || 'light',
        // First visit tracking
        firstVisit: !localStorage.getItem('archui-visitor-id'),
        // Browser info
        userAgent: navigator.userAgent,
        language: navigator.language || navigator.userLanguage,
        platform: navigator.platform,
      };

      // Mark as returning visitor after first identification
      if (metadata.firstVisit) {
        localStorage.setItem('archui-visitor-id', getVisitorId());
      }

      return metadata;
    }

    const visitorId = getVisitorId();
    const metadata = getUserMetadata();

    // Identify the user with LogRocket
    window.LogRocket.identify(visitorId, {
      // Basic identification
      visitorId: visitorId,
      visitorType: metadata.firstVisit ? 'new' : 'returning',
      
      // Theme preferences
      themeType: metadata.themeType,
      
      // Browser/environment info
      browser: metadata.userAgent,
      language: metadata.language,
      platform: metadata.platform,
      
      // Timestamp
      identifiedAt: new Date().toISOString(),
    });

    // Track first visit separately
    if (metadata.firstVisit) {
      window.LogRocket.track('First Visit');
    }
  }

  // Start identification when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', identifyUser);
  } else {
    identifyUser();
  }
})();

