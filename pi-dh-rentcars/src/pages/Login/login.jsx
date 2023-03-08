import { useState } from 'react'
import './styleLogin.scss'
import { Link } from 'react-router-dom'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const routes = {
    createAccount: '/create-account'
  }

  function handleLogin(event) {
    event.preventDefault()
    console.log(`Email: ${email}, Password: ${password}`)
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
        <p className="register-link">
          Ainda não tem conta?
          <a href="/create-account">
            <Link to={routes.createAccount}> Registre-se</Link>
          </a>
          .
        </p>
      </div>
    </div>
  )
}
