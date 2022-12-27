import './addCharacter.styles.scss'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import {
     Button,
     Card,
} from '@mui/material/';
import myStore from '../../store/store.ts'


const AddCharacter = ( ) => {

  const [characterName, setCharacterName] = useState<string>('');
  const [characterDescription, setCharacterDescription] = useState<string>('');

  function handleAddCharacterSubmit(event){
    event.preventDefault();
    const newCharacter = {
      name: characterName,
      id: 123,
      description: characterDescription,
      thumbnail: {
        path: '',
        extension: ''
      },
      comics: []
    }
    setCharacterName('');
    setCharacterDescription('')
    myStore.mutate('myFirstModule', 'ADD_CHARACTER', newCharacter );
  }

  function handleCharacterNameChange(e){
    setCharacterName(e.target.value)
  }

  function handleCharacterDescriptionChange(e){
    setCharacterDescription(e.target.value)
  }


    return (
        <>
         <Card className="add-character-page">
            <form onSubmit={handleAddCharacterSubmit}>
              <h3>Add Character</h3>
              <div>
                <label>Name:</label>
                <input
                  value={characterName}
                  onChange={handleCharacterNameChange}
                >
                </input>
              </div>
              <br/>
              <div>
                <label>Special Powers:</label>
                <textarea
                  value={characterDescription}
                  onChange={handleCharacterDescriptionChange}
                ></textarea>
              </div>
              <Button
                type='submit'
                >Submit
              </Button>
            </form>
        </Card>

        </>
    )
}

export default AddCharacter;