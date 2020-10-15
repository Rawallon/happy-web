import React from 'react'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet'

import mapMarkerImg from '../images/map-marker.svg'

import '../styles/pages/orphanagesMap.scss'
import 'leaflet/dist/leaflet.css'

export default () => {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Cidade</strong>
                    <p>Estado</p>
                </footer>
            </aside>
            <Map
                center={[-15.7217173,-48.0777877]} // DF
                zoom={6}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`} />
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}