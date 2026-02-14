import { useState } from "react";
import uav1 from "@/assets/uav-product-1.jpg";
import uav2 from "@/assets/uav-product-2.jpg";
import uav3 from "@/assets/uav-product-3.jpg";

const images = [
  { src: uav1, alt: "Shadow Striker 3200 side profile" },
  { src: uav2, alt: "Shadow Striker 3200 top view" },
  { src: uav3, alt: "Shadow Striker 3200 folded in case" },
];

const ProductGallery = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-card py-20 px-6 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Product
        </p>
        <h2 className="mb-10 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          SHADOW STRIKER 3200
        </h2>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
          {/* Main image */}
          <div className="overflow-hidden border border-border bg-background">
            <img
              src={images[selected].src}
              alt={images[selected].alt}
              className="aspect-[4/3] w-full object-cover transition-all duration-500"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 lg:flex-col">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`overflow-hidden border-2 transition-all ${
                  i === selected
                    ? "border-primary border-glow"
                    : "border-border opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-20 w-20 object-cover lg:h-24 lg:w-24"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
