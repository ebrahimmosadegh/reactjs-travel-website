import React from 'react';
import Button from '../../Components/UI/Button';
import './SignUpForm.css'
function SignUpForm() {
  return (
    <div className='signup-container'>
        <div className='signup-form'>
            <input className='text-input' type='text' placeholder='Vorname und Nachname' autoComplete='off' required />
            <input className='text-input' type='number'placeholder='Telefons Nummer' autoComplete='off' required />
            <input className='text-input' type='email'placeholder='Geben Sie Ihre E-Mail-Adresse ein' autoComplete='off' required />
            <input className='text-input' type='password'placeholder='Geben Sie Ihre Passwort ein' autoComplete='off' required />
            <Button buttonStyle='btn--tour' buttonSize='btn--large'>Anmeldung</Button>
        </div>
    </div>
  )
}

export default SignUpForm
