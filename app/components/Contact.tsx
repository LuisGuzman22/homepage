export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-6 bg-gray-900 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <p className="text-gray-300 mb-6">
        ¿Te gustaría trabajar conmigo o conversar sobre tecnología? ¡Estoy
        disponible!
      </p>
      <a
        href="mailto:lguzman2207@gmail.com"
        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full"
      >
        Enviar correo
      </a>
      <div className="mt-6 space-x-4">
        <a
          href="https://github.com/LuisGuzman22"
          target="_blank"
          className="text-purple-400 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/luis-guzmán-peña-0b8406134/"
          target="_blank"
          className="text-purple-400 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
