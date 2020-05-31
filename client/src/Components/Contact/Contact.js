import React from 'react';
import './contact.css';
import {Boxes, WelcomeToRestaurant} from '../Body/Body';


function Title(){
  return(
    <div className="title-container">
      <div className="container">
        <h1>Contact us</h1>
      </div>
    </div>
  )
}

function ContactForm(){
  return(
    <div className='contact-container'>
      <div className="container">
        <form className="contact-form">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Your name"/>
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" placeholder="Your E-mail adress"/>
        <label for="textarea">What do you want to tell us?</label>
        <textarea rows="6" cols="50" id="textarea" name="textarea"/>
        <button type="submit" className="contact-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default function Contact(){
  return(
    <div>
      <Title/>
      <ContactForm/>
      <Boxes/>
      <WelcomeToRestaurant/>
    </div>
  )
}
