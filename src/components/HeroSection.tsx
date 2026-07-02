import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export default function HeroSection() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 3000;
      const end = Date.now() + duration;

      const colors = ['#E8D5F5', '#C9A9E0', '#B8E8D0', '#7DD3A8', '#FFF3B0', '#FFE066', '#FFD6E0'];

      const frame = () => {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 60,
          origin: { x: 0, y: 0.5 },
          colors,
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 60,
          origin: { x: 1, y: 0.5 },
          colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    }, 300);

    return () => clearTimeout(timer);
  }, []);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-10 md:py-14 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-5 w-12 h-12 bg-pastelYellow-light rounded-full opacity-40 animate-float" />
        <div className="absolute top-8 right-10 w-10 h-10 bg-lavender-light rounded-full opacity-50 animate-bounce-soft" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-8 left-10 w-8 h-8 bg-mint-light rounded-full opacity-40 animate-wiggle" />
        <div className="absolute bottom-12 right-8 w-10 h-10 bg-pastelPink-light rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }} />
        <img
          src="https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-07-01/rucleyicailq/sticker-decorations-sheet.png"
          alt=""
          className="absolute top-2 right-2 w-20 md:w-28 opacity-30 animate-wiggle"
        />
        <img
          src="https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-07-01/ruclfvycaika/sticker-school-elements.png"
          alt=""
          className="absolute bottom-4 left-2 w-16 md:w-24 opacity-25 animate-float"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Graduation cap sticker */}
        <div className="mb-4 animate-bounce-soft">
          <img
            src="https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-07-01/ruclelacaikq/sticker-graduation-cap.png"
            alt="Birrete de graduación"
            className="w-20 h-20 md:w-28 md:h-28 mx-auto object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-lavender-dark mb-3 leading-tight">
          ¡Felicidades por tu Graduación!
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground font-nunito font-medium mb-6">
          Generación 2020 - 2026 🌟
        </p>

        {/* Photo placeholder */}
        <div className="relative inline-block mx-auto">
          <button
            type="button"
            onClick={() => setZoomImage('/Fav.jpeg')}
            className="polaroid rotate-2 hover:rotate-0 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:ring-offset-2"
            aria-label="Ver foto en tamaño completo"
          >
            <div className="w-40 h-40 md:w-52 md:h-52 bg-gradient-to-br from-lavender-light to-mint-light rounded-sm flex items-center justify-center overflow-hidden">
              <img
                src="Fav.jpeg"
                alt="Foto favorita"
                className="w-full h-full object-cover"
              />
            </div>
          </button>
          {/* Decorative tape */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-3 bg-pastelYellow opacity-80 rotate-[-2deg] rounded-sm" />
        </div>
      </div>
      {/* Modal para el Zoom */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setZoomImage(null)}
        >
          <div className="relative max-w-full max-h-[90vh]" onClick={(event) => event.stopPropagation()}>
            <img
              src={zoomImage}
              alt="Zoom"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              type="button"
              onClick={() => setZoomImage(null)}
              className="absolute top-3 right-3 text-white text-3xl md:text-4xl font-bold leading-none bg-black/40 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/60"
              aria-label="Cerrar vista ampliada"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}