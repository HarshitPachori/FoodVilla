import React from "react";

const ShimmerCard = () => {
  return (
    <div className="shimmer_card">
      <div className="shimmer_card_image"></div>
      <h3 className="shimmer_card_name"></h3>
      <div className="shimmer_card_details"></div>
    </div>
  );
};
const ShimmerComp = () => {
  return (
    <div className="shimmer_container">
      {new Array(10).fill(0).map((element, index) => (
        <ShimmerCard key={`index-` + index} />
      ))}
    </div>
  );
};

export default ShimmerComp;
