import { TileLayer } from "react-leaflet"
import { MapContainer } from "react-leaflet"
import Markers from "./Markers"

const Map = () => {
    return (
        <MapContainer center={[38.977638, 34.953270]} zoom={6} scrollWheelZoom={true}>
                <TileLayer
                minZoom={6}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Markers />
        </MapContainer>
    )
}

export default Map