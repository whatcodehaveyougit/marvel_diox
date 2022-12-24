import './character.styles.scss'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { fetchData } from '../../utils/utils.ts'
import {
     Accordion,
     AccordionSummary,
     AccordionDetails,
     Box,
     Card,
     CardContent,
     Grid,
     Typography
} from '@mui/material/';


const Character = ( {charactersData } ) => {

    const [ characterComics, setCharacterComics ] = useState()
    const [ characterData, setCharacterData ] = useState()
    const [ backgroundImageUrl, setBackgroundImageUrl ] = useState()

    const { characterid } = useParams();

    const apiRouteComicsData = `/characters/${characterid}/comics`
    const apiRouteCharacterData = `/characters/${characterid}`

    const setBackgroundImageUrlFunction = ( characterData ) => {
        const backgroundImageUrlConcatenated =  characterData['thumbnail']['path'] + '.' + characterData['thumbnail']['extension']
        setBackgroundImageUrl( backgroundImageUrlConcatenated )
    }

    useEffect(  () => {
        const fetchPageData = async () => {
            const result = await fetchData( apiRouteComicsData );
            setCharacterComics( result['data']['results'] );
        }
        fetchPageData()
            .catch(console.error)
    }, [] )

    useEffect(  () => {
        // If we are given the character data, use that (it will save us having to do another fetch)
        if ( charactersData.length > 0 ) {
            const character = charactersData.find(character => character.id = characterid)
            setCharacterData( character );
            setBackgroundImageUrlFunction( character )
        } else {
            const fetchPageData = async () => {
                const dataFetched = await fetchData( apiRouteCharacterData );
                const dataFetchedDrilledInto = dataFetched['data']['results'][0];
                setCharacterData( dataFetchedDrilledInto );
                setBackgroundImageUrlFunction( dataFetchedDrilledInto );
            }
            fetchPageData()
                .catch(console.error)
        }
    }, [] )


    return (
        <>
         <Card className="character-page">
            <div className="thumbnail-image"
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
                >
                <CardContent className="character-information">
                    <Grid className="character-page-headings">
                        <Typography align="center" variant="h3">{characterData ? characterData.name : null}</Typography>
                        <Typography align="center" variant="h5">List of comics for this character:</Typography>
                    </Grid>
                    <Grid>
                        {
                            characterComics && characterComics.map(( comic ) => (
                                <Accordion
                                    className="accordion-character-container"
                                    key={comic.id}
                                    >
                                    <AccordionSummary
                                        // expandIcon={ />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Box sx={{ fontWeight: 'bold' }}>{ comic.title }</Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {  comic.description ?
                                                comic.description :
                                                'No description for this comic ;('
                                            }
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))
                        }
                    </Grid>
                </CardContent>
            </div>
        </Card>

        </>
    )
}

export default Character;