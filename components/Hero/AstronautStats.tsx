type Props = {
  language: "es" | "en" | "pt";
};

export default function AstronautStats({ language }: Props) {
  const translations = {
    en: {
      activeProjects: "Active Projects",
      techLabel: "Technologies",
    },
    es: {
      activeProjects: "Proyectos Activos",
      techLabel: "Tecnologías",
    },
    pt: {
      activeProjects: "Projetos Ativos",
      techLabel: "Tecnologias",
    },
  };

  const { activeProjects, techLabel } = translations[language];

  return (
    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-30">
      {/* Top-right: Active Projects */}
      <div className="flex justify-end pr-22 pt-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 shadow-md pointer-events-auto">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-xs">{activeProjects}</span>
          </div>
          <div className="text-white font-bold text-lg">5</div>
        </div>
      </div>

      {/* Bottom-left: Technologies */}
      <div className="flex justify-start pl-18 pb-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 shadow-md pointer-events-auto">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-white text-xs">{techLabel}</span>
          </div>
          <div className="text-white font-bold text-lg">10+</div>
        </div>
      </div>
    </div>
  );
}
