import React from 'react';
import { ToggleStyled } from '../styles/components/Toggle';

interface toggleProps {
  mode: string,
  handleChange: () => void
}

export default function Toogle({ mode, handleChange }: toggleProps) {
  return (
    <ToggleStyled>
      <div className="toggle" >
        <input type="checkbox" name="toggle" id="toggleMode" onChange={handleChange} checked={mode === 'dark'} />
        <label className="slider" htmlFor="toggleMode">
          <div className="switch">
            <div className="dot"></div>
          </div>
          <span className="material-icons toggle__label">mode_night</span>
        </label>
      </div>
    </ToggleStyled>
  )
}
