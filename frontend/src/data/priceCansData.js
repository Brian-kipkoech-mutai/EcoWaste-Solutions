import smallTrash from "../assets/logos/small trash.jfif";
import mediumTrash from "../assets/logos/f446tb63.png";
import largeTrash from "../assets/logos/largeTrash.jfif";

export const priceCardData = [
  {
    size: "Small",
    pricePerMonth: 15.99,
    capacityGallons: 20,
    maxPeopleServed: 2,
    maxTrashBags: 4,
    maxWeightLbs: 50,
    img: smallTrash,
  },
  {
    size: "Medium",
    pricePerMonth: 25.99,
    capacityGallons: 35,
    maxPeopleServed: 4,
    maxTrashBags: 8,
    maxWeightLbs: 100,
    img: mediumTrash,
  },
  {
    size: "Large",
    pricePerMonth: 35.99,
    capacityGallons: 50,
    maxPeopleServed: 6,
    maxTrashBags: 12,
    maxWeightLbs: 150,
    img: largeTrash,
  },
];
