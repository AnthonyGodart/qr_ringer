import './main.module.css'
import { useState } from 'react';
import Bell from '../Bell'
import NameField from '../NameField';
import Loader from '../Loader';

function Main(){
    const [name, setName] = useState('');
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    function handleNameChange(e) {
        setName(e.target.value);
    };

    function handleBellClick() {
            setName('');
            setIsButtonClicked(true);
            setShowLoader(true);
            const options = {
                method: 'POST',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Basic MDgwOTNjYTEtY2Y0Mi00YzMxLWI4NTktMGU5NjVjY2RmZjMz',
                  'content-type': 'application/json'
                },
                body: JSON.stringify({
                  included_segments: ['Active Users'],
                  contents: {en: `${name} sonne à votre porte.`},
                  app_id: '8587f4cc-c900-4b84-b845-d4e680d4fa3e'
                })
              };
              
              fetch('https://onesignal.com/api/v1/notifications', options)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));

            const delayInMinutes = 0.2;
            const delayInMilliseconds = delayInMinutes * 60 * 1000;
            setTimeout(() => {
                setIsButtonClicked(false);
                setShowLoader(false);
            }, delayInMilliseconds )
    };

    return (
        <main>
            <NameField value={name} 
                onChange={handleNameChange}
                disabled={isButtonClicked}/>
            <Bell onClick={() => handleBellClick()} 
                disabled={name === ''}/>
            {showLoader? 
            <Loader/> : null}
        </main>
    )
}

export default Main;