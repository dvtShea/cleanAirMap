import React, { useState } from "react";

import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

const ModalMap = props => {
  const { info, location } = props;

  const [lat] = useState(info.city.geo[0]);
  const [lng] = useState(info.city.geo[1]);

  return (
    <LeafletMap
      center={[lat, lng]}
      zoom={7}
      maxZoom={14}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
    >
      <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lng]}>
        <Popup>{location}</Popup>
      </Marker>
    </LeafletMap>
  );
};

export default ModalMap;
