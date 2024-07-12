import React from "react";

export const metadata = {
  title: "Projects",
  description: "My projects.",
};

/**
 * 项目列表
 */
const projects: {
  name: string;
  description: string;
  url: string;
  image: string;
}[] = [
  {
    name: "Fish's Blog",
    description: "一个帅气的博客系统",
    url: "https://www.zowlsat.com",
    image: "/images/logo.png",
  },
];

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-normal">
        My Projects
      </h1>

      <div className="grid sm:grid-cols-2 grid-cols-1">
        {projects.map((project) => (
          <a
            href={project.url}
            target="_blank"
            className="bg-slate-50 dark:bg-zinc-800 rounded-xl p-4 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors">
            <div className="flex items-center justify-start flex-col gap-4">
              <div className="w-full flex items-center gap-4">
                <img
                  className="w-14 h-14 rounded-full"
                  src={project.image}
                  alt="头像"
                />
                <span className="font-bold text-lg">{project.name}</span>
              </div>
              <p className="w-full text-gray-600 dark:text-gray-200">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
