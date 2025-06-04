import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventsList from "./components/EventsList";
import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <EventsList />
    </div>
  );
}
