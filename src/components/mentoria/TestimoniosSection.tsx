import { ANIMATIONS, getAnimationDelay } from "@/utils/animations";

interface TestimoniosSectionProps {
  contentLoaded: boolean;
}

export default function TestimoniosSection({ contentLoaded }: TestimoniosSectionProps) {
  const testimonios = [
    {
      name: "María González",
      role: "Frontend Developer en Spotify",
      image: "👩‍💻",
      quote: "Gracias a Roberto, pasé de ser junior a conseguir mi trabajo soñado en Spotify. Su enfoque práctico con IA me ayudó a destacar en las entrevistas técnicas. ¡100% recomendado!",
      achievement: "Aumento salarial 180%"
    },
    {
      name: "Carlos Ruiz",
      role: "Full Stack Developer en Startup",
      image: "👨‍💻",
      quote: "El programa de mentoría fue un game-changer. Aprendí a usar ChatGPT y Copilot de manera profesional, y ahora soy el referente IA en mi equipo. Roberto es un mentor excepcional.",
      achievement: "Promoción a Tech Lead"
    },
    {
      name: "Ana Martínez",
      role: "DevOps Engineer en BBVA",
      image: "👩‍🔧",
      quote: "Roberto me guió desde cero en DevOps y IA. Su metodología paso a paso y el apoyo constante fueron clave para mi transformación profesional. ¡Gracias por cambiar mi vida!",
      achievement: "Primera oportunidad Senior"
    }
  ];

  return (
    <section className="bg-white py-20 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div 
          className={`text-center mb-16 transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
          style={getAnimationDelay(0.4)}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Historias de <span className="text-[#ff4d6d]">Transformación</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estos son algunos de los desarrolladores que han transformado sus carreras con mi modelo de suscripción continua
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
              style={getAnimationDelay(0.5 + index * 0.2)}
            >
              {/* Avatar y Achievement */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{testimonio.image}</div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                  {testimonio.achievement}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                &ldquo;{testimonio.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="font-semibold text-gray-900">{testimonio.name}</div>
                <div className="text-sm text-gray-600">{testimonio.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas de Éxito */}
        <div 
          className={`bg-[#ff4d6d] rounded-2xl p-8 sm:p-12 text-white text-center transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
          style={getAnimationDelay(0.9)}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">
            Resultados que Hablan por Sí Mismos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Consiguen trabajo en 6 meses</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">+150%</div>
              <div className="text-lg opacity-90">Aumento salarial promedio</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Desarrolladores mentorizados</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-lg opacity-90">Puntuación promedio</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div 
          className={`mt-16 text-center transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
          style={getAnimationDelay(1.1)}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            ¿Listo para ser el próximo caso de éxito?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Únete a mi comunidad de desarrolladores que han transformado sus carreras con un modelo de crecimiento continuo y sin límites.
          </p>
          <a
            href="mailto:roberto@franzet.com?subject=Quiero ser un caso de éxito - Mentoría"
            className="inline-flex items-center gap-3 bg-[#ff4d6d] hover:bg-[#e63c5e] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Empezar Mi Transformación
          </a>
        </div>
      </div>
    </section>
  );
} 