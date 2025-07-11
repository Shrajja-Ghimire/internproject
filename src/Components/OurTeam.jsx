import React from "react";
import TeamCard from "./TeamCard";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
const OurTeam = () => {
  return (
    <div className="p-7 ">
      <h1 className="text-4xl text-indigo-950 font-extrabold text-center">
        The Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:justify-center md:mx-auto max-w-6xl">
        <TeamCard img={boy} title="DIPESH KARKI" post="Finance Manager" />
        <TeamCard img={girl} title="Prayusha Shrestha" post="HR Officer" />
        <TeamCard
          img={girl}
          title="Manta Lama"
          post="Digital Marketing Co-ordinator"
        />
        <TeamCard
          img={boy}
          title="Dipak B K"
          post="Motion Graphics Designer & Video Editor"
        />
        <TeamCard img={boy} title="Aman Shrestha" post="Sr. Graphic Designer" />
        <TeamCard img={boy} title="Rajan Sharma" post="Marketing Officer" />
        <TeamCard img={boy} title="Prajwol KC" post="Software Engineer" />
        <TeamCard
          img={boy}
          title="Sujan Karki"
          post=" Graphic Designer Intern"
        />
      </div>
    </div>
  );
};

export default OurTeam;
