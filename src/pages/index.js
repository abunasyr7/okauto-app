import * as React from "react"
import '../styles/index.css'
import Layout from "../components/Layout";
import App from "../components/App";
import Header from "../components/Header";
import Banner from "../components/Banner";
import CheckPenalty from "../components/CheckPenalty";
import Card from "../components/Card";
import AutoAddPopup from "../components/AutoAddPopup";
import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:3000/client/graphql',
    cache: new InMemoryCache()
})

const Main = () => {

    const [isAutoAddPopupOpen, setisAutoAddPopupOpen] = React.useState(false)

    function handleAutoAddClick() {
        setisAutoAddPopupOpen(true)
    }

    function closeAllPopups() {
        setisAutoAddPopupOpen(false)
    }

    return (
        <Layout>
            <App>
                <Header />
                <Banner/>
                <CheckPenalty
                    onAutoAdd = {handleAutoAddClick}
                />
                <Card
                    name = "Абунасыр"
                    paternity = "Талгатович"
                    gender = "male"
                />
            </App>
            <AutoAddPopup isOpen={isAutoAddPopupOpen} onClose={closeAllPopups}/>
        </Layout>
    )
}


export default Main
