import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./components/LocationPin";

const Map = () => {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <div className="flex flex-col items-center p-2">
      <h2 className="text-2xl font-bold mb-4">Come Visit Us At Our Campus</h2>
      <div className="w-full h-96">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
          defaultCenter={location}
          defaultZoom={17}
        >
          <LocationPin
            // lat={location.lat}
            // lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
