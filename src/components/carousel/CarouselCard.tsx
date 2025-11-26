// CarouselCard.tsx
import { useRef } from "react";
import { useTilt3D } from "../gsap/useTilt3D";

type CardProps = { img: string };

export default function CarouselCard({ img }: CardProps) {
  const ref = useRef<HTMLDivElement>(null!);
  useTilt3D(ref);

  return (
    <div
      ref={ref}
      className="shadow-xl rounded-xl transform-gpu"
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "512px",
        maxHeight: "512px",
        minWidth: "250px", // minimal card size di mobile
        minHeight: "250px",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
