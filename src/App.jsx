import { useRef, useState } from "react";
// import QRCode from "qrcode";
import { QRCode } from "react-qrcode-logo";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const ref = useRef();

  const handleClick = () => {
    setQrCode(url);
  };

  const handleDownload = () => {
    ref.current?.download();
  };
  return (
    <>
      <section className="containter">
        <div
          id="background"
          className={`${
            !qrCode
              ? "d-flex justify-content-center align-items-center w-100 vh-100"
              : qrCode
              ? "d-flex justify-content-center align-items-center w-100 mh-100"
              : ""
          }`}
        >
          <div
            id="content"
            className="d-flex flex-column justify-content-center border border-2 rounded"
          >
            <div className="d-flex justify-content-center mb-3">
              <img
                id="logo"
                src="src\assets\logo-app-qrcode.png"
                alt="logo qr code"
                width={220}
                height={220}
              />
            </div>
            <h1
              className="fw-bold text-center"
              id="title"
              style={{ fontSize: "50px" }}
            >
              Generator Barcode
            </h1>
            <div className="d-flex flex-row p-2">
              <input
                type="text"
                placeholder="Ketikan sesuatu yang ingin dijadikan barcode..."
                className="form-control shadow-sm me-3"
                onChange={(e) => {
                  e.preventDefault();
                  setUrl(e.target.value);
                }}
              />
              <button type="submit" onClick={handleClick}>
                Generate
              </button>
            </div>
            {qrCode && (
              <>
                <div className="d-flex justify-content-center mt-3">
                  <QRCode
                    ref={ref}
                    value={url}
                    logoImage="public\logo-app-qrcode-black.png"
                    logoWidth={37}
                    size={200}
                    ecLevel="M"
                    enableCORS
                    removeQrCodeBehindLogo
                    qrStyle="fluid"
                    logoPadding={7}
                    logoPaddingStyle="circle"
                    eyeRadius={5}
                  />
                </div>
                <div className="text-center mt-3">
                  <button type="submit" onClick={handleDownload}>
                    Download
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
