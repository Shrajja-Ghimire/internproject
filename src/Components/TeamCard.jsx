import React from "react";

const TeamCard = (props) => {
  return (
    <div>
      <div className="w-auto h-70 mt-5 rounded-2xl border border-gray-50 p-5 flex flex-col items-center justify-center shadow-lg">
        <img
          src={props.img}
          className="w-30 h-30 rounded-full border border-gray-500 "
        />
        <h1 className="p-2 text-1xl font-bold mt-3 ">{props.title}</h1>
        <p className="p-2 text-gray-400 text-sm font-bold text-center">
          {props.post}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
