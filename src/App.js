import { Route, Routes } from 'react-router-dom';
import Nav from './components/nav/nav.component'
import Home from './routes/home/home.component.tsx'
import About from './routes/about/about.component.tsx'
import Character from './routes/character/character.component.tsx'
import { Grid } from '@mui/material';
import { fetchData } from './utils/utils.ts'
import { useState, useEffect } from 'react'


function App() {

  const [ charactersData, setCharacters ] = useState([])

  useEffect(  () => {
      const fetchPageData = async () => {
          const result = await fetchData( '/characters' )
          setCharacters( result['data']['results'] );
      }
      fetchPageData()
          .catch(console.error)
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
