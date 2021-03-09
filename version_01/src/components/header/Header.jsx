import React from 'react'
import './Header.css'


export default props => (
    <header className="header">
        <nav className='nav' id="myNav">
            <h1>LOGO</h1>
            <ul >
                <li> <a href="#">cadastrar notícia</a></li>
                <li> <a href="#">exibir notícias</a></li>
                <li> <input type="search" name="pesquisa" id="pesquisa" className='' /></li>
            </ul>
        </nav>
    </header>
)



