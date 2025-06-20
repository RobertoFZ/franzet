import { getAnimationDelay } from "@/utils/animations";

interface ProjectsSectionProps {
  contentLoaded: boolean;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export default function ProjectsSection({ }: ProjectsSectionProps) {
  const projects: Project[] = [
    {
      title: "Zinual",
      description: "A comprehensive financial management application that prioritizes your privacy and data control. Features advanced budget management, debt tracking, vehicle expense monitoring, and actionable financial insights—all while keeping your sensitive financial data completely private with local storage and no third-party access.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
      featured: true,
      liveUrl: "https://zinual.com"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto mt-20 sm:mt-24 md:mt-32">
      {/* Product Stats & CTA */}
      <div 
        className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100 mb-12 transition-opacity duration-700"
        style={getAnimationDelay(0.4)}
      >
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Product Count */}
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[#ff4d6d] mb-2">1</div>
              <div className="text-gray-600 font-medium">Live Product</div>
            </div>
            
            {/* Main Message */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Built with Purpose</h2>
              <p className="text-gray-600">Creating solutions that solve real problems and deliver genuine value to users.</p>
            </div>
            
            {/* CTA */}
            <div>
              <a
                href="https://zinual.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ff4d6d] hover:bg-[#e63c5e] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Try Zinual Free
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group max-w-2xl mx-auto"
            style={getAnimationDelay(0.6 + index * 0.1)}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold leading-tight group-hover:text-[#ff4d6d] transition-colors duration-300">
                {project.title}
              </h3>
              {project.featured && (
                <span className="bg-[#ff4d6d] text-white text-xs px-2 py-1 rounded-full font-medium">
                  Featured
                </span>
              )}
            </div>
            
            <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#ff4d6d] hover:text-[#e63c5e] font-medium text-sm transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                  Go to app
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 