import React from 'react';

const projects = [
  {
    title: "AI-Based Attendance System",
    tags: ["#AI", "#FaceRecognition"],
    description: "A facial recognition system to automate student attendance in classrooms.",
    status: "Open",
  },
  {
    title: "Smart Irrigation System",
    tags: ["#IoT", "#AgriTech"],
    description: "Uses soil sensors and microcontrollers to automate irrigation.",
    status: "Closed",
  },
  {
    title: "College Event Portal",
    tags: ["#WebDev", "#FullStack"],
    description: "An event management portal for colleges with role-based login.",
    status: "Open",
  },
  {
    title: "E-Learning Platform",
    tags: ["#EdTech", "#WebApp"],
    description: "Online learning platform with quizzes, leaderboards, and expert sessions.",
    status: "Open",
  },
  {
    title: "Campus Chat App",
    tags: ["#ReactNative", "#RealTime"],
    description: "A real-time chat app for students and faculty to communicate securely.",
    status: "Open",
  },
  {
    title: "Blockchain Voting System",
    tags: ["#Blockchain", "#Security"],
    description: "A decentralized and secure online voting system for colleges.",
    status: "Closed",
  },

];

const ProjectCard = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#033579] mb-10">Popular Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 text-left"
            >
              <h3 className="text-xl font-semibold text-[#033579] mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <span
                className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                  project.status === "Open"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
