import { useState } from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

function ThemeToggle({defaultTheme = 'light'}) {
  let [ theme, setTheme ] = useState(defaultTheme)

  function toggleTheme() {
    setTheme(theme => (
      theme === 'dark' ? 'light' : 'dark'
    ))
  }

  return (
    <ToggleButtonGroup name="theme" value={theme} onChange={toggleTheme} >
      <ToggleButton id="light" value="light" variant="outline-secondary">
        <i className="bi bi-brightness-high"></i> Light
      </ToggleButton>
      <ToggleButton id="dark" value="dark" variant="outline-secondary">
        Dark <i className="bi bi-moon"></i>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ThemeToggle