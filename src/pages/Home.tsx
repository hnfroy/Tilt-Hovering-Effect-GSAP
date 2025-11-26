import Carousel from "../components/carousel/Carousel";

const cards = [
  { img: "/1.png", href: "/link1" },
  { img: "/2.png", href: "/link2" },
  { img: "/3.png", href: "/link3" },
  { img: "/4.png", href: "/link4" },
];

export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      <Carousel cards={cards} />
    </div>
  );
}
