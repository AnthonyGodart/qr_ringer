import styles from './bell.module.css'
function Bell({ onClick, disabled }){
    return(
        <input type="button" value="sonner" onClick={onClick} disabled={disabled} className={styles.btn}/>
    )
}

export default Bell;