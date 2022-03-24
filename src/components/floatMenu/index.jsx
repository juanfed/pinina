import React, { useState } from 'react';
import Draggable from 'react-draggable';

// Material UI Components
import { IconButton, Tooltip } from '@mui/material';

const FloatMenu = ({ buttons }) => {

    // Local State
    const [ active, setActive ] = useState(false);
    const [ position, setPosition ] = useState("up");
    console.log(position)
    
    const handleDrag = (e, data) => {
        // console.log(data.x, data.y);
        if (data.y > 500) setPosition("down");
        if (data.y < 500) setPosition("up");
    }

    return (
        <Draggable onDrag={ (e, data) => handleDrag(e, data) }>
            <main className="floatmenu">
                <section className={ active ? "hidden-circles" : "intern-circles" }>
                    <img src="/img/circle-1.svg" className="circle-1" width="100%" alt="" />
                    <img src="/img/circle-2.svg" className="circle-2" width="100%" alt="" />
                    <img src="/img/circuloexterior.svg" className="circle-3" width="100%" alt="" />
                    <img src="/img/circle-5.svg" className="circle-5" width="100%" alt="" />
                </section>
                <img 
                    src="/img/botonHuella.svg" 
                    onClick={ () => setActive(!active) }
                    className={ active ? "active-burguer-menu" : "burger-menu" } 
                    width="100%" 
                    alt="burger-menu" 
                />
                <div className={ active ? "buttons-container-hidden" : "buttons-container"}>
                    { buttons?.map( (item, i) => (
                        <Tooltip title={ item.text }>
                            <IconButton size="small" className={ `icon-${ position === "up" ? i + 1 : i + 5 }` } key={ item.id }>
                                { item.icon }
                            </IconButton>
                        </Tooltip>
                    ) ) }
                </div>
            </main>
        </Draggable>
    )
}

export default FloatMenu