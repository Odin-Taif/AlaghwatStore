import { useEffect, useState } from "react";
import QRCode from "qrcode";
import Image from "next/image";
import style from "./qrModal.module.scss";
import qr from "../../../public/Assests/webP/MJContactCard.png";

function QrModal(props) {
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanUp() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  if (!props.showQr) {
    return null;
  }

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  return (
    <div className={style.modal} onClick={props.onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.modalBody}>
          {qr && (
            <>
              <Image
                src={qr}
                priority={true}
                width="400"
                height="400"
                alt={"QR CODE"}
                draggable={false}
              />
            </>
          )}
        </div>
        <div className={style.modalFooter}>
          <button className={style.modalBtn} onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default QrModal;
