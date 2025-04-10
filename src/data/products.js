import chinken from '../images/chinken.jpg';
import pizza from '../images/pizza.jpg';
import cake from '../images/cake.jpg';

const products = [
    {
        id: 1,
        name: "烤雞",
        price: 300,
        description: "這是一支很好吃的烤雞",
        image: chinken,
    },
    {
        id: 2,
        name: "披薩",
        price: 550,
        description: "只有八片沒有欺騙的披薩",
        image: pizza,
    },
    {
        id: 3,
        name: "提拉米蘇",
        price: 200,
        description: "提拉米蘇說：我很好吃",
        image: cake,
    },
];

export default products;