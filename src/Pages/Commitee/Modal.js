import React from "react";

function Modal(props) {
  return (
    <div id="myModal" class="modall">
      <div class="modall-content">
        <span
          class="close"
          onClick={() => props.setModal({ show: false, data: "", name: "" })}
        >
          &times;
        </span>
        <h4>{props.name}</h4>
        <hr />
        <p dangerouslySetInnerHTML={{ __html: props.data }} />
      </div>
    </div>
  );
}

export default Modal;
