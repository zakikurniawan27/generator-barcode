import { useRef, useState } from "react";
import { QRCode } from "react-qrcode-logo";
import Button from "../components/Button";

const Home = () => {
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
          <div className="d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-center mb-3">
              <img
                id="logo"
                src="/logo-app-qrcode-white.svg"
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
            <div id="content-input" className="d-flex flex-row p-2">
              <input
                id="url"
                type="text"
                placeholder="Ketikan sesuatu yang ingin dijadikan barcode..."
                className="form-control shadow-sm me-3"
                onChange={(e) => {
                  e.preventDefault();
                  setUrl(e.target.value);
                }}
              />
              <div id="content-button-input">
                <Button handleSubmit={handleClick}>Generate</Button>
              </div>
            </div>
            {qrCode && (
              <>
                <div className="d-flex justify-content-center mt-3">
                  <QRCode
                    ref={ref}
                    value={url}
                    logoImage="/logo-app-qrcode.svg"
                    logoWidth={37}
                    size={200}
                    ecLevel="M"
                    enableCORS
                    qrStyle="fluid"
                    logoPadding={1}
                    logoPaddingStyle="circle"
                    eyeRadius={5}
                  />
                </div>
                <div className="text-center mt-3">
                  <Button handleSubmit={handleDownload}>Download</Button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
