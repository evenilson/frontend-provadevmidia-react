import { NavLink } from 'react-router-dom'

import styles from '../../styles/components/common/NavigatorBar.module.css'

export function NavigatorBar() {
    return(
        <header className={styles.navigatorBarContainer}>
            <NavLink exact to='/'><span>LOGO</span></NavLink>
            <nav>
                <NavLink to='/'>cadastrar notícia</NavLink>
                <NavLink to='/'>exibir noticia</NavLink>
                <input type="text" />
            </nav>
            <div className={styles.hamburguerBt}>
                <div></div><div></div><div></div>
            </div>
        </header>
    );
}