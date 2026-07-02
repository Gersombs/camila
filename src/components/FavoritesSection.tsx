import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const favorites = [
  {
    title: 'Su canción favorita',
    content: '🎵 Rosa Pastel (no cierto pero si cierto)',
    emoji: '🎶',
    bgColor: 'bg-lavender-light',
    rotation: 'rotate-[-2deg]',
  },
  {
    title: 'Su mejor amigo(a)',
    content: '👯‍♀️ Su Hermano',
    emoji: '💕',
    bgColor: 'bg-mint-light',
    rotation: 'rotate-[1deg]',
  },
  {
    title: 'Su mayor sueño',
    content: '✨ Dibujar Igual Que yo',
    emoji: '🌟',
    bgColor: 'bg-pastelYellow-light',
    rotation: 'rotate-[2deg]',
  },
  {
    title: 'Su materia favorita',
    content: '📚 Dibujo',
    emoji: '🏆',
    bgColor: 'bg-pastelPink-light',
    rotation: 'rotate-[-1deg]',
  },
  {
    title: 'Su comida favorita',
    content: '🍕 Asiática',
    emoji: '😋',
    bgColor: 'bg-mint-light',
    rotation: 'rotate-[1.5deg]',
  },
  {
    title: 'Lo que más le gusta',
    content: '💝 No ir a la escuela',
    emoji: '🏫',
    bgColor: 'bg-lavender-light',
    rotation: 'rotate-[-1.5deg]',
  },
];

export default function FavoritesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-mint-dark mb-2">
            💫 Cápsula del Tiempo
          </h2>
          <p className="text-base text-muted-foreground font-nunito">
            Sus favoritos en este momento especial
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {favorites.map((item, index) => (
            <FavoriteCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FavoriteCard({ item, index }: { item: typeof favorites[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`${item.bgColor} ${item.rotation} rounded-xl p-4 shadow-md hover:rotate-0 hover:scale-105 transition-all duration-300 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Sticker decoration */}
      <div className="absolute -top-2 -right-1 text-xl animate-wiggle" style={{ animationDelay: `${index * 0.3}s` }}>
        {item.emoji}
      </div>

      <div className="text-center">
        <span className="text-3xl mb-2 block">{item.emoji}</span>
        <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{item.title}</h3>
        <p className="text-sm font-nunito text-foreground/70">{item.content}</p>
      </div>

      {/* Tape decoration */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-pastelYellow/60 rotate-[1deg] rounded-sm" />
    </div>
  );
}