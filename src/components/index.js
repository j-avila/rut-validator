import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Theme from '../hoc'
import { Wrapper } from './styles'
import { defaultTheme } from '../hoc/theme'

export const RutValidator = props => {
  const { border, color, errorMessage, successMessage, className } = props
  const [message, setMessage] = useState(null)
  const [valid, setValid] = useState(undefined)
  // funcion validadora del rut
  const validate = rutInput => {
    let result
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    const validator = {
      validaRut: rutCompleto => {
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false
        var tmp = rutCompleto.split('-')
        var digv = tmp[1]
        var rut = tmp[0]
        // eslint-disable-next-line eqeqeq
        if (digv == 'K') digv = 'k'
        // eslint-disable-next-line eqeqeq
        return validator.dv(rut) == digv
      },
      dv: T => {
        let M = 0
        let S = 1
        for (; T; T = Math.floor(T / 10))
          S = (S + (T % 10) * (9 - (M++ % 6))) % 11
        return S ? S - 1 : 'k'
      }
    }

    if (rutInput.length >= 10) {
      result = validator.validaRut(rutInput)
      setValid(result)
    } else if (rutInput.length > 0 && rutInput.length < 10) {
      setValid(false)
    } else if (rutInput.length === 0) {
      setValid(false)
      setMessage(null)
    }

    // Uso de la función
  }

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    valid
      ? setMessage(successMessage)
      : valid === false
      ? setMessage(errorMessage)
      : ''
  }, [valid])

  return (
    <Theme>
      <Wrapper border={border} txtColor={color} className={className}>
        <div className='holder'>
          <input type='text' onChange={e => validate(e.target.value)} />
          {valid && <i className={`fa ${valid ? 'fa-check' : 'fa-close'}`} />}
        </div>
        {message && (
          <span className={valid ? 'success' : 'error'}>{message}</span>
        )}
      </Wrapper>
    </Theme>
  )
}

RutValidator.propTypes = {
  border: PropTypes.string,
  color: PropTypes.string,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string
}

RutValidator.defaultProps = {
  background: defaultTheme.primary,
  border: `1px solid ${defaultTheme.text}`,
  color: defaultTheme.text,
  errorMessage: 'RUT no valido',
  successMessage: 'RUT Válido'
}
