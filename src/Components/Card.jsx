import React from "react";

const Card = (props) => {
  return (
    <div className="shadow-lg w-auto h-40 mt-5 flex flex-col items-center justify-center p-3 rounded-2xl">
      <h1 className={`text-4xl font-extrabold ${props.text} center`}>
        {props.name}
      </h1>
      <p className="text-indigo-950 font-bold mt-5">{props.detail}</p>
    </div>
  );
};

export default Card;
