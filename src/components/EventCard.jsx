import React from "react";

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.time}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p>{event.description}</p>
      <button className="register-btn">Register</button>
    </div>
  );
}
