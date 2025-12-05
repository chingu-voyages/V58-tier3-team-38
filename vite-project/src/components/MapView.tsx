import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import type { LatLngExpression } from "leaflet";

// Fix default marker icon paths
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// --- Countries with Coordinates ---
interface CountryPin {
  name: string;
  coords: LatLngExpression;
}

const countryPins: CountryPin[] = [
  { name: "United States", coords: [37.09, -95.71] },
  { name: "Brazil", coords: [-14.23, -51.92] },
  { name: "United Kingdom", coords: [55.37, -3.44] },
  { name: "Germany", coords: [51.16, 10.45] },
  { name: "South Africa", coords: [-30.56, 22.94] },
  { name: "India", coords: [20.59, 78.96] },
  { name: "China", coords: [35.86, 104.19] },
  { name: "Japan", coords: [36.2, 138.25] },
  { name: "Australia", coords: [-25.27, 133.77] },
  { name: "Canada", coords: [56.13, -106.35] },
];

const MapView: React.FC = () => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom={true}
      className="h-20"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {countryPins.map((country) => (
        <Marker key={country.name} position={country.coords}>
          <Popup>{country.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
