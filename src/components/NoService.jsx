import React from "react";

const NoService = () => {
  return (
    <div className="no_service">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png"
        alt="NoService"
      />
      <h2>Sorry, no service available</h2>
      <p>We don’t have any services here at present. Try changing location.</p>
    </div>
  );
};

export default NoService;
