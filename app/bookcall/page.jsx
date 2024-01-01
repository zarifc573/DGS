'use client'

import { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/digital-growth-studio/book-a-call?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1b1c1e&text_color=ffffff&primary_color=d2ff3a" style={{ minWidth: '320px', height: '100vh' }} />
  );
};

export default CalendlyWidget;