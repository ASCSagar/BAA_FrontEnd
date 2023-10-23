import React, { useEffect } from "react";

export default function DummyComp() {
  useEffect(() => {
    const el = document.querySelector("#seg1");

    el.addEventListener("mousemove", (e) => {
      el.style.backgroundPositionX = -e.offsetX + "px";
      el.style.backgroundPositionY = -e.offsetY + "px";
    });
  }, []);

  return (
    <div id="seg1">
      <p>Click</p>
      <p>To send me an email</p>
      <p>For business enquiries</p>
    </div>
  );
}
