import './main.module.css'
import React, { useState, useEffect } from 'react';
import Bell from '../Bell'
import NameField from '../NameField';
import Notified from '../Notified';

function Main(){
    function removeUserIdFromUrl() {
      const newUrl = window.location.href.replace(/(\?|&)userId=.*$/, '');
      window.history.replaceState(null, '', newUrl);
    }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    if (userId) {
      sessionStorage.setItem('userId', userId);
      removeUserIdFromUrl();
    }
  }, []);

    const [name, setName] = useState('');
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [isNotified, setIsNotified] = useState(false);
    const [isPremium, setIsPremium] = useState(false);
    console.log(setIsPremium);
    function handleNameChange(e) {
        setName(e.target.value);
    };

    function handleBellClick() {
            setIsButtonClicked(true);
            const receiver = sessionStorage.getItem('userId');

            const options = {
                method: 'POST',
                headers: {
                  accept: 'application/json',
                  Authorization: process.env.REACT_APP_ONESIGNAL_AUTHORIZATION,
                  'content-type': 'application/json'
                },
                body: JSON.stringify({
                  include_player_ids: [ receiver ],
                  contents: {en: `${name !== "" ? name : 'Quelqu\'un'} sonne à votre porte.`},
                  name: "QR Ringer",
                  app_id: process.env.REACT_APP_ONESIGNAL_APP_ID
                })
              };
              
              fetch('https://onesignal.com/api/v1/notifications', options)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));

            setName('');
            const delayInMinutes = 0.5;
            const delayInMilliseconds = delayInMinutes * 60 * 1000;
            setTimeout(() => {
                setIsButtonClicked(false);
                setIsNotified(true);
                sessionStorage.removeItem('userId');
            }, delayInMilliseconds )
    };

    function showNotifiedText(){
      return(
        isNotified? <Notified/> : null 
      )
    };

    return (
        <main>
            {isPremium &&<NameField value={name} 
                onChange={handleNameChange}
                disabled={isButtonClicked}/>}
            {isNotified? null : <Bell onClick={() => handleBellClick()} 
                disabled={isNotified} isClicked={isButtonClicked}/>}
            {showNotifiedText()}
        </main>
    )
}

export default Main;