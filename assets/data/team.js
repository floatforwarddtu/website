/* =========================================================
   DATOS DEL EQUIPO  —  este es el archivo que editas cada curso.
   No hace falta tocar ningún otro archivo.

   Un bloque por curso, del más reciente al más antiguo.
   El primero de la lista se marca como "CURRENT TEAM".

     season    : texto del curso, p. ej. "2026/2027"
     teamPhoto : foto grande de todo el equipo
     departments:
        name        : nombre del departamento
        description : texto opcional bajo el título
        photo       : foto de grupo del departamento
        feature     : opcional. Cuadro de texto a la derecha de la foto,
                      con title (título) y text (párrafo)

   Las rutas de las fotos ya están puestas. Basta con subir cada foto
   a su carpeta con ese nombre exacto (minúsculas, sin acentos ni
   espacios). Mientras una foto no exista, la web muestra
   "Team photo coming soon".
   ========================================================= */

const TEAM = [
  {
    season: "2026/2027",
    teamPhoto: "images/team/2026-2027/group.jpg",
    departments: [
      {
        name: "Operations",
        description: "",
        photo: "images/team/2026-2027/operations.jpg",
        feature: {
          title: "The Operation Team of DTU Float Forward!",
          text: "The Operations team keeps DTU Float Forward running by managing its people, partnerships, and organizational work. From reaching out to companies and building sponsorship relationships to managing our social media presence and developing our website, the team helps share our journey and connect us with the outside world. Internally, it keeps everyone aligned through team communication, organizes activities that strengthen team spirit, and coordinates the logistics of our trip to Monaco. By connecting people, managing resources, and creating opportunities, the Operations team helps turn our technical ambitions into a shared team effort."
        }
      },
      {
        name: "Mechanical",
        description: "Focused on elevating the boat's performance by reducing weight, increasing power and improving manoeuvrability — from the cockpit redesign to a custom electric motor and a new capstan-drive steering system.",
        photo: "images/team/2026-2027/mechanical.jpg"
      },
      {
        name: "Autonomous",
        description: "",
        photo: "images/team/2026-2027/autonomous.jpg",
        feature: {
          title: "The Autonomous Team of DTU Float Forward!",
          text: "In 2027, DTU Float Forward will take an exciting new step with the debut of its first autonomous boat in the AI Class. The Autonomous team is developing the intelligence that will allow the boat to navigate and operate independently, moving beyond human-controlled steering towards a system that can sense, interpret, and respond to its surroundings. Its work combines perception technologies, sensor selection and calibration, and object detection with guidance, navigation, control, and mission-planning algorithms. Through software development, simulation, and onboard computing integration, the team is building the foundation for autonomous decision-making and manoeuvring on the water. Bringing these elements together is a complex engineering challenge, and one that opens up new possibilities for DTU Float Forward as it explores the future of intelligent, autonomous marine technology."
        }
      },
      {
        name: "Electrical",
        description: "Communication systems and telemetry, plus the electrical powertrain: motor, inverter, battery and safety systems across the full high-voltage development cycle.",
        photo: "images/team/2026-2027/electrical.jpg"
      }
    ]
  },
  {
    season: "2025/2026",
    teamPhoto: "images/team/2025-2026/group.jpg",
    departments: [
      { name: "Operations", description: "", photo: "images/team/2025-2026/operations.jpg" },
      { name: "Mechanical", description: "", photo: "images/team/2025-2026/mechanical.jpg" },
      { name: "Electrical", description: "", photo: "images/team/2025-2026/electrical.jpg" }
    ]
  },
  {
    season: "2024/2025",
    teamPhoto: "images/team/2024-2025/group.jpg",
    departments: [
      {
        name: "Operations",
        description: "",
        photo: "images/team/2024-2025/operations.jpg"
      },
      { name: "Mechanical", description: "", photo: "images/team/2024-2025/mechanical.jpg" },
      { name: "Electrical", description: "", photo: "images/team/2024-2025/electrical.jpg" }
    ]
  }
];
