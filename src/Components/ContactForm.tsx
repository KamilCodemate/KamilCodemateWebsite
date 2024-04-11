import React from 'react';
import './ComponentStyles/ContactForm.scss';
const ContactForm: React.FC = () => {
  return (
    <div className='contact-form'>
      <form>
        <div className='contact-form-first-row'>
          <div className='name-surname'>
            <span>Imię i nazwisko:</span>
            <input type='text' required />
          </div>{' '}
          <div className='email'>
            <span>Adres e-mail:</span>
            <input type='email' required />
          </div>
        </div>
        <div className='contact-form-second-row'>
          <div className='phone-number'>
            <span>Numer telefonu (opcjonalne):</span>
            <input type='tel' />
          </div>
        </div>
        <div className='contact-form-third-row'>
          <div className='message-content'>
            {' '}
            <span>Treść wiadomości:</span>
            <textarea></textarea>
          </div>
        </div>
        <div className='contact-form-fourth-row'>
          <div className='consent'>
            {' '}
            <input type='checkbox' />{' '}
            <span>
              Zapoznałem się i akceptuję postanowienia <u>polityki prywatności</u>
            </span>
          </div>
        </div>
        <div className='contact-form-fifth-row'>
          <div className='send-btn'>
            {' '}
            <input type='button' value='Wyślij' />{' '}
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
