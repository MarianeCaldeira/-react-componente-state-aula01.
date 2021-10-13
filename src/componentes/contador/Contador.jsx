import React, { useState } from "react";
import './Contador.css'

export const Contador = () => {
    
    const [number, setNumber] = useState(0);

    return(
        <div className="container">
            <div className="tela">
                <h1>{number}</h1>
            </div>
            <div className="buttons">
                <button className="btn" id="somar" onClick={() => {
                    setNumber(number + 5);
                }}>Somar</button>
                <button className="btn" id="subtrair" onClick={() => {
                    setNumber(number - 3);
                }}>Subtrair</button>
            </div>
        </div>
    );
}