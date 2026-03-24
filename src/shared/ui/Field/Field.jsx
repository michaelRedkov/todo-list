import styles from './Field.module.scss';
import {useTranslation} from "react-i18next";

const Field = (props) => {
    const {
        className,
        id,
        label,
        type = 'text',
        value,
        onInput,
        error,
        ref,
    } = props

    const {t} = useTranslation()

    return (
        <div className={`${styles.field} ${className}`}>
            <label
                className={styles.label}
                htmlFor={id}
            >
                {t(label)}
            </label>
            <input
                className={`${styles.input} ${error ? styles.isInvalid : ''}`}
                id={id}
                placeholder=" "
                autoComplete="off"
                type={type}
                value={value}
                onInput={onInput}
                ref={ref}
            />
            {error && (
                <span className={styles.error} title={error}>{error}</span>
            )}
        </div>
    )
}

export default Field