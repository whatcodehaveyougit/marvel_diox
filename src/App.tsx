import { Route, Routes } from 'react-router-dom';
import Nav from './components/nav/nav.component.tsx'
import Home from './routes/home/home.component.tsx'
import About from './routes/about/about.component.tsx'
import Character from './routes/character/character.component.tsx'
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react'
import myStore from './store/store.ts'

function App() {

  const [ charactersData, setCharacters ] = useState([])

  useEffect(() => {
    myStore.subscribe('myFirstModule', (newState: any) => {
      console.log( newState )
      setCharacters(newState.characterComics)
    })
  }, [])

  return (
    <>
      <Grid margin={2}>
        <Nav />
        <Routes>
            <Route path='/' element={<Home charactersData={charactersData} />} />
            <Route path='about' element={<About />} />
            <Route path='/character/:characterid' element={<Character charactersData={charactersData} />} />
        </Routes>
      </Grid>

    </>
  );
}

export default App;
