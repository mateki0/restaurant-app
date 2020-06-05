import React from 'react';
import './contact.css';
import {Boxes, WelcomeToRestaurant} from '../Body/Body';


function Title(){
  return(
    <div className="menu-container">
      <div className="title-container">
        <h2>Contact us</h2>
      </div>
    </div>
  )
}

function ContactForm(){
  return(
    <div className='contact-container'>
      <div className="container informations">
        <div>
        <span>Adress: </span><span>Lorem ipsum</span>
        </div>
        <div>
        <span>Our Email: </span><span>Lorem ipsum</span>
        </div>
        <div>
        <span>Phone: </span><span>Lorem ipsum</span>
        </div>
        <div>
        <span>Feel free to phone or send us mail</span>
        </div>
      </div>
    </div>
  )
}

export default function Contact(){
  return(
    <main>
      <Title/>
      <ContactForm/>
      <Boxes/>
      <WelcomeToRestaurant/>
    </main>
  )
}
