import React from "react";
import { star } from "../assets/icons";
const ReviewCard = ({ name, imageURL, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imageURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="text-center mt-6 max-w-sm info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray"> ({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {name}
      </h3>
    </div>
  );
};

export default ReviewCard;
