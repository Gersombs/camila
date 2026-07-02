import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const grades = [
  {
    grade: '1er Grado',
    year: '2020-2021',
    description: 'El primer día de clases, nuevos amigos y muchas aventuras por descubrir.',
    emoji: '🎒',
    color: 'bg-lavender-light',
    borderColor: 'border-lavender',
    image: 'Primero.jpeg',
  },
  {
    grade: '2do Grado',
    year: '2021-2022',
    description: 'Aprendiendo a leer y escribir, descubriendo el mundo de los libros.',
    emoji: '📚',
    color: 'bg-mint-light',
    borderColor: 'border-mint',
    image: 'Segundo.jpeg',
  },
  {
    grade: '3er Grado',
    year: '2022-2023',
    description: 'Haciendo proyectos creativos y participando en festivales escolares.',
    emoji: '🎨',
    color: 'bg-pastelYellow-light',
    borderColor: 'border-pastelYellow',
    image: 'Tercero.jpeg',
  },
  {
    grade: '4to Grado',
    year: '2023-2024',
    description: 'Creciendo, aprendiendo y formando amistades que durarán para siempre.',
    emoji: '🌱',
    color: 'bg-pastelPink-light',
    borderColor: 'border-pastelPink',
    image: 'Cuarto.jpeg',
  },
  {
    grade: '5to Grado',
    year: '2024-2025',
    description: 'Descubriendo talentos y preparándose para los grandes retos.',
    emoji: '⭐',
    color: 'bg-lavender-light',
    borderColor: 'border-lavender',
    image: 'Quinto.jpeg',
  },
  {
    grade: '6to Grado',
    year: '2025-2026',
    description: '¡Lo lograste! Una etapa increíble llega a su fin. ¡El futuro te espera!',
    emoji: '🎓',
    color: 'bg-mint-light',
    borderColor: 'border-mint',
    image: 'Sexto.jpeg',
  },
];

export default function TimelineSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-12 px-4 bg-white/50 relative">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-8 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}
        >
          <img
            src="https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-07-01/ruclfhacaila/washi-tape-decorations.png"
            alt=""
            className="absolute -top-6 right-0 w-16 md:w-24 opacity-40 rotate-12"
          />
          <h2 className="text-3xl md:text-5xl font-bold text-lavender-dark mb-2">
            📖 El Viaje
          </h2>
          <p className="text-base text-muted-foreground font-nunito">
            Cada año fue una aventura increíble
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {grades.map((item, index) => (
            <TimelineCard 
              key={item.grade} 
              item={item} 
              index={index} 
              onClick={() => setSelectedImage(item.image)} 
            />
          ))}
        </div>
      </div>

      {/* Modal para el Zoom */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Zoom" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
          <button className="absolute top-5 right-5 text-white text-4xl font-bold p-2">×</button>
        </div>
      )}
    </section>
  );
}

function TimelineCard({ item, index, onClick }: { item: typeof grades[0]; index: number; onClick: () => void }) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`${item.color} border-2 ${item.borderColor} rounded-xl p-4 shadow-md relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="absolute -top-1.5 left-6 w-10 h-2.5 bg-pastelYellow opacity-70 rotate-[-1deg] rounded-sm" />

      <div className="flex items-start gap-2">
        <span className="text-2xl">{item.emoji}</span>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">{item.grade}</h3>
          <p className="text-xs text-muted-foreground font-nunito font-medium">{item.year}</p>
          <p className="text-sm text-foreground/80 font-nunito mt-1">{item.description}</p>
        </div>
      </div>

      <div 
        className="mt-3 w-full h-32 bg-white/60 rounded-lg overflow-hidden border-2 border-white shadow-inner cursor-pointer hover:opacity-80 transition-opacity"
        onClick={onClick}
      >
        <img 
          src={item.image} 
          alt={`Foto de ${item.grade}`} 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  );
}