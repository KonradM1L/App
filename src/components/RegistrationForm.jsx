import { useState } from 'react'

export function RegistrationForm({ onRegister }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const validatePassword = (password) => {
    if (password.length < 8) {
      return 'Hasło musi mieć co najmniej 8 znaków'
    }
    if (!/[A-Z]/.test(password)) {
      return 'Hasło musi zawierać co najmniej jedną dużą literę'
    }
    if (!/[a-z]/.test(password)) {
      return 'Hasło musi zawierać co najmniej jedną małą literę'
    }
    if (!/[0-9]/.test(password)) {
      return 'Hasło musi zawierać co najmniej jedną cyfrę'
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return 'Hasło musi zawierać co najmniej jeden ze znaków: !@#$%^&*'
    }
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    if (name === 'password') {
      setError(validatePassword(value))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const passwordError = validatePassword(formData.password)
    
    if (passwordError) {
      setError(passwordError)
      return
    }

    console.log('Dane formularza:', formData)
    onRegister(formData.username)
  }

  return (
    <div className="container">
      <h1>Rejestracja Konta</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="username">Nazwa konta:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Wpisz nazwę konta"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Wpisz swój email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Hasło:</label>
          <div className="password-input-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Wpisz hasło"
              required
              className={error ? 'error' : ''}
            />
            <div className="password-toggle">
              <label htmlFor="showPassword" className="show-password-label">
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                  className="show-password-checkbox"
                />
                <span className="toggle-text">Pokaż hasło</span>
              </label>
            </div>
          </div>
          <div className="password-requirements">
            <p className="requirements-title">Wymagania dotyczące hasła:</p>
            <ul>
              <li className={formData.password.length >= 8 ? 'valid' : ''}>
                ✓ Co najmniej 8 znaków
              </li>
              <li className={/[A-Z]/.test(formData.password) ? 'valid' : ''}>
                ✓ Co najmniej jedna duża litera
              </li>
              <li className={/[a-z]/.test(formData.password) ? 'valid' : ''}>
                ✓ Co najmniej jedna mała litera
              </li>
              <li className={/[0-9]/.test(formData.password) ? 'valid' : ''}>
                ✓ Co najmniej jedna cyfra
              </li>
              <li className={/[!@#$%^&*]/.test(formData.password) ? 'valid' : ''}>
                ✓ Co najmniej jeden ze znaków: !@#$%^&*
              </li>
            </ul>
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}

        <button 
          type="submit" 
          className="submit-btn"
          disabled={!!error || !formData.username || !formData.email || !formData.password}
        >
          Zarejestruj
        </button>
      </form>
    </div>
  )
}
