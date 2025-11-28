const skills = [
  "React",
  "NestJS",
  "Java",
  "NodeJS",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "Azure",
  "AWS",
  "CI/CD",
  "Kubernetes",
  "Redis",
  "Spring Boot",
  "Angular",
  "Ionic",
  "SQL Server",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 px-6 bg-gray-800 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-8">Tecnologías</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
