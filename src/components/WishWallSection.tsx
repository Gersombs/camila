import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const wishes = [
  {
    author: 'Mamá',
    message: 'Estoy tan orgullosa de ti, mi amor. ¡Sigue brillando! 💖',
    color: 'bg-pastelYellow-light',
    rotation: 'rotate-[-2deg]',
  },
  {
    author: 'Papá',
    message: 'Mi princesa ya creció. Te amo mucho. 🌟',
    color: 'bg-pastelPink-light',
    rotation: 'rotate-[1.5deg]',
  },
  {
    author: 'Hermano/a',
    message: '¡Lo lograste! Siempre supe que eras la más inteligente. 🎉',
    color: 'bg-mint-light',
    rotation: 'rotate-[-1deg]',
  },
  {
    author: 'Abuelita',
    message: 'Mi nieta hermosa, que Dios te bendiga siempre. 🙏💕',
    color: 'bg-lavender-light',
    rotation: 'rotate-[2deg]',
  },
  {
    author: 'Tu mejor amiga',
    message: '¡Amiga! ¡Siempre seremos BFF! 👯‍♀️✨',
    color: 'bg-pastelYellow-light',
    rotation: 'rotate-[-1.5deg]',
  },
  {
    author: 'Maestra',
    message: 'Tienes un futuro brillante por delante. ¡Éxito! 📚⭐',
    color: 'bg-mint-light',
    rotation: 'rotate-[1deg]',
  },
];

export default function WishWallSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 px-4 bg-white/50">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-pastelYellow-dark mb-2">
            💌 Muro de los Deseos
          </h2>
          <p className="text-base text-muted-foreground font-nunito">
            Mensajes de quienes más te quieren
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {wishes.map((wish, index) => (
            <WishCard key={wish.author} wish={wish} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WishCard({ wish, index }: { wish: typeof wishes[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`postit ${wish.color} ${wish.rotation} rounded-sm p-4 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Pin decoration */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-400 shadow-sm border border-red-300" />

      <p className="text-sm font-nunito text-foreground/80 mb-2 leading-relaxed italic">
        "{wish.message}"
      </p>
      <p className="text-xs font-bold text-foreground/60 font-nunito text-right">
        — {wish.author}
      </p>
    </div>
  );
}