import { ExternalLink } from "lucide-react";

const GoogleFeedbackForm = () => {
  // NOTE: For the best experience, replace this shortened URL with the full "Embed HTML" link 
  // from your Google Form (Send -> <> Icon). 
  // It usually looks like: https://docs.google.com/forms/d/e/.../viewform?embedded=true
  const formUrl = "https://forms.gle/WRt4s4vjcWjPeDER6";

  return (
    <div className="feedback-container">
      <style>{`
        .feedback-container {
          width: 100%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .feedback-card {
          background: white;
          border-radius: 20px;
          padding: 24px;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }

        .feedback-iframe {
          width: 100%;
          height: 800px;
          border: none;
          border-radius: 12px;
          background-color: #f8fafc; /* Placeholder background while loading */
        }

        .fallback-btn {
          margin-top: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #667eea;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 24px;
          border-radius: 12px;
          background-color: #f0f4f8;
          transition: all 0.2s ease;
        }

        .fallback-btn:hover {
          background-color: #e0e7ff;
          color: #5a67d8;
          transform: translateY(-1px);
        }

        /* Mobile Optimization */
        @media (max-width: 600px) {
          .feedback-card {
            padding: 12px; /* Reduce padding to give iframe more width */
            border-radius: 16px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            border: 1px solid #f1f5f9;
          }
          
          .feedback-iframe {
            height: 600px; /* Adjust height for mobile screens */
          }

          .fallback-btn {
            width: 100%; /* Full width button on mobile */
            background-color: #667eea; /* Primary color for better visibility */
            color: white;
            padding: 16px;
            box-sizing: border-box;
          }

          .fallback-btn:hover {
            background-color: #5a67d8;
            color: white;
          }
        }
      `}</style>

      <div className="feedback-card">
        <iframe
          src={formUrl}
          className="feedback-iframe"
          title="Google Feedback Form"
          loading="lazy"
        >
          Loading…
        </iframe>

        {/* Fallback link / Mobile Action Button */}
        <a 
          href={formUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="fallback-btn"
        >
          <span>Open Form in New Window</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default GoogleFeedbackForm;