import React, { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FilterContext } from "./FilterBasis";

const COUNTRY_COORDS: Record<string, [number, number]> = {
  USA: [37.0902, -95.7129],
  France: [46.2276, 2.2137],
  Germany: [51.1657, 10.4515],
};

export const createClusterIcon = (count: number) =>
  L.divIcon({
    html: `<div style="
      background: linear-gradient(135deg,#0074D9,#005fa3);
      color: white;
      padding: 6px 14px;
      border-radius: 50px;
      font-size: 14px;
      font-weight: 700;
      box-shadow: 0 3px 8px rgba(0,0,0,0.4);
    ">${count}</div>`,
    className: "",
    iconAnchor: [22, 22],
  });

const defaultData = [
  { country: "USA", gender: "M", role: "Developer", yearJoined: 2023 },
  { country: "France", gender: "F", role: "Designer", yearJoined: 2022 },
  { country: "Germany", gender: "M", role: "Developer", yearJoined: 2021 },
];

const headerHeight = 470;

const MapView: React.FC = () => {
  const { filteredData } = useContext(FilterContext)!;

  const dataToShow =
    filteredData && filteredData.length > 0 ? filteredData : defaultData;

  return (
    <div
      style={{
        height: `calc(100vh - ${headerHeight}px)`,
        width: "100%",
        zIndex: 0,
        position: "relative",
      }}
    >
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={true}
        worldCopyJump={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {dataToShow.map((user, idx) => {
          const pos = COUNTRY_COORDS[user.country];
          if (!pos) return null;

          return (
            <Marker key={idx} position={pos} icon={createClusterIcon(1)}>
              <Popup>
                <div>
                  <strong>{user.country}</strong>
                  <p>Gender: {user.gender ?? "N/A"}</p>
                  <p>Role: {user.role ?? "N/A"}</p>
                  <p>Joined: {user.yearJoined ?? "N/A"}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapView;
