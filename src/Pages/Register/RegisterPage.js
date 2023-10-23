import React from "react";
import BanRegister from "./BanRegister";
import RegRegister from "./RegRegister";

export default function RegisterPage() {
  return (
    <div id="register-v1" className="register-page-one" data-style="default">
      <BanRegister />
      <RegRegister />
    </div>
  );
}
