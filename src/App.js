import './App.css';
import Post from './Post.js';
import Login from './Login.js'
import Box from './Box.js'
import Model from './Model.js'

import { MapContainer } from 'react-leaflet/MapContainer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {

  const apiKey = 'strityrig'

  fetch('https://api.europeana.eu/record/v2/search.json?query=Berlin&reusability=open&media=true&wskey='+apiKey)
  .then(res => {return res.json()})
  .then(data => console.log(data))
  .catch(err => console.log(err))

  //edmIsShownBy


  return (
    <div className="App">
      <header className="App-header">
        <h1>hello!</h1>

        {/* <div id="map">
          <MapContainer center={[51.605, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.605, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div> */}

        <div className="canvasContainer">
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls/>
            <Model/>
          </Canvas>
        </div>

        <Login />
        <Post title="my first one" content="lorem ipsum"></Post>
        <Post title="the second one" content="lorem ipsum 2"></Post>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
