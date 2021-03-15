import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import styles from '../../styles/components/common/NavigatorBar.module.css'

export function NavigatorBar() {
    const [hamburguerBtActive, setHamburguerBtActive] = useState(styles.hamburguerBt)

    function handleHambugerBt(){
        hamburguerBtActive===styles.hamburguerBt ? setHamburguerBtActive(`${styles.hamburguerBt} ${styles.active}`) : setHamburguerBtActive(styles.hamburguerBt)
    }

    return(
        <header className={styles.navigatorBarContainer}>
            <NavLink exact to='/'><span>LOGO</span></NavLink>
            <nav>
                <NavLink to='/'>cadastrar notícia</NavLink>
                <NavLink to='/'>exibir noticia</NavLink>
                <input type="text" />
            </nav>
            <div className={hamburguerBtActive} onClick={handleHambugerBt}>
                <div></div><div></div><div></div>
            </div>
        </header>
    );
}