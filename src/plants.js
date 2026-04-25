import snakeImage from './assets/images/snake.png';
import lavenderImage from './assets/images/lavender.png';
import monsteraImage from './assets/images/monstera.png';
import lilyImage from './assets/images/lily.jpg';
import rosemaryImage from './assets/images/Rosemary.jpg';
import mintImage from './assets/images/mint.jpg';
import spiderImage from './assets/images/spider.jpg';

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
            },
            {
                name: "Pothos",
                image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=800",
                description: "Extremely hardy and excellent at filtering air.",
                cost: "Rs. 650"
            },
            {
                name: "Cast Iron Plant",
                image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800",
                description: "Thrives in low light and improves air quality.",
                cost: "Rs. 2,200"
            },
            {
                name: "ZZ Plant",
                image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&q=80&w=800",
                description: "Low maintenance with air-purifying properties.",
                cost: "Rs. 1,900"
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
            },
            {
                name: "Lemon Balm",
                image: "https://images.unsplash.com/photo-1594484208280-efa00f9e990c?auto=format&fit=crop&q=80&w=800",
                description: "Citrusy scent that reduces stress.",
                cost: "Rs. 750"
            },
            {
                name: "Eucalyptus",
                image: "https://images.unsplash.com/photo-1515589177095-207604318c5e?auto=format&fit=crop&q=80&w=800",
                description: "Fresh, menthol-like aroma for clarity.",
                cost: "Rs. 2,400"
            },
            {
                name: "Jasmine",
                image: "https://images.unsplash.com/photo-1597055181300-e3633a907519?auto=format&fit=crop&q=80&w=800",
                description: "Sweet, exotic fragrance that blooms at night.",
                cost: "Rs. 3,500"
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
                image: "https://images.unsplash.com/photo-1597055181300-e3633a907519?auto=format&fit=crop&q=80&w=800",
                description: "Stunning violin-shaped leaves.",
                cost: "Rs. 4,500"
            },
            {
                name: "Bird of Paradise",
                image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800",
                description: "Spectacular orange and blue flowers.",
                cost: "Rs. 5,800"
            },
            {
                name: "Rubber Plant",
                image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&q=80&w=800",
                description: "Deep green, glossy leaves that stand tall.",
                cost: "Rs. 3,200"
            },
            {
                name: "Calathea",
                image: "https://images.unsplash.com/photo-1594484208280-efa00f9e990c?auto=format&fit=crop&q=80&w=800",
                description: "Beautifully patterned foliage that moves.",
                cost: "Rs. 2,800"
            }
        ]
    }
];
