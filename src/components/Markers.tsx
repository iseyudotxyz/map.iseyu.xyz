import { Ref, useEffect, useState } from 'react'
import { Popup, Marker } from 'react-leaflet'
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import Hls from 'hls.js';

function Markers() {

    const initialArray = Array()

    const [camArray, setCamArray] = useState(initialArray)

    useEffect(() => {
        axios.get("https://api.iseyu.xyz/camlist").then(function(response) {
                setCamArray(response["data"]["cams"])
        })
    }, [])

    const playerRef : any = React.useRef()
    var hls : any

    return ( 
        <div>
            {
                camArray.map(cam => {
                    const id : string = cam["id"]
                    const name : string = cam["name"]
                    const x : number = cam["x"]
                    const y : number = cam["y"]
                    console.log(name, x)
                    return (
                            <Marker position={[ x, y ]} key={id}
                            eventHandlers={{
                                popupclose: () => {
                                    hls.destroy()
                                    ReactDOM.unmountComponentAtNode(document.getElementById(id)!)
                                },
                                popupopen: () => {
                                    axios.get("https://api.iseyu.xyz/cams/" + id).then(function(response) {
                                    const data = response["data"]
                                    const link = data["link"]
                                    const type = data["type"]
                                    switch(type) {
                                        case "directHls":
                                            const hlsElement = (
                                                <div>
                                                    <h3 id='name-h3'>{ name }</h3>
                                                    <video ref={playerRef} id="player" className='player'
                                                    controls={true}>
                                                    </video>
                                                </div>
                                            )
                                            ReactDOM.render(hlsElement, document.getElementById(id))
                                            const player : any = document.getElementById("player")
                                            hls = new Hls();
                                            hls.loadSource(link);
                                            hls.attachMedia(player);
                                            player.play();
                                            break;
                                        case "embed":
                                            const embedElement = (
                                                <div>
                                                    <h3 id='name-h3'>{ name }</h3>
                                                    <iframe src={link} id='player'></iframe>
                                                </div>
                                            )
                                            ReactDOM.render(embedElement, document.getElementById(id))
                                            break;
                                    }
                                })     
                                }
                            }}
                            >
                                <Popup className='popup' key={id}
                                >
                                    <div id={id}></div>
                                </Popup>
                            </Marker>    
                        )
                })
            }
        </div>
    )                
}

export default Markers  