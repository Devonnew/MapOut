import React from "react";
import ReactMapboxGl, { Marker, Popup } from "react-mapbox-gl";

const MapLoad = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_API_KEY,
});

function Map() {
  let hiya = process.env.REACT_APP_MAPBOX_API_KEY;
  console.log("key", hiya);
  return (
    <div>
      <MapLoad
        style="mapbox://styles/mapbox/dark-v10"
        containerStyle={{
          height: "100vh",
          width: "66vw",
        }}
      ></MapLoad>
    </div>
  );
}

export default Map;
