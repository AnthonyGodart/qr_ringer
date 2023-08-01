import { useState } from 'react';
import './customdialog.module.css'

function CustomDialog({sender, message, onCancel, onConfirm}){
    const [selectedOption, setSelectedOption] = useState('');

    function handleOptionChange(e){
        setSelectedOption(e.target.value)
    }

    const handleCancelClick = () => {
        // Appeler la fonction de rappel pour l'annulation
        onCancel();
    };
    
    function handleConfirmClick(){
        if(selectedOption === 'opening'){
            alert(`Je viens ouvrir, ${sender} !`)
        } else if(selectedOption === 'absent'){
            alert(`Désolé ${sender}, je ne suis pas disponible.`)
        } else if(selectedOption === 'leaveMessage'){
            alert(`Je ne suis pas disponible ${sender}, mais laissez-moi un message.`)
        }
        onConfirm();
    };

    return (
        <dialog open>
            <form method='dialog'>
                <p>
                    <label> {message}
                        <select value={selectedOption} onChange={handleOptionChange}>
                            <option value=""></option>
                            <option value="opening">Je viens ouvrir.</option>
                            <option value="absent">Je ne suis pas disponible.</option>
                            <option value="leaveMessage">Demander de laisser un message.</option>
                        </select>
                    </label>
                </p>
                <menu>
                    <button onClick={handleCancelClick}>Annuler</button>
                    <button onClick={handleConfirmClick} 
                        disabled={ (selectedOption === '')? true : false }>Répondre</button>
                </menu>
            </form>
        </dialog>
    )
}

export default CustomDialog;