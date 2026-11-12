/* =========================================================
   DATOS DEL EQUIPO  —  este es el archivo que editas cada curso.
   No hace falta tocar ningún otro archivo.

   Un bloque por curso, del más reciente al más antiguo.
   El primero de la lista se marca como "CURRENT TEAM".

     season    : texto del curso, p. ej. "2026/2027"
     teamPhoto : foto grande de todo el equipo
     photoPosition : opcional. Qué parte de la foto se ve en la cabecera:
                     "0%" arriba, "100%" abajo. Sin esta línea, "45%".
     departments:
        name        : nombre del departamento
        description : texto opcional bajo el título
        photo       : foto de grupo del departamento
        feature     : opcional. Cuadro de texto a la derecha de la foto,
                      con title (título) y text (párrafo), o con people:
                      una lista de { name, role } que se ve en letra grande

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
        name: "Team Leaders",
        description: "",
        photo: "images/team/2026-2027/team-leaders.jpg",
        feature: {
          people: [
            { name: "Maria", role: "Team Manager" },
            { name: "Arian", role: "Engineering Lead" }
          ]
        }
      },
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
        description: "",
        photo: "images/team/2026-2027/mechanical.jpg",
        feature: {
          title: "The Mechanical Team of DTU Float Forward!",
          text: "The Mechanical team is where engineering ideas take physical shape. Its mission is to improve the boat’s performance by making every component work smarter, lighter, and more efficiently. From developing the propulsion drivetrain and refining the propeller and gearbox to redesigning the steering system, the team works to achieve greater power, precision, and reliability on the water. It also tackles structural analysis and reinforcement, improves the rudder mount and its watertightness, and explores new cockpit designs that balance weight reduction, aerodynamics, and functionality. Through hands-on design, testing, and continuous improvement, the Mechanical team transforms concepts into robust solutions that help push the boat’s performance further."
        }
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
        description: "",
        photo: "images/team/2026-2027/electrical.jpg",
        feature: {
          title: "The Electrical Team of DTU Float Forward!",
          text: "The Electrical team powers the technology behind the boat, ensuring that its electrical and electronic systems work together as one reliable, high-performance platform. Its work spans motor electronics, inverter optimisation, battery-pack development, cooling systems, and improvements to overall reliability. Beyond the powertrain, the team designs onboard electronics and PCBs, develops firmware, integrates sensors, and builds the communication and telemetry systems needed to collect, transmit, and visualise data. It also oversees electrical system integration, wiring, and power budgeting, while exploring solar technologies and modelling their potential contribution to the boat’s performance. By combining hardware, software, and system-level engineering, the Electrical team helps deliver the power, monitoring, and reliability needed to perform on the water."
        }
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
    photoPosition: "20%",
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
