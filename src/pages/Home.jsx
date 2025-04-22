import { useRef, useState } from "react";
import { QRCode } from "react-qrcode-logo";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";

const Home = () => {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [file, setFile] = useState({
    name: "",
    logo: "",
  });

  const ref = useRef();

  const handleClick = () => {
    setQrCode(url);
  };

  const handleDownload = () => {
    ref.current?.download();
  };

  const checkboxHandler = () => {
    setChecked(!isChecked);
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
            <Checkbox checkHandler={checkboxHandler} />
            {isChecked == true && (
              <div className="input-group">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile04"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                  onChange={(e) => {
                    const selectedFile = e.target.files[0];
                    if (selectedFile) {
                      const objectUrl = URL.createObjectURL(selectedFile);
                      setFile({ ...file, name: selectedFile, logo: objectUrl });
                    }
                  }}
                />
              </div>
            )}
            {qrCode && (
              <>
                <div className="d-flex justify-content-center mt-3">
                  <QRCode
                    ref={ref}
                    value={url}
                    logoImage={file.logo}
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
