import { CLOUDINARY_IMG_URL } from "../constants/AppConstants";

const OfferCard = ({ offer }) => {
  return (
    <div className="min-w-[300px] m-2 ">
      <img
        src={CLOUDINARY_IMG_URL + offer?.imageId}
        alt=""
        className="rounded-lg"
      />
    </div>
  );
};

export default OfferCard;
