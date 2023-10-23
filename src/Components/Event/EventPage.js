import React from "react";
import BannerEvent from "./BannerEvent";
import EventEvent from "./EventEvent";

export default function EventPage() {
  return (
    <div id="event-v1" className="event-page-one" data-style="default">
      <BannerEvent />
      <EventEvent />
    </div>
  );
}
