import React from "react";
import BanSingle from "./BanSingle";
import EventSingle from "./EventSingle";

export default function SingleEventPage() {
  return (
    <div id="event-v1" className="event-details-page" data-style="default">
      <BanSingle />
      <EventSingle />
    </div>
  );
}
