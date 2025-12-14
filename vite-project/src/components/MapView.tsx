import React, { useContext, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FilterContext } from "./FilterBasis";
import { countryCoords } from "../types/countryCoords";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const createIcon = (count: number) =>
  L.divIcon({
    html: `<div style="background:black;color:white;padding:6px 12px;border-radius:20px;font-weight:700">${count}</div>`,
    className: "",
    iconAnchor: [20, 20],
  });

const FixResize = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  }, [map]);
  return null;
};

const MapView: React.FC = () => {
  const context = useContext(FilterContext);
  if (!context) return null;
  const { filteredData } = context;

  
  const grouped = React.useMemo(() => {
    const result: Record<string, { total: number; male: number; female: number }> = {};
    filteredData.forEach((user) => {
      if (!countryCoords[user.Country]) return;

      if (!result[user.Country]) {
        result[user.Country] = { total: 0, male: 0, female: 0 };
      }

      result[user.Country].total += 1;
      const gender = user.Gender.toLowerCase();
      if (gender === "male") result[user.Country].male += 1;
      if (gender === "female") result[user.Country].female += 1;
    });
    return result;
  }, [filteredData]);
  return (
    <div
      style={{
        marginTop: "490px",
        height: "calc(100vh - 490px)",
        width: "100%",
        zIndex: 0,
        position: "relative",
      }}
    >
      <MapContainer
        center={[20, 0]}
        zoom={2}
        minZoom={2}
        maxZoom={6}
        maxBounds={[
          [-85, -180],
          [85, 180],
        ]}
        maxBoundsViscosity={1}
        style={{ height: "100%", width: "100%" }}
      >
        <FixResize />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true}
          bounds={[
            [-85, -180],
            [85, 180],
          ]}
        />

        {Object.entries(grouped).map(([code, stats]) => (
          <Marker
            key={code}
            position={countryCoords[code] as [number, number]}
            icon={createIcon(stats.total)}
          >
            <Popup>
              <strong>{code}</strong>
              <div>Male: {stats.male}</div>
              <div>Female: {stats.female}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
