import React from 'react'
import '../styles/Contact.css';
import imageleft from '../assets/pizzaLeft.jpg';
function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${imageleft})` }}></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form id='contact-form' method="POST">
          <lable htmlFor="name">Full Name</lable>
          <input name="name" placeholder='Enter Full Name' type='text'></input>
          <lable htmlFor="email">Email</lable>
          <input name="email" placeholder='Enter email' type='email'></input>
          <lable htmlFor="message">Message</lable>
         <textarea rows={6} placeholder='Enter message' name='message' required></textarea>
        <button type='submit'>Send Message</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact;
