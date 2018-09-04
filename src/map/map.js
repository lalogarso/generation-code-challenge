import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import stores from './store_directory.json';
import {addInfoWindow, newMarker} from './utils.js'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class Map extends Component {
  state = {lista: []}

  renderStores(map, maps) {
    const objMap = this;
    stores.forEach((store, index) => {
      var marker = newMarker(map, maps, store.Name)

      addInfoWindow(map, maps, marker, store);

      marker.addListener('click', function() {
        objMap.addStore(marker)
      });
    })
  }

  addStore (marker) {
    const lista = this.state.lista;
    if (lista.indexOf(marker) === -1) {
      lista.push(marker)
      this.setState({lista: lista})
    }
  }

  removeStore(store, e) {
    const lista = this.state.lista;
    lista.splice(lista.indexOf(store), 1);
    this.setState({lista: lista});
  }

  render() {
    return (
      <div className='container'><div className='row'><div className='col-9' style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAPgpvv_YNX_OU2EtDSzFQB2zRCM_o-BC4' }}
        defaultCenter={{
          lat: 19.399896939902558,
          lng: -99.13650512695314
        }}
        defaultZoom={13}
        onGoogleApiLoaded={({map, maps}) => this.renderStores(map, maps)}>
        </GoogleMapReact>
      </div>
      <div className="col-3 mt-3 scroll">
        <h5>My Favorite Stores</h5>
        <ul>
          {this.state.lista.map(store => {
            return <li>
              <p key={store.title}>
              <i className="material-icons" onClick={(e) => this.removeStore(store, e) }>delete_forever</i>
              {store.title}
              </p>
            </li>
          })}
        </ul>
      </div></div></div>
    );
  }
}

export default Map;
