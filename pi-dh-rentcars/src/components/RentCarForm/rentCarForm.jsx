import './styleRentCarForm.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function RentCarForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')

  function handleRegister(event) {
    event.preventDefault()
    console.log(
      `First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, City: ${city}`
    )
  }

  return (
    <div className="rent-container">
    <div className="rent-form">
      <form onSubmit={handleRegister}>
        <div className="rent-row">
          <div className="rent-form-group">
            <label htmlFor="first-name">Nome</label>
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
              required
            />
          </div>
          <div className="rent-form-group">
            <label htmlFor="last-name">Sobrenome</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={event => setLastName(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="rent-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="rent-form-group">
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={event => setCity(event.target.value)}
            required
          />
        </div>

        <button type="submit">Criar conta</button>
      </form>
    </div>
  </div>
  )
}
