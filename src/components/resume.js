

// No need to configure worker - react-pdf handles it automatically

const Resume = () => {
  return (
    <div>
      <iframe
        src="/portfolio-uni/resume.pdf"
        title="Resume PDF Viewer" // unique descriptive title
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default Resume;
