import React from "react";
import "./List.css";

import blacksmith1 from "./Listassets/blacksmith_1.png";
import blacksmith2 from "./Listassets/blacksmith_2.png";
import blacksmith3 from "./Listassets/blacksmith_3.png";
import blacksmith4 from "./Listassets/blacksmith_4.png";
import blacksmith5 from "./Listassets/blacksmith_5.png";

const blacksmiths = [
  {
    name: "Kristine",
    title: "Master Blacksmith",
    image: blacksmith1,
    description:
      "Kristine is a Master Blacksmith renowned for her exceptional sword-making skills. With years of experience, she blends traditional techniques with innovative designs to create blades of unparalleled quality. Her dedication ensures each sword is both a functional weapon and a work of art.",
    rating: 4.4,
  },
  {
    name: "Deborah",
    title: "Apprentice",
    image: blacksmith2,
    description:
      "Deborah is a rising talent in the forge, specializing in durable and detailed armor. As an Apprentice Blacksmith, she focuses on perfecting protection with every piece she crafts. Her passion and precision make her work reliable for both training and battle.",
    rating: 4.4,
  },
  {
    name: "Jereve",
    title: "Expert Blacksmith",
    image: blacksmith3,
    description:
      "Jereve is an Expert Blacksmith renowned for forging strong, dependable shields. Her craftsmanship combines resilience and refined design, perfect for adventurers who never back down. With every piece she creates, protection and precision come hand in hand.",
    rating: 4.4,
  },
  {
    name: "Raizhi",
    title: "Journeyman",
    image: blacksmith4,
    description:
      "Raizhi is a skilled Journeyman Blacksmith with a focus on crafting high-quality helmets. Her designs offer both protection and comfort, perfect for long battles or everyday defense. Each helmet is forged with care, reflecting her dedication to both form and function.",
    rating: 4.4,
  },
  {
    name: "Pia",
    title: "Senior Blacksmith",
    image: blacksmith5,
    description:
      "Pia is a Senior Blacksmith with a sharp edge in crafting finely tuned daggers. Her blades are swift, precise, and trusted by rogues and warriors alike. Every dagger she forges reflects years of mastery and an eye for deadly detail.",
    rating: 4.4,
  },
];

const BlacksmithCard = ({ name, title, image, description, rating }) => {
  return (
    <div className="card horizontal">
      <div className="image-wrapper">
        <img src={image} alt={name} className="profile-image" />
        <div className="rating">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="star filled"></span>
          ))}
          <span className="star half"></span>
          <span className="rating-value">{rating}</span>
        </div>
      </div>
      <div className="info">
        <h3>{name}</h3>
        <p className="title">"{title}"</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const BlacksmithsList = () => {
  return (
    <div className="container">
      <h1>Blacksmiths List</h1>
      <div className="grid fixed-grid">
        {blacksmiths.map((smith, index) => (
          <BlacksmithCard key={index} {...smith} />
        ))}
      </div>
    </div>
  );
};

export default BlacksmithsList;
