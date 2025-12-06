export default function Habilidades() {
  const lenguajes = [
    "Java", "Python"
  ];

  const herramientas = [
    "Manim", "Git", "Visual Studio Code","LaTeX","MATLAB"
  ];

  // Define la URL para Manim
  const manimUrl = "https://www.manim.community/"; 

  const renderHerramienta = (h) => {
    // Clases comunes para todos los elementos (span o a)
    const commonClasses = "px-4 py-2 rounded-full bg-lilac text-[#4a4453] font-semibold shadow-kawaii hover:scale-105 transition";

    if (h === "Manim") {
      // Si es Manim, renderizamos un ENLACE (<a>)
      return (
        <a
          key={h}
          href={manimUrl} // La URL de destino
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${commonClasses} cursor-pointer hover:bg-lilac-dark`}
        >
          {h}
        </a>
      );
    } else {
      // Para el resto de herramientas, renderizamos un SPAN
      return (
        <span
          key={h}
          className={commonClasses}
        >
          {h}
        </span>
      );
    }
  };

  return (
    <section className="px-6 md:px-24 py-14 fade-up">
      {/* 1. TÍTULO PRINCIPAL DE LA SECCIÓN */}
      <h2 className="text-4xl text-sakuraDark font-semibold mb-6 drop-shadow">
        Habilidades
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* 2. LENGUAJES DE PROGRAMACIÓN */}
        <div className="p-6 bg-bubble rounded-2xl shadow-kawaii">
          <h3 className="text-2xl text-sakuraDark font-semibold mb-4">
            Lenguajes de Programación
          </h3>
          <div className="flex flex-wrap gap-3">
            {lenguajes.map((l) => (
              <span
                key={l}
                className="px-4 py-2 rounded-full bg-lilac text-[#4a4453] font-semibold shadow-kawaii hover:scale-105 transition"
              >
                {l}
              </span>
            ))}
          </div>
        </div>

        {/* 3. HERRAMIENTAS Y SOFTWARE (Con el enlace condicional) */}
        <div className="p-6 bg-bubble rounded-2xl shadow-kawaii">
          <h3 className="text-2xl text-sakuraDark font-semibold mb-4">
            Herramientas y Software
          </h3>
          <div className="flex flex-wrap gap-3">
            {herramientas.map(renderHerramienta)}
          </div>
        </div>
      </div>
    </section>
  );
}