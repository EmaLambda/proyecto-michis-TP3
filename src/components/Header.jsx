export default function Header() {
  return (
    <header className="text-center py-20 relative overflow-hidden fade-in shadow-kawaii">
     
      {/* Imagen de fondo */}
      <video
        src="/fondo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-top"
      ></video>

      {/* Contenido */}
      <div className="relative z-10">
        <img
          src="/watamote.gif"
          className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-softpink"
        />

        <h1 className="text-5xl font-bold mt-4 tracking-wide drop-shadow" style={{ color: "#ffffffdd" }}>
          EmaLambda
        </h1>

        <p className="text-lg mt-2 font-semibold" style={{ color: "#1de1eba5" }}>
          Bachiller en Enseñanza de la Matemática y Estudiante de Computación en UCR
        </p>
      </div>
    </header>
  );
}

      //<img
      //  src="https://aicdn.picsart.com/b93e3e6b-6dc4-4413-9f6f-cef8f82503b4.jpg"
      //  className="absolute inset-0 w-full h-full object-cover object-top"
      ///>