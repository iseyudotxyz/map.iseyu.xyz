import React from "react"
import { createUseStyles } from "react-jss"

const funcStyles = createUseStyles({
    button: {
        border: "1px solid white",
        borderRadius: "45px",
        fontFamily: "nunito",
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
        '&:hover' : {
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
        }
    }
})

interface props {
    id: string;
    text: string;
    link: string;
}

function Button(Props: props) {
    const styles = funcStyles()
    
    return (
        <input 
        className={ styles.button }
        type="button" 
        id={ Props.id }
        value={Props.text}
        onClick={() => window.location.href = Props.link}
        />
    )
}

export default Button