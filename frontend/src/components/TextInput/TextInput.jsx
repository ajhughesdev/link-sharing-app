import { memo, useState } from "react"
import css from './textInput.module.css'

const TextInput = ({ type, label, placeholder, errorText }) => {
    const [validationMessage, setValidationMessage] = useState('')
    const [inputValue, setInputValue] = useState('')

    const handleInvalid = (e) => {
        const target = e.target
        setValidationMessage(target.validationMessage)
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
        if (validationMessage) {
            setValidationMessage('')
        }
    }

    return (
        <label className={css.label} style={!validationMessage ? { color: 'var(--primary-text)' } : { color: 'var(--warning-color)', }}>
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
                <div className={css.validationMessage}>
                    {errorText || validationMessage}
                </div>
            )}
        </label>

    )
}

TextInput.displayName = 'TextInput'

export default memo(TextInput)