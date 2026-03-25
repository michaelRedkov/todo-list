import {useTranslation} from "react-i18next";
import styles from "@/shared/ui/Button/Button.module.scss";

const ChangeLanguage = () => {
    const {t, i18n} = useTranslation();

    return (
        <div
            className={`${styles.menu}`}>
            <button
                className={`${styles.button} ${styles.changeLangJp}`}
                onClick={() => i18n.changeLanguage('jp')}
                disabled={i18n.language === 'jp'}>
                <span>
                    {'\u{1F1EF}\u{1F1F5}'}
                </span>
            </button>
            <button
                className={`${styles.button} ${styles.changeLangEn}`}
                onClick={() => i18n.changeLanguage('en')}
                disabled={i18n.language === 'en'}>
                <span>
                    {' \u{1F1FA}\u{1F1F8} '}
                </span>
            </button>
        </div>
    )
}

export default ChangeLanguage