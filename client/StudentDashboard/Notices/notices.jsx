const { useState, useEffect } = React;

function NoticesPage() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("notices.json")
      .then(response => response.json())
      .then(data => {
        setNotices(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to load notices:", error);
        setNotices([]);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{
      fontFamily: "Segoe UI, sans-serif",
      padding: "2rem",
      maxWidth: "800px",
      margin: "0 auto",
    }}>
      <h1 style={{ color: "#2E7D32" }}>📢 Notices</h1>

      {loading ? (
        <p>Loading notices...</p>
      ) : notices.length === 0 ? (
        <p style={{ color: "#aaa", fontStyle: "italic", fontSize: "1.1rem" }}>
          No notices at the moment.
        </p>
      ) : (
        <ul style={{ padding: 0 }}>
          {notices.map((notice, idx) => (
            <li key={idx} style={{
              padding: "10px",
              margin: "10px 0",
              borderBottom: "1px solid #ddd"
            }}>
              {notice}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() => window.location.href = "../student_dashboard.html"}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          backgroundColor: "#2E7D32",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        ← Back to Dashboard
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<NoticesPage />);
