import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-panel">
      <div className="footer-left">
        <span>Ln 12, Col 32</span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>LF</span>
      </div>

      <div className="footer-right">
        <span>HTML</span>
        <span>⚡ Prettier</span>
        <span className="port">● Live</span>
      </div>
    </footer>
  );
}