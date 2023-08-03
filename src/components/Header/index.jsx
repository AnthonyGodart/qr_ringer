import styles from './header.module.css';

function Header(){

    return (
        <header>
            <div id='title' className={styles.title}> Ma Sonnette </div>
            {/*<div id='paramBtn' className={isLogged ? styles.loggedParamIcon : styles.paramIcon}>&#9881;</div>
            <div id='logBtn'
                onClick={handleClick} 
                className={styles.btn}>
                    <FontAwesomeIcon icon={faBell} style={{color: '#FFF'}}/>
            </div>
            <div id='profileBtn' className={isLogged ? styles.loggedProfile : styles.profile}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" alt="Profile" />
            </div>*/}
        </header>
    )
}

export default Header;