import React from "react";
import '../styles/settings.css';
import MainHeader from "../components/MainHeader";
import App from "../components/App";
import Layout from "../components/Layout";
import SettingsNav from "../components/SettingsNav";

function Settings() {
    return (
        <Layout>
            <App>
                <MainHeader
                    name = "Настройки"
                />
                <SettingsNav />
            </App>
        </Layout>
    )
}

export default Settings