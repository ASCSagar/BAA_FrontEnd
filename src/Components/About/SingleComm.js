import React, { useState } from "react";
import Modal from "../../Pages/Commitee/Modal";

export default function SingleComm({
  image,
  name,
  designation,
  colLg,
  description,
}) {
  const [modal, modalData] = useState({ show: false, data: "", name: "" });
  return (
    <>
      <div className={`${colLg} mb-4`}>
        {/* single-committee-member container-box */}
        <div
          className="shadow-soft mainComeetie cursorP"
          onClick={() => {
            modalData({ name, data: description, show: true });
          }}
        >
          <div className="commitee-thumb p-5">
            <img
              src={image}
              className="img-fluid comitteImg roundedImg"
              alt="Committee"
            />
          </div>
          <div className="text-center mb-3">
            <h4>{name}</h4>
            <span className="committee-deg fw-3">{designation}</span>
          </div>
        </div>
      </div>
      {modal.show ? (
        <Modal data={modal.data} name={modal.name} setModal={modalData} />
      ) : (
        ""
      )}
    </>
  );
}
