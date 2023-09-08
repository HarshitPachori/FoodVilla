import React from "react";

const ShimmerCard = () => {
  return (
    <div className=" m-2 w-[300px] rounded-lg h-[230px] bg-slate-200 shadow-md">
      <div className="bg-slate-400 h-[130px] rounded-lg"></div>
      <h3 className="bg-slate-400 h-[20px] m-5 rounded-lg"></h3>
      <div className="bg-slate-400 h-[20px] m-5 rounded-lg"></div>
    </div>
  );
};
const ShimmerComp = () => {
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center">
      {new Array(10).fill(0).map((element, index) => (
        <ShimmerCard key={`index-` + index} />
      ))}
    </div>
  );
};

export default ShimmerComp;
