import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";

const Comments = () => {
    const [comentarios, setComentarios] = useState(true)
    const comment = () => {
        if (comentarios) {
            setComentarios(false)
        } else {
            setComentarios(true)
        }
    }
    return (
        <div>
            <Grid xs={12} md={12} >
                <button type="text" onClick={comment}>Mostrar comentarios</button>
                {comentarios ? null : <div>{dato.comentarios.map((comment) => (
                    <p>{comment.comentario}</p>
                ))}</div>}
            </Grid>
        </div>
    )
}

export default Comments
