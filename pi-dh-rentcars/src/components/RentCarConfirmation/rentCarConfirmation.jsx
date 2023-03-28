import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styleRentCarConfirmation.scss'

export function RentCarConfirmation() {
  function Checkelement() {
    return (
      <div>
      <i className="bi bi-patch-check-fill"></i>
      </div>
    );
  }
  return (
    <div className="confirmation-page">
      <Checkelement className="icon" />
      <h1 className='obrigado' >Muito Obrigado!</h1>
      <p className='obrigado-text'>Sua reserva foi feita com sucesso.</p>
      <Link to="/" className="btn-ok">
        Ok
      </Link>
    </div>
  );
}