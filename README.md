# 3D Interactive Carousel

A responsive and interactive 3D carousel built with **React**, **GSAP**, and **Draggable**.  
This carousel supports smooth horizontal scrolling, tilt & scale effects, floating animations, and clickable cards that snap to the center before opening links.

---

## Features

- **3D Tilt & Scale**: Cards tilt based on their position relative to the center.
- **Floating Animation**: Each card gently floats up and down independently.
- **Horizontal Scroll**: Scroll horizontally using mouse, trackpad, or drag gestures.
- **Draggable**: Click-and-drag to scroll the carousel.
- **Clickable Cards**: Cards snap to the center first; clicking again opens the link.
- **Responsive**: Works on desktop and mobile with dynamic card sizing.
- **Custom Content Support**: Easily attach links or additional info to each card.

---

## Demo

Add your own images in `src/assets` or via URLs and provide them in the `cards` array in `Carousel`:

Installation

Clone the repository:

git clone https://github.com/yourusername/3d-carousel.git
cd 3d-carousel


Install dependencies:

npm install
# or
yarn


Start the development server:

npm run dev
# or
yarn dev

Usage
import Carousel from "./components/carousel/Carousel";

const cards = [
  { img: "/1.png", href: "https://example.com/1" },
  { img: "/2.png", href: "https://example.com/2" },
  { img: "/3.png", href: "https://example.com/3" },
  { img: "/4.png", href: "https://example.com/4" },
];

export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      <Carousel cards={cards} />
    </div>
  );
}

Technologies

React

GSAP

GSAP Draggable

ScrollTrigger

TypeScript

TailwindCSS (optional for styling)
