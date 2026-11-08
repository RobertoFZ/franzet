export const cases = [
  {
    slug: "robertito-dashboard",
    name: "Robertito Dashboard",
    category: "Integración de herramientas",
    description:
      "Una vista operativa para sesiones de agentes, tickets y revisiones de código.",
    tags: ["Agentes", "GitHub", "Linear"],
    focus: "agents",
    diagram: "dashboard",
    sections: [
      {
        label: "El problema",
        title: "Entender qué está pasando.",
        text: "El trabajo con agentes distribuye el contexto entre sesiones, tickets y pull requests. El panel reúne esas fuentes para facilitar su consulta.",
      },
      {
        label: "Las decisiones",
        title: "Conectar sin inventar estados.",
        text: "El proyecto integra sesiones de Paseo, información de Linear y revisiones de GitHub. Distingue datos disponibles, errores y estados desconocidos, y mantiene una vista separada para operaciones de Factory.",
      },
      {
        label: "Lo que podemos trabajar",
        title: "Tu propia vista operativa.",
        text: "Qué necesitas observar, qué fuentes ya tienes y qué información te permitiría decidir mejor. El punto de partida es tu proceso.",
      },
    ],
  },
  {
    slug: "software-factory",
    name: "Software Factory",
    category: "Flujos supervisados con IA",
    description:
      "Coordinación de tareas de ingeniería con agentes, validaciones y puntos de aprobación.",
    tags: ["Orquestación", "Revisión", "Supervisión"],
    focus: "agents",
    diagram: "factory",
    sections: [
      {
        label: "El problema",
        title: "Delegar una tarea con alcance claro.",
        text: "Trabajar con agentes requiere definir qué pueden hacer, qué contexto necesitan y qué debe verificarse antes de continuar.",
      },
      {
        label: "Las decisiones",
        title: "Supervisión en cada decisión importante.",
        text: "El flujo conserva registros de ejecución, revisiones y validaciones. Los pilotos supervisados permiten observar sus límites y diseñar recuperación cuando una etapa no termina como se esperaba.",
      },
      {
        label: "Lo que podemos trabajar",
        title: "Un primer flujo para tu proyecto.",
        text: "Elegimos una tarea acotada, definimos las instrucciones para el agente y acordamos las comprobaciones y decisiones humanas que necesita.",
      },
    ],
  },
  {
    slug: "zinual",
    name: "Zinual",
    category: "Desarrollo de producto",
    description:
      "Una aplicación de gestión financiera para organizar presupuestos, deudas y gastos.",
    tags: ["Producto web", "Next.js", "TypeScript"],
    focus: "decision",
    diagram: null,
    sections: [
      {
        label: "El producto",
        title: "Construir alrededor de un problema.",
        text: "Zinual reúne herramientas de organización financiera en una aplicación web. Es un caso para conversar sobre alcance, prioridades y decisiones de desarrollo de producto.",
      },
      {
        label: "Lo que podemos trabajar",
        title: "El siguiente paso de tu aplicación.",
        text: "Revisamos lo que ya tienes, la necesidad que quieres atender y las alternativas para avanzar con un alcance manejable.",
      },
    ],
  },
] as const;
