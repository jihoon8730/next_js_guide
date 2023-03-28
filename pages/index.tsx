import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "@/components/events/event-list";
import { eventsDataType } from "@/components/events/events-type";

export default function index() {
  const featuredEvents: eventsDataType[] = getFeaturedEvents();
  console.log("featuredEvents", featuredEvents);
  return (
    <div>
      <ul>
        <EventList items={featuredEvents} />
      </ul>
    </div>
  );
}
