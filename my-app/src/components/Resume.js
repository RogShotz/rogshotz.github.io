import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import resume_pdf from '../assets/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  return (
    <div
      className="resume-container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}
    >
      <h2>My Resume</h2>
      <Document file={resume_pdf}>
        <Page pageNumber={1} width={800} />
      </Document>
      <p>Page 1 of Resume</p>

      {/* Download button */}
      <a
        href={resume_pdf}
        download
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#007bff",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "4px",
        }}
      >
        Download Resume
      </a>
    </div>
  );
}

export default Resume;