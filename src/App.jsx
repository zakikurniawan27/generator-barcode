import { useState } from "react";
import QRCode from "qrcode";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleClick = () => {
    QRCode.toDataURL(url, (error, url) => {
      if (error) return console.error(error);

      setQrCode(url);
    });
  };
  return (
    <>
      <section className="containter">
        <div className="d-flex justify-content-center align-items-center w-100 h-100">
          <div className="d-flex flex-column justify-content-center p-5 mb-5">
            <div className="d-flex justify-content-center mb-3">
              <img
                src="src\assets\logo-app-qrcode.png"
                alt="logo qr code"
                width={220}
                height={220}
              />
            </div>
            <h1 className="fw-bold" style={{ fontSize: "50px" }}>
              Generate URL to Barcode
            </h1>
            <div className="d-flex flex-row p-2">
              <input
                type="url"
                placeholder="Masukan url yang ingin dijadikan barcode..."
                className="form-control form-control-lg shadow-sm me-3"
                onChange={(e) => {
                  e.preventDefault();
                  setUrl(e.target.value);
                }}
              />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Generate
              </button>
            </div>
            {qrCode && (
              <>
                <img
                  src={qrCode}
                  alt="qr code"
                  width={300}
                  height={300}
                  style={{ marginLeft: "9rem" }}
                />
                <a href={qrCode} download="qrCode.png" className="text-center">
                  <button type="submit" className="btn btn-secondary">
                    Download
                  </button>
                </a>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
