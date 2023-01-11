import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

const containerStyle = {
    width: '400px',
    height: '400px',
};

let center = {
    lat: 33.899510,
    lng: -118.323690,
}

function getLatLng(address, key) {
    const apiKey = key;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status !== 'OK') {
                throw new Error(data.error_message);
            }
            console.log('hitting?', data.results[0].geometry.location)
            return data.results[0].geometry.location;
        });
}


const Maps = ({ apiKey }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });

    const addressState = useSelector((state) => Object.values(state.address.userAddress))

    newCenter = getLatLng(`${addressState[0]?.address1}, ${addressState[0]?.city}, ${addressState[0]?.state}`, apiKey)
        .then(latLng => {
            console.log(`Latitude: ${latLng.lat}`);
            console.log(`Longitude: ${latLng.lng}`);
        })
        .catch(error => console.error(error));

    console.log('center assignment', newCenter)
    // console.log(addressState[0].address1, addressState[0].city, addressState[0].state, 'address here')


    return (
        <>
            {isLoaded && (

                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                />
                // <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                // {/* <Marker position={center}/> */}
                // </GoogleMap>
            )}
        </>
    );
};

export default React.memo(Maps);
