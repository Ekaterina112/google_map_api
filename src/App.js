import './App.css';
import {GoogleMap, useLoadScript} from '@react-google-maps/api';
import mapStyles from './mapStyles'

const libraries = ['places']
const mapContainerStyle = {
    width: '100vh',
    height: '100vh'
}
const center = {
    lat: 53.904541,
    lng: 27.561523
}
const options = {
    styles: mapStyles
}

function App() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyCkqA_uEBCpPYnvy4DQQ0HfDLYlBffsOFw",
        libraries
    })

    if (loadError) return 'Error loading map'
    if (!isLoaded) return 'Loading map'
    return (
        <div className="App">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                options={options}
                center={center}>

            </GoogleMap>
        </div>
    );
}

export default App;
