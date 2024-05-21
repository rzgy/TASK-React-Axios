import React from "react";
import instance from "../api";
import { useNavigate, useNavigation } from "react-router-dom";
const PetItem = ({ pet }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/PetDetail/${pet.id}`);
  };
  return (
    <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
      <h1 className="text-md font-bold">{pet.name}</h1>
      <img
        src={pet.image}
        alt={`${pet.name}-image`}
        className="w-[200px] rounded-md
      "
      />
      <button
        onClick={handleClick}
        className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white"
      >
        View
      </button>
    </div>
  );
};

export default PetItem;
