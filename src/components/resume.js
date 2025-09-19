

// No need to configure worker - react-pdf handles it automatically

const Resume = () => {
  return (
    <div>
      <iframe
        src="/resume.pdf"
        title="Resume PDF Viewer" // unique descriptive title
        width="600"
        height="400"
      ></iframe>
    </div>
  );
};

export default Resume;
