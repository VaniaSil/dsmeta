import logo from "../../assets/Img/logo.svg"

import "./styles.css"

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="Dsmeta"/>
                    <h1>DSmeta</h1>
                    <p>
                        Desenvolvido por
                        <a href="https://www.instagram.com/van_dan1947">@van_dan1947</a>
                    </p>
            </div>
        </header>

    )
}

export default Header