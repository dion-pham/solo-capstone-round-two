import React, { useMemo, useState, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import './Maps.css'
import AddressEditForm from '../AddressEditForm';

const containerStyle = {
    width: '50vw',
    height: '400px',
};

// let center = {
//     lat: 33.899510,
//     lng: -118.323690,
// }

// const getLatLng = (address, key) => {
//     const apiKey = key;
//     const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

//     return fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             if (data.status !== 'OK') {
//                 throw new Error(data.error_message);
//             }
//             return data.results[0].geometry.location;
//         });
// }


const Maps = ({ apiKey }) => {
    const [center, setCenter] = useState({ lat: 33.899510, lng: -118.323690, })

    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: apiKey,
    // });

    const addressState = useSelector((state) => Object.values(state.address.userAddress))

    // getLatLng(`${addressState[0]?.address1}, ${addressState[0]?.city}, ${addressState[0]?.state}`, apiKey)
    //     .then(latLng => {
    //         console.log(`Latitude: ${latLng.lat}`);
    //         console.log(`Longitude: ${latLng.lng}`);
    //         return setCenter({ lat: latLng.lat, lng: latLng.lng })
    //     })
    //     .catch(error => console.error(error));

    // useEffect(() => {
    //     getLatLng(`${addressState[0]?.address1}, ${addressState[0]?.city}, ${addressState[0]?.state}`, apiKey)
    //         .then(latLng => {
    //             console.log(`Latitude: ${latLng.lat}`);
    //             console.log(`Longitude: ${latLng.lng}`);
    //             setCenter({ lat: latLng.lat, lng: latLng.lng })
    //         })
    //         .catch(error => console.error(error));
    // }, [addressState[0]?.address1]);

    // <>
    {/* {!isLoaded && ( */ }
    {/* </> */ }
    return (
        <div className='maps-container' >
            <div>
                <h1>
                    Your orders will be shipped to:
                </h1>
                <div className='maps-address'>
                    Address: {addressState[0]?.address1}, {addressState[0]?.city}, {addressState[0]?.state}
                </div>
                {/* make it so that if button is clicked, then you can edit the address form */}
                <AddressEditForm />
            </div>
            {/* <div>
                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                            <Marker position={center} />
                        </GoogleMap>
                    </div> */}
        </div >



    );
};

export default React.memo(Maps);
