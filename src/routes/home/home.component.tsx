import {
    Grid,
} from '@mui/material';
import './home.styles.scss'
import CharacterCard from '../../components/character-card/character-card.componet.tsx'
import SearchBar from '../../components/search-bar/search-bar-component'
import { useEffect, useState } from 'react'

const Home = ( props ) => {

    const {
        charactersData
      } = props;

    const [ charactersDataState, setCharctersDataState ] = useState( charactersData );

    const handleChange = (e) => {
        const filteredCharacters = charactersData.filter(character => character.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setCharctersDataState( filteredCharacters )
    }

    useEffect(() => {
        if ( charactersData ) {
            setCharctersDataState( charactersData )
        }
    }, [charactersData] );

    return (
        <div className="home-container">
            <div className="search-bar-component">
                <input
                    placeholder="Search Marvel Characters..."
                    name="search-monsters"
                    className="search-monsters-input"
                    onChange={handleChange}
            />
            </div>
            <Grid container spacing={2}>
                {
                    charactersDataState && charactersDataState.map(( character ) => (
                    <Grid item xs={12} sm={6} md={4} className="character-card-container" key={character.id}>
                        <CharacterCard character={character} />
                    </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Home;