import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const location = {
    address: "COMEJUU PREMIER ACADEMY",
    lat: -1.0312009298919267,
    lng: 36.83048377120024,
  };

  return (
    <div className="flex flex-col items-center p-2 mt-10">
      <h2 className="text-2xl font-bold mb-4">Come Visit Us At Our Campus</h2>
      <div className="w-full h-96">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY || "" }}
          defaultCenter={location}
          defaultZoom={17}
        ></GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
