import React, { useState, useEffect} from 'react';
import styles from './bell.module.css';

function Bell({ onClick, disabled }){
    const [isCalling, setIsCalling] = useState(false);

    useEffect(() => {
        if (isCalling) {
          const delayInMilliseconds = 30000;
          setTimeout(() => {
            setIsCalling(false);
          }, delayInMilliseconds);
        }
      }, [isCalling]);
    
      const handleClick = () => {
        setIsCalling(true);
        onClick();
      }

    return(
        <button onClick={handleClick} disabled={disabled} className={isCalling ? 'calling' : ''}>
            <div className={`${styles.ring} ${styles.r1}`}></div>
            <div className={`${styles.ring} ${styles.r2}`}></div>
            <div className={`${styles.ring} ${styles.r3}`}></div>
            <span>{isCalling ? 'Appel...' : 'Sonner'}</span>
        </button>
    )
}

export default Bell;