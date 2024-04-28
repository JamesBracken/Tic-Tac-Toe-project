import { useState } from 'react'
let btnCaption ='Edit'


export default function Player({initialName, symbol, isActive, onChangeName}){
const [playerName, setPlayerName] = useState(initialName)
const [isEditing, setIsEditing] = useState(false)
    function handlePlayerNameChange(event) {
        setPlayerName(event.target.value)       
    }
     function handleEditClick(){
        setIsEditing((editing) => !editing)
        if (isEditing) {
            onChangeName(symbol, playerName)
           }
        }
     function handleSaveClick(){
        setIsEditing(false)
    }
    //function handlechange which will set player name "maybe by using state"
    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = (
            <input type="text" required value={playerName} onChange={handlePlayerNameChange} />
        )
    }
    return(
        <li className = {isActive ? 'active' : undefined}>
            <span className='player'> 
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
                </span>
            <button onClick={handleEditClick} >{isEditing ? "Save" : 'Edit'}</button>
        </li>
    )
}