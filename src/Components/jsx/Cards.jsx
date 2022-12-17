import {Link} from "react-router-dom";
const Cards = () => {
  const cardData = [
    {
      id: 1,
      category: "Laptop",
      source:
        "https://ik.imagekit.io/egkxyv8la/Zemo_E-Commerce/images/laptop_P5lVwwboT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671285170081",
    },
    {
      id: 2,
      category: "Mobile",
      source:
        "https://ik.imagekit.io/egkxyv8la/Zemo_E-Commerce/images/mobile_zC_al1-sa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670761718823",
    },
    {
      id: 3,
      category: "Camera",
      source:
        "https://ik.imagekit.io/egkxyv8la/Zemo_E-Commerce/images/camera_pAYiUM3C4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671285169660",
    },
    {
      id: 4,
      category: "Headphone",
      source:
        "https://ik.imagekit.io/egkxyv8la/Zemo_E-Commerce/images/headphones_EPPFCyJCm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671186954455",
    },
    {
      id: 5,
      category: "Speaker",
      source:
        "https://ik.imagekit.io/egkxyv8la/Zemo_E-Commerce/images/speaker_U-XuwdHzr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671285170641",
    },
    {
      id: 6,
      category: "Television",
      source:
        "https://ik.imagekit.io/egkxyv8la/Zemo_E-Commerce/images/television_tuRIPnsVQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671285172482",
    },
    {
      id: 7,
      category: "Fruits",
      source:
        "https://ik.imagekit.io/egkxyv8la/Zemo_E-Commerce/images/fruits_rzqEekpEH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671285171306",
    },
    {
      id: 8,
      category: "Refrigerator",
      source:
        "https://ik.imagekit.io/egkxyv8la/Zemo_E-Commerce/images/refrigerator_EkgZ_HSOA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671285168994",
    },
    {
      id: 9,
      category: "Kitchen",
      source:
        "https://ik.imagekit.io/egkxyv8la/Zemo_E-Commerce/images/kitchen_V9MhhofcN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671285171529",
    },
    {
      id: 10,
      category: "Fashion",
      source:
        "https://ik.imagekit.io/egkxyv8la/Zemo_E-Commerce/images/dress_FXK5u_M8kq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671285172357",
    },
  ];
  return cardData.map((item) => {
    return (
      <Link to={item.category} key={item.id}>
      <div className="flex flex-col justify-center items-center flex-wrap border w-40 px-2 py-3 rounded bg-leaf-dr-color  ">
        <img src={item.source} alt="Laptop" className="w-32 h-32" />
        <span className="text-white text-sm my-4">{item.category}</span>
      </div>
      </Link>
    );
  });
};

export default Cards;
