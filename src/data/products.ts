import type { ProductGroup } from '../types/product';
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";
import card5 from "../assets/images/card5.png";
import card6 from "../assets/images/card6.png";

export const productGroups: ProductGroup[] = [
  {
    id: 1,
    title: "Наушники",
    products: [
      {
        id: 1,
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
        image: card1,
      },
      {
        id: 2,
        title: "Apple EarPods",
        price: 2327,
        rate: 4.7,
        image: card2,
      },
      {
        id: 3,
        title: "Apple EarPods",
        price: 2327,
        rate: 4.7,
        image: card3,
      },
      {
        id: 1,
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
        image: card1,
      },
      {
        id: 2,
        title: "Apple EarPods",
        price: 2327,
        rate: 4.7,
        image: card2,
      },
      {
        id: 3,
        title: "Apple EarPods",
        price: 2327,
        rate: 4.7,
        image: card3,
      },
    ],
  },
  {
    id: 2,
    title: "Беспроводные наушники",
    products: [
      {
        id: 4,
        title: "Apple AirPods",
        price: 9527,
        rate: 4.7,
        image: card4,
      },
      {
        id: 5,
        title: "GERLAX GH-04",
        price: 6527,
        rate: 4.7,
        image: card5,
      },
      {
        id: 6,
        title: "BOROFONE BO4",
        price: 7527,
        rate: 4.7,
        image: card6,
      },
    ],
  },
];