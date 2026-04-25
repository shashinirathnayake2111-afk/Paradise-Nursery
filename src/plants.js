import snakeImage from './assets/images/snake.png';
import lavenderImage from './assets/images/lavender.png';
import monsteraImage from './assets/images/monstera.png';
import lilyImage from './assets/images/lily.jpg';
import rosemaryImage from './assets/images/Rosemary.jpg';
import mintImage from './assets/images/mint.jpg';
import spiderImage from './assets/images/spider.jpg';
import fiddleImage from './assets/images/Fiddle.jfif';

export const PLANTS = [
    {
        category: "Air Purifying",
        plants: [
            {
                name: "Snake Plant",
                image: snakeImage,
                description: "Produces oxygen at night, improving air quality.",
                cost: "Rs. 1,200"
            },
            {
                name: "Spider Plant",
                image: spiderImage,
                description: "Filters formaldehyde and xylene from the air.",
                cost: "Rs. 850"
            },
            {
                name: "Peace Lily",
                image: lilyImage,
                description: "Removes mold spores and other toxins.",
                cost: "Rs. 1,500"
            }
        ]
    },
    {
        category: "Aromatic",
        plants: [
            {
                name: "Lavender",
                image: lavenderImage,
                description: "Calming scent, used in aromatherapy.",
                cost: "Rs. 1,800"
            },
            {
                name: "Rosemary",
                image: rosemaryImage,
                description: "Invigorating aroma, used in cooking.",
                cost: "Rs. 1,200"
            },
            {
                name: "Mint",
                image: mintImage,
                description: "Refreshing scent, great for teas.",
                cost: "Rs. 450"
            }
        ]
    },
    {
        category: "Tropical",
        plants: [
            {
                name: "Monstera",
                image: monsteraImage,
                description: "Large, iconic leaves for a jungle vibe.",
                cost: "Rs. 2,500"
            },
            {
                name: "Aloe Vera",
                image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=800",
                description: "Succulent with medicinal properties.",
                cost: "Rs. 950"
            },
            {
                name: "Fiddle Leaf Fig",
                image: fiddleImage,
                description: "Stunning violin-shaped leaves.",
                cost: "Rs. 4,500"
            }
        ]
    }
];
