import { useTranslation } from "react-i18next";
import { Button, Space } from "antd";

export default function Translation() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div style={{ textAlign: 'center'}}>
        
            <h1>{t("hello")}</h1>
            <Space>
                <Button onClick={() => changeLanguage('en')}>English</Button>
                <Button onClick={() => changeLanguage('zh-tw')}>中文</Button>
                <Button onClick={() => changeLanguage('jp')}>日文</Button>
                <Button onClick={() => changeLanguage('de')}>Deutsch</Button>
                <Button onClick={() => changeLanguage('fr')}>Français</Button>
            </Space>
        </div>
    )
}