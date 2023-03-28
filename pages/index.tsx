import React from "react";
import { getFeaturedEvents } from "../dummy-data";

export default function index() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <ul></ul>
    </div>
  );
}
