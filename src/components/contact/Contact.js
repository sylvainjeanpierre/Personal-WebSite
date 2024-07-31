import './Contact.scss';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      alert('Tous les champs doivent être remplis.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Veuillez entrer une adresse email valide.');
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm('service_rexqhve', 'template_x3r7inr', form.current, {
        publicKey: 'GqW9W4CW5kTGK05n-'
      })
      .then(
        () => {
          resetForm();
          setIsSubmitting(false);
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 5000);
        },
        () => {
          setIsSubmitting(false);
          setShowError(true);
          setTimeout(() => setShowError(false), 5000);
        }
      );
  };

  const resetForm = () => {
    document.querySelector('form').reset();
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" placeholder="Entrez votre nom" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Entrez votre email" />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Entrez votre message"
          rows="10"></textarea>
        {!isSubmitting && !showSuccess && !showError && <button type="submit">Envoyer</button>}
        {isSubmitting && <p id="loading">Envoi du message en cours ...</p>}
        {showSuccess && (
          <p id="success">Message envoyé ! Je reviens vers vous dans les plus brefs délais !</p>
        )}
        {showError && <p id="error">Erreur lors de l'envoi du message</p>}
      </form>
    </section>
  );
};

export default Contact;
