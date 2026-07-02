import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const photos = [
  { id: 1, caption: 'Primer día 🎒', rotation: 'rotate-[-3deg]' },
  { id: 2, caption: 'Festival 🎭', rotation: 'rotate-[2deg]' },
  { id: 3, caption: 'Día de campo 🌳', rotation: 'rotate-[-1deg]' },
  { id: 4, caption: 'Con amigas 👯‍♀️', rotation: 'rotate-[3deg]' },
  { id: 5, caption: 'Día del niño 🎈', rotation: 'rotate-[-2deg]' },
  { id: 6, caption: 'Graduación 🎓', rotation: 'rotate-[1deg]' },
];

export default function GallerySection() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % photos.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-pastelPink-dark mb-2">
            📸 Galería de Recuerdos
          </h2>
          <p className="text-base text-muted-foreground font-nunito">
            Momentos que atesoraremos por siempre
          </p>
        </div>

        {/* Main carousel */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-4">
          <button
            onClick={prevSlide}
            className="w-8 h-8 rounded-full bg-lavender-light hover:bg-lavender transition-colors flex items-center justify-center text-sm shadow-sm shrink-0"
            aria-label="Anterior"
          >
            ←
          </button>

          <div className="polaroid ${photos[activeIndex].rotation} transition-all duration-500">
            <div className="w-44 h-44 md:w-56 md:h-56 bg-gradient-to-br from-lavender-light via-mint-light to-pastelYellow-light rounded-sm flex items-center justify-center">
              <span className="text-4xl">📷</span>
            </div>
            <p className="text-center text-sm font-nunito text-foreground/70 mt-1 pb-1">
              {photos[activeIndex].caption}
            </p>
          </div>

          <button
            onClick={nextSlide}
            className="w-8 h-8 rounded-full bg-lavender-light hover:bg-lavender transition-colors flex items-center justify-center text-sm shadow-sm shrink-0"
            aria-label="Siguiente"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-4">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === activeIndex ? 'bg-lavender scale-125' : 'bg-lavender/30'
              }`}
              aria-label={`Foto ${index + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail strip */}
        <div className="flex justify-center gap-2 flex-wrap">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActiveIndex(index)}
              className={`polaroid ${photo.rotation} cursor-pointer hover:rotate-0 transition-all duration-300 ${
                index === activeIndex ? 'ring-2 ring-lavender scale-105' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-lavender-light via-mint-light to-pastelYellow-light rounded-sm flex items-center justify-center">
                <span className="text-base">📷</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}