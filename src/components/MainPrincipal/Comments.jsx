import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemText } from '@mui/material';


const Comments = ({ dato, comentarios }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        zIndex: 100,
    };

    return (
        <div>
            <Fade in={comentarios} style={{ backgroundColor: '#f48c06', borderRadius: '5%', borderColor: '#ededed' }}>
                {dato.comentarios.length ?
                    <Box sx={style}>
                        <div>{dato.comentarios.map((comment) => (
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#f48c06' }}>
                                <ListItem alignItems="flex-start">
                                    <ListItemText
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                    style={{ fontSize: "14px", color: '#ededed', fontWeight: '800' }}
                                                >
                                                    {comment.primer_nombre} {comment.primer_apelido} :
                                                </Typography>
                                                <br></br>
                                                {comment.comentario}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List >
                        ))}
                        </div>
                    </Box> :
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <p>No hay comentarios, se el primero en comentar</p>
                            <br />
                            <div>
                                <textarea type="text" id='comentario' placeholder='Comenta' />
                                <br />
                                <button>Publicar</button>
                            </div>

                        </Typography>
                    </Box>}
            </Fade>
        </div>
    )
}

export default Comments

