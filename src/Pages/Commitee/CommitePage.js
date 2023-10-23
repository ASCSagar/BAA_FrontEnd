import React from "react";
import BanCommi from "./BanCommi";
import UpcomCommi from "./UpcomCommi";

export default function CommitePage() {
  return (
    <div id="commitee-v1" className="committee-page-one" data-style="default">
      <BanCommi />
      <UpcomCommi />
    </div>
  );
}
