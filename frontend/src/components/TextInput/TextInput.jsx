import { memo, useState } from "react"
import css from './textInput.module.css'

const TextInput = ({ type, label, placeholder, errorText }) => {
    const [validationMessage, setValidationMessage] = useState('')
    const [inputValue, setInputValue] = useState('')

    const handleInvalid = (event) => {
        setValidationMessage(event.target.validationMessage)
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
        if (validationMessage) {
            setValidationMessage('')
        }
    }

    const labelStyle = !validationMessage
        ? { color: 'var(--primary-text)' }
        : { color: 'var(--warning-color)' }

    return (
        <label className={css.label} style={labelStyle}>
            {label}
            <input
                type={type}
                className={`${css.input} ${validationMessage ? css.invalid : ''}`}
                placeholder={placeholder}
                onInvalid={handleInvalid}
                autoComplete='off'
                required
                value={inputValue}
                onChange={handleChange}
            />
            {validationMessage && (
                <div className={css['validation-message']}>
                    {errorText || validationMessage}
                </div>
            )}
        </label>
    )
}

export default memo(TextInput)