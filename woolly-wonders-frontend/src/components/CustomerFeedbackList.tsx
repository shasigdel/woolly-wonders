import { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface Feedback {
  name: string;
  headline: string;
  rating: number;
  suggestion: string;
}

const GOOGLE_JSON_URL =
  "https://docs.google.com/spreadsheets/d/12mMraKqH64lCWOETgDeoQMDPIa7JZ7aeJgw8U6F6HBw/gviz/tq?tqx=out:json";

const CustomerFeedbackList = () => {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(GOOGLE_JSON_URL)
      .then((res) => res.text())
      .then((text) => {
        const jsonStr = text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1);
        const data = JSON.parse(jsonStr);

        const parsed: Feedback[] = data.table.rows
          .map((row: any) => ({
            name: row.c[1]?.v || "Anonymous",
            suggestion: row.c[2]?.v || "",
            rating: Number(row.c[3]?.v) || 5,
            headline: row.c[4]?.v || "",
          }))
          .filter((f: Feedback) => f.name || f.suggestion || f.headline);

        parsed.sort((a: any, b: any) => {
          const dateA = new Date(data.table.rows.find((r: any) => r.c[1]?.v === a.name)?.c[0]?.v);
          const dateB = new Date(data.table.rows.find((r: any) => r.c[1]?.v === b.name)?.c[0]?.v);
          return dateB.getTime() - dateA.getTime();
        });

        setFeedback(parsed);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sheet load error:", err);
        setLoading(false);
      });
  }, []);

  // Auto-rotate feedback every 4 seconds if more than 2 items
  useEffect(() => {
    if (feedback.length > 2) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 2) % feedback.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [feedback]);

  const styles: Record<string, React.CSSProperties> = {
    container: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '32px'
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '8px',
      textShadow: '0 2px 20px rgba(0,0,0,0.2)'
    },
    subtitle: {
      fontSize: '14px',
      color: 'rgba(255,255,255,0.9)',
      maxWidth: '500px',
      margin: '0 auto'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '16px',
      maxWidth: '600px',
      margin: '0 auto',
      // Removed fixed minHeight so it shrinks with content
    },
    card: {
      background: 'white',
      borderRadius: '12px',
      padding: '24px', // Slightly increased padding for breathing room
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column' as const,
      // Removed minHeight so it fits short text snugly
      transition: 'all 0.3s ease',
      position: 'relative' as const,
      overflow: 'hidden'
    },
    cardAccent: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
    },
    cardContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '8px' // Adds consistent spacing between elements
    },
    headline: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#1a202c',
      lineHeight: '1.3'
    },
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '3px'
    },
    suggestion: {
      fontSize: '14px',
      color: '#4a5568',
      lineHeight: '1.6',
      fontStyle: 'italic',
      marginTop: '8px'
    },
    footer: {
      marginTop: '16px',
      paddingTop: '12px',
      borderTop: '1px solid #e2e8f0'
    },
    name: {
      fontSize: '14px',
      fontWeight: '600',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    loading: {
      textAlign: 'center' as const,
      padding: '40px 20px'
    },
    loadingText: {
      fontSize: '16px',
      color: 'white',
      marginTop: '12px'
    },
    spinner: {
      width: '32px',
      height: '32px',
      border: '3px solid rgba(255,255,255,0.3)',
      borderTop: '3px solid white',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      margin: '0 auto'
    },
    emptyState: {
      textAlign: 'center' as const,
      padding: '40px 20px',
      color: 'white'
    },
    emptyIcon: {
      fontSize: '48px',
      marginBottom: '12px'
    },
    emptyText: {
      fontSize: '18px',
      fontWeight: '600'
    },
    dotsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '24px'
    },
    dot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.4)',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s',
      padding: 0
    },
    dotActive: {
      width: '24px',
      borderRadius: '4px',
      background: 'white'
    }
  };

  return (
    <>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .feedback-card {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }
        .feedback-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.25);
        }
        ${feedback.map((_, idx) => `
          .feedback-card:nth-child(${idx + 1}) {
            animation-delay: ${idx * 0.1}s;
          }
        `).join('')}
      `}</style>

      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Customer Feedback</h1>
          <p style={styles.subtitle}>
            See what our wonderful customers have to say about Woolly Wonders
          </p>
        </div>

        {loading ? (
          <div style={styles.loading}>
            <div style={styles.spinner} />
            <p style={styles.loadingText}>Loading feedback...</p>
          </div>
        ) : feedback.length === 0 ? (
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}>💬</div>
            <p style={styles.emptyText}>No feedback yet</p>
            <p style={{fontSize: '16px', marginTop: '8px', opacity: 0.9}}>
              Be the first to share your experience!
            </p>
          </div>
        ) : (
          <>
            <div style={styles.grid}>
              {feedback.length <= 2 ? (
                // Show all if 2 or fewer
                feedback.map((f, idx) => (
                  <div key={idx} className="feedback-card" style={styles.card}>
                    <div style={styles.cardAccent} />
                    
                    <div style={styles.cardContent}>
                      <h3 style={styles.headline}>
                        {f.headline || "Wonderful Experience"}
                      </h3>

                      <div style={styles.ratingContainer}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={16}
                            fill={star <= f.rating ? "#fbbf24" : "none"}
                            stroke={star <= f.rating ? "#fbbf24" : "#d1d5db"}
                            strokeWidth={2}
                          />
                        ))}
                      </div>

                      <p style={styles.suggestion}>
                        "{f.suggestion || "Great experience overall!"}"
                      </p>
                    </div>

                    <div style={styles.footer}>
                      <p style={styles.name}>— {f.name}</p>
                    </div>
                  </div>
                ))
              ) : (
                // Show 2 at a time with rotation
                [currentIndex, currentIndex + 1]
                  .map(i => i % feedback.length)
                  .map((idx, position) => (
                    <div key={`${idx}-${position}`} className="feedback-card" style={styles.card}>
                      <div style={styles.cardAccent} />
                      
                      <div style={styles.cardContent}>
                        <h3 style={styles.headline}>
                          {feedback[idx].headline || "Wonderful Experience"}
                        </h3>

                        <div style={styles.ratingContainer}>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={16}
                              fill={star <= feedback[idx].rating ? "#fbbf24" : "none"}
                              stroke={star <= feedback[idx].rating ? "#fbbf24" : "#d1d5db"}
                              strokeWidth={2}
                            />
                          ))}
                        </div>

                        <p style={styles.suggestion}>
                          "{feedback[idx].suggestion || "Great experience overall!"}"
                        </p>
                      </div>

                      <div style={styles.footer}>
                        <p style={styles.name}>— {feedback[idx].name}</p>
                      </div>
                    </div>
                  ))
              )}
            </div>
            
            {/* Dots indicator if more than 2 items */}
            {feedback.length > 2 && (
              <div style={styles.dotsContainer}>
                {Array.from({ length: Math.ceil(feedback.length / 2) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx * 2)}
                    style={{
                      ...styles.dot,
                      ...(Math.floor(currentIndex / 2) === idx ? styles.dotActive : {})
                    }}
                    aria-label={`Go to feedback ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default CustomerFeedbackList;