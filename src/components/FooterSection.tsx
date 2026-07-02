import { useState } from 'react';

export default function FooterSection() {
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleEasterEgg = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 3) {
      setEasterEggActive(true);
    }
  };

  return (
    <footer className="py-12 px-4 bg-lavender-light/30 relative">
      <div className="max-w-3xl mx-auto text-center">
        {/* Easter egg message */}
        {easterEggActive && (
          <div className="mb-8 p-6 bg-white rounded-xl shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-pastelYellow opacity-80 rotate-[-1deg] rounded-sm" />
            <span className="text-4xl mb-3 block">🎉💖🎉</span>
            <h3 className="text-2xl md:text-3xl font-bold text-lavender-dark mb-2">
              ¡Mensaje Secreto!
            </h3>
            <p className="text-base font-nunito text-foreground/80 leading-relaxed">
              Querida hermanita, este es un mensaje solo para ti: Eres la persona más increíble
              que conozco. Cada día me inspiras con tu alegría y tu forma de ver el mundo.
              ¡El futuro te tiene cosas maravillosas! Te quiero con todo mi corazón. 💕✨
            </p>
          </div>
        )}

        {/* Decorative elements */}
        <div className="flex justify-center gap-2 mb-4 text-2xl">
          <span className="animate-wiggle">⭐</span>
          <span className="animate-bounce-soft" style={{ animationDelay: '0.3s' }}>🎓</span>
          <span className="animate-float" style={{ animationDelay: '0.6s' }}>✨</span>
        </div>

        <p className="text-lg font-nunito text-foreground/70 mb-2">
          Hecho con mucho amor para ti 💕
        </p>
        <p className="text-sm font-nunito text-muted-foreground mb-6">
          Generación 2020 - 2026
        </p>

        {/* Easter egg button */}
        <button
          onClick={handleEasterEgg}
          className="text-xs text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors font-nunito cursor-pointer"
          aria-label="Sorpresa"
        >
          {easterEggActive ? '💖' : clickCount > 0 ? `${'⭐'.repeat(clickCount)}` : '☆'}
        </button>

        {!easterEggActive && clickCount > 0 && clickCount < 3 && (
          <p className="text-xs text-muted-foreground/40 mt-1 font-nunito">
            {3 - clickCount} más...
          </p>
        )}
      </div>
    </footer>
  );
}