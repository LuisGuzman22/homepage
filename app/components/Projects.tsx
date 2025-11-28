const projects = [
  {
    title: "Microsoft - Software Engineer",
    description:
      "Actualmente trabajando en Microsoft, desarrollando soluciones con C# y Python, integrando servicios en Azure, Kusto DB, Grafana y Azure Data Explorer para monitoreo, análisis y visualización de datos a gran escala.",
    tech: ["C#", "Python", "Azure", "Kusto DB", "Grafana", "Data Explorer"],
  },
  {
    title: "Backend Regional - Seguros Falabella",
    description:
      "Desarrollé funcionalidades para aplicaciones backend regionales usando NodeJS (Express y NestJS con arquitectura Hexagonal), PostgreSQL, Azure y GitLab CI/CD. También creé una app React para integraciones con clientes.",
    tech: ["NodeJS", "NestJS", "React", "Azure", "PostgreSQL"],
  },
  {
    title: "Portal de Atención al Cliente - Cencosud",
    description:
      "Diseñé y desarrollé un portal de atención al cliente con React y NestJS, dentro de una arquitectura de microservicios. Apliqué patrones Factory y Strategy, e integré Redis para almacenamiento en caché. También realicé análisis de seguridad y correcciones de hallazgos de pentesting.",
    tech: ["React", "NestJS", "Redis", "Microservicios", "Seguridad"],
  },
  {
    title: "Proyectos para clientes de Baufest",
    description:
      "Durante mi tiempo en la consultora Baufest, lideré y desarrollé soluciones para diversos clientes en múltiples industrias:",
    tech: ["Consultoría", "Fullstack", "Arquitectura"],
    clients: [
      {
        name: "Tanner",
        details:
          "Portal de venta de seguros automotrices con React, NestJS y SQL Server en arquitectura de microservicios.",
        tech: ["React", "NestJS", "SQL Server"],
      },
      {
        name: "Enaex",
        details:
          "Portal de reconocimiento de personal con Angular e Ionic, backend en Express y PostgreSQL. También desarrollé una app Android para guiar rutas de explosivos en minería.",
        tech: ["Angular", "Ionic", "Express", "PostgreSQL", "Android"],
      },
      {
        name: "Coppel",
        details:
          "Microservicios Java con Spring Boot, mejorando modularidad y rendimiento. Lideré equipos backend y definí arquitecturas de APIs.",
        tech: ["Java", "Spring Boot"],
      },
      {
        name: "DCV",
        details:
          "Diseño de flujos de trabajo en JIRA conectados a SQL para registrar transacciones del área de valores.",
        tech: ["JIRA", "SQL"],
      },
    ],
  },
  {
    title: "Club Movistar App - Bild Chile",
    description:
      "Desarrollé una aplicación de beneficios para clientes Movistar utilizando IONIC en el frontend, NestJS en el backend y MongoDB como base de datos.",
    tech: ["Ionic", "NestJS", "MongoDB"],
  },
  {
    title: "Portal Forestal - Ecofor",
    description:
      "Ingeniero Fullstack y móvil nativo para soluciones forestales.",
    tech: ["Mobile", "Fullstack"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Proyectos destacados
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-300 mb-4">{proj.description}</p>
            {proj.clients && (
              <div className="space-y-4">
                {proj.clients.map((client, j) => (
                  <div key={j}>
                    <h4 className="text-lg font-semibold text-purple-400">
                      {client.name}
                    </h4>
                    <p className="text-gray-300">{client.details}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {client.tech.map((tech, k) => (
                        <span
                          key={k}
                          className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {!proj.clients && (
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
