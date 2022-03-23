import React from 'react';

// components
import FloatMenu from '../components/floatMenu';

const test = () => {

    const buttons = [
        { id: 0, text: "prueba", className: "icon-1", icon: <img src="/img/icon-1.svg" width="100%" alt="" /> },
        { id: 1, text: "prueba", className: "icon-2", icon: <img src="/img/icon-2.svg" width="100%" alt="" /> },
        { id: 1, text: "prueba", className: "icon-3", icon: <img src="/img/icon-3.svg" width="100%" alt="" /> },
        { id: 1, text: "prueba", className: "icon-4", icon: <img src="/img/icon-4.svg" width="100%" alt="" /> },
    ]

    return (
        <div className="container-floatmenu">
            <FloatMenu buttons={ buttons } />
        </div>
    )
}

export default test