import styles from './header.module.css';

function Header(){

    return (
        <header>
            <div id='title' className={styles.title}> Ma Sonnette </div>
        </header>
    )
}

export default Header;