import React from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow
} from 'react-google-maps';

const Map = () => {

    return (
        <GoogleMap
            defaultZoom={14}
            defaultCenter={{ lat: 63.430515, lng: 10.395053 }}
        >
            <Marker
                ke={'vbtLocation'}
                position={{
                    lat: 63.431681,
                    lng: 10.403475
                }}
            />

        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const VbtMap = () => {
    //const apiKey = 'AIzaSyBe9fktCfIUMGxgIWbtjf45NdLQfVIQgvw';//process.env.REACT_APP_GOOGLE_KEY;
    const apiKey = process.env.REACT_APP_GOOGLE_KEY;

    return (
        <div style={{ width: '70vw', height: '40vh' }}>
              <WrappedMap
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
                  loadingElement={<div style={{ height: '100%'}} />}
                  containerElement={<div style={{ height: '100%'}} />}
                  mapElement={<div style={{ height: '100%'}} />}
              />
        </div>
    );
}
export default VbtMap;