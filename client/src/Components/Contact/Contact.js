import React from "react";
import "./contact.css";
import Boxes from "../Body/Boxes";
import WelcomeToRestaurant from "../Body/WelcomeToRestaurant";
import Title from "../Title";
import { ContactForm } from "./ContactForm";

export default function Contact() {
  return (
    <main>
      <Title value="Contact Us" />
      <ContactForm />
      <Boxes />
      <WelcomeToRestaurant />
    </main>
  );
}
