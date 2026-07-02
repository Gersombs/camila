import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const photos = [
  { id: 1, caption: 'Primer día 🎒', rotation: 'rotate-[-3deg]', image: '/Slide1.jpeg' },
  { id: 2, caption: 'Cumpleaños 🎉', rotation: 'rotate-[2deg]', image: '/Slide2.jpeg' },
  { id: 3, caption: 'Festival 🎈', rotation: 'rotate-[-1deg]', image: '/Slide3.jpeg' },
  { id: 4, caption: 'Con Pimi 🐶', rotation: 'rotate-[3deg]', image: '/Slide4.jpeg' },
  { id: 5, caption: 'Primera Comunión ✝️', rotation: 'rotate-[-2deg]', image: '/Slide5.jpeg' },
  { id: 6, caption: 'Mi Pequeña 💝', rotation: 'rotate-[1deg]', image: '/Slide6.jpeg' },
];

export default function GallerySection() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomImage, setZoomImage] = useState<string | null>(null); // Estado para el zoom

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % photos.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <section className="py-12 px-4 relative">
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

          {/* Polaroid display con click para zoom */}
          <div 
            className={`polaroid ${photos[activeIndex].rotation} transition-all duration-500 cursor-pointer hover:opacity-90`}
            onClick={() => setZoomImage(photos[activeIndex].image)}
          >
            <div className="w-44 h-44 md:w-56 md:h-56 bg-gray-200 rounded-sm overflow-hidden shadow-inner">
              <img 
                src={photos[activeIndex].image} 
                alt={photos[activeIndex].caption}
                className="w-full h-full object-cover"
              />
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
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-200 rounded-sm overflow-hidden shadow-sm">
                <img 
                  src={photo.image} 
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para el Zoom */}
      {zoomImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setZoomImage(null)}
        >
          <img 
            src={zoomImage} 
            alt="Zoom" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
          <button className="absolute top-5 right-5 text-white text-4xl font-bold p-2">×</button>
        </div>
      )}
    </section>
  );
}