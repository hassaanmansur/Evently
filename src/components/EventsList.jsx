import React, { useState } from "react";
import EventCard from "./EventCard";
import SearchBar from "./SearchBar";
import eventsData from "../data/events";

export default function EventsList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = eventsData.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="events-section">
      <h2>Featured Events</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="events-grid">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
}
