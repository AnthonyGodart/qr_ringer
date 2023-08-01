import './namefield.module.css'

function NameField({ value, onChange, disabled }){
    return (
        <input type="text" placeholder="Entrez votre nom" value={value} onChange={onChange} disabled={disabled}/>
    )
}

export default NameField;