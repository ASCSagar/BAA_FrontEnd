import React from "react";
import BanContact from "./BanContact";
import ConContact from "./ConContact";

export default function ContactPage() {
  return (
    <div id="contact-us-v1" className="contact-page-one" data-style="default">
      <BanContact />
      <ConContact />
    </div>
  );
}
