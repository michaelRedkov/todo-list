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
                disabled={i18n.language === 'jp'}>JP</button>
            <button
                className={`${styles.button} ${styles.changeLangEn}`}
                onClick={() => i18n.changeLanguage('en')}
                disabled={i18n.language === 'en'}>EN</button>
        </div>
    )
}

export default ChangeLanguage