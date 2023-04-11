import { useState } from 'react'
import './styleLoginRentConfirmation.scss'
import { Link } from 'react-router-dom'
import Avatar from 'react-avatar'
import { useUser } from '../../context/userContext'

export function LoginRentConfirmation() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')

  const testUser = {
    hello: 'Olá,',
    email: 'test@test.com',
    password: 'test123',
    name: 'Test User'
  }

  function getInitials(name) {
    const parts = name.split(' ')
    const initials = parts.map(part => part[0])
    return initials.join('')
  }

  const { setUserData, userData } = useUser()

  function handleLogin(event) {
    event.preventDefault()
    if (email === testUser.email && password === testUser.password) {
      console.log('Login successful!')
      setIsLoggedIn(true)
      setUserName(testUser.name)
      setUserData({ ...testUser, auth: true })
    } else {
      setError('Por favor, tente novamente, suas credenciais são inválidas.')
    }
  }

  function getInitials(name) {
    const parts = name.split(' ')
    return parts[0][0] + (parts[1] ? parts[1][0] : '')
  }

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <div className="header">
          <p>Olá, {userName}</p>
          <Avatar
            name={userName}
            round={true}
            size={40}
            color="#F2B33D"
            fgColor="#ffffff"
            bakgroundColor="#545776"
            className="avatar"
            src=""
          >
            {getInitials(userName)}
          </Avatar>
          <Link to="/">Home</Link>
          <Link to="/logout">Sair</Link>
        </div>
      ) : (
        <div className="login-form">
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
                pattern=".{6,}"
              />
            </div>
            <Link to="/reserva-confirmada" className="btn-reserva">
              Entrar
            </Link>
            {/* <button type="submit">Entrar</button> */}
          </form>
          <p className="register-link">
            Ainda não tem conta?
            <Link to="/criar-conta"> Registre-se</Link>.
          </p>
        </div>
      )}
    </div>
  )
}
