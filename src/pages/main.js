import * as React from "react"
import {main__body, header__main, header__image, rectangle, section__one, section__two} from '../components/main.module.css'


const Main = () => {
    return (
            <div className={main__body}>
                <header className= {header__main}>
                    <img
                        src="/static/img/okauto-logo-icon@2x.png"
                        alt="logo" className="header__image"
                    />
                    <img
                        src="/static/img/placeholder-avatar-male.png"
                        alt="avatar" className="header__image"
                    />
                </header>
                <div className={rectangle}>
                    <div className={section__one}></div>
                    <div className={section__two}></div>
                </div>
            </div>

)
}


export default Main
