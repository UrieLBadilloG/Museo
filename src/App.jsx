import React from "react";
import { GoogleMap, LoadScript, Marker , Polyline  } from "@react-google-maps/api";
import { Card, CardBody } from "@nextui-org/react";

const mapStyles = [
  {
    "featureType": "all",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#202c3e"
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "gamma": 0.01
      },
      {
        "lightness": 20
      },
      {
        "weight": "1.39"
      },
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "weight": "0.96"
      },
      {
        "saturation": "9"
      },
      {
        "visibility": "on"
      },
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "weight": 0.6
      },
      {
        "color": "#1a3541"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c5a71"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#406d80"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1a3541"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0b162a"
      }
    ]
  }
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
  return (
    <div style={{ display: "flex" }}>
    <LoadScript googleMapsApiKey="AIzaSyBFmHQZbFE_a03SwzXH7omemM7KSE8Qfm4">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={2}
        options={{ styles: mapStyles }}
      >
    
        
        <Polyline
    path={[center, tokyo]}
    options={{
      strokeColor: "#FF0000",
      strokeOpacity: 1,
      strokeWeight: 2,
    }}
  />
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
          <CardBody>fdas</CardBody>
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
          <CardBody>fdas</CardBody>
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
          <CardBody>fdas</CardBody>
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
          <CardBody>fdas</CardBody>
        </Card>
      </div>
    </div>
  );
}

export default App;
