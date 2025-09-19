

// No need to configure worker - react-pdf handles it automatically

const Resume = () => {
  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
      <iframe
        src="/portfolio-uni/resume.pdf"
        title="Resume PDF Viewer"
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>
    </div>
  );
};

export default Resume;
