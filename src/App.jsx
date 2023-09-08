import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import { Card, CardBody } from "@nextui-org/react";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import { FaTemperatureLow } from "react-icons/fa";

const mapStyles = [
  {
    featureType: "all",
    elementType: "geometry",
    stylers: [
      {
        color: "#202c3e",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        gamma: 0.01,
      },
      {
        lightness: 20,
      },
      {
        weight: "1.39",
      },
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        weight: "0.96",
      },
      {
        saturation: "9",
      },
      {
        visibility: "on",
      },
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        weight: 0.6,
      },
      {
        color: "#1a3541",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#2c5a71",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#406d80",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#1a3541",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#0b162a",
      },
    ],
  },
];

const mapContainerStyle = {
  flex: 8,
  height: "100vh",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const tokyo = {
  lat: 35.6895,
  lng: 139.6917,
};

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [earthquakeData, setEarthquakeData] = useState(null);
  const [earthquakeLocation, setEarthquakeLocation] = useState(null);


  useEffect(() => {
    const fetchData = () => {
      axios.get('http://localhost:3000/last-weather')
        .then(response => {
          setWeatherData(response.data);
        })
        .catch(error => {
          console.log('Error fetching weather data:', error);
        });

      axios.get('http://localhost:3000/last-earthquake')
        .then(response => {
          setEarthquakeData(response.data);
          setEarthquakeLocation({
            lat: response.data.latitude,
            lng: response.data.longitude,
          });
        })
        .catch(error => {
          console.log('Error fetching earthquake data:', error);
        });
    };

    fetchData();
    const intervalId = setInterval(fetchData, 60000);
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div style={{ display: "flex" }}>
      <LoadScript googleMapsApiKey="AIzaSyDP5A0BTih2FrpIIrVAxR1e5n8PzSXehyE">
      <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={2}
          options={{ styles: mapStyles }}
        >
          {earthquakeLocation && (
            <Polyline
              path={[center, earthquakeLocation]}
              options={{
                strokeColor: "#FF0000",
                strokeOpacity: 1,
                strokeWeight: 2,
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
      <div
        style={{
          flex: 2,
          height: "100vh",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          style={{
            backgroundColor: "#008080",
            borderRadius: "8px",
            margin: "10px",
            height: "20%",
            width: "90%",
          }}
        >
          <CardBody>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                // marginTop: "10px",
              }}
            >
              <DeviceThermostatIcon
                style={{
                  color: "black",
                  fontSize: "50px",
                  marginRight: "50px",
                  // marginTop: "100px",
                }}
              />
              {weatherData ? (
              <div>
                <h5>Last Weather Data:</h5>
                <p>San Francisco: {weatherData.San_Francisco}°C</p>
                <p>New York: {weatherData.New_York}°C</p>
                <p>Mexico City: {weatherData.Mexico_City}°C</p>
                <p>London: {weatherData.London}°C</p>
              </div>
            ) : (
              <p>Loading weather data...</p>
            )}
            </div>
          </CardBody>
        </Card>

        <Card
          style={{
            backgroundColor: "#6C7B8B",
            borderRadius: "8px",
            margin: "10px",
            height: "20%",
            width: "90%",
          }}
        >
          <CardBody>

          {earthquakeData ? (
              <div>
                <h4>Last Earthquake Data:</h4>
                <p>Place: {earthquakeData.place}</p>
                <p>Date: {new Date(earthquakeData.date).toString()}</p>
                {/* ... */}
              </div>
            ) : (
              <p>Loading earthquake data...</p>
            )}
          </CardBody>
        </Card>
        <Card
          style={{
            backgroundColor: "#4682B4",
            borderRadius: "8px",
            margin: "10px",
            height: "20%",
            width: "90%",
          }}
        >
          <CardBody>
          {earthquakeData ? (
              <div>
                <h4>Last Earthquake Data:</h4>
                <p>Magnitude: {earthquakeData.mag}</p>
               

              </div>
            ) : (
              <p>Loading earthquake data...</p>
            )}

          </CardBody>
        </Card>
        <Card
          style={{
            backgroundColor: "#ADD8E6",
            borderRadius: "8px",
            margin: "10px",
            height: "20%",
            width: "90%",
          }}
        >
          <CardBody>
          {earthquakeData ? (
              <div>
                <h4>Last Earthquake Data:</h4>
                <p>Lat: {earthquakeData.latitude}</p>
                <p>Long: {earthquakeData.longitude}</p>
               

              </div>
            ) : (
              <p>Loading earthquake data...</p>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default App;
