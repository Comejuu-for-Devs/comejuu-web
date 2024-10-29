import { IoLocation } from "react-icons/io5";

const LocationPin = ({ text }: { text: string }) => (
  <div className="pin">
    <IoLocation className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

export default LocationPin;
