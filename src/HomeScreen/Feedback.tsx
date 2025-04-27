import React from 'react';

const testimonials = [
  {
    name: "Ananya R.",
    role: "Final Year CSE Student",
    message: "Thanks to Project Nest, I built a real-time ML app and landed an internship at a top tech company!",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rohit Kumar",
    role: "3rd Year ECE",
    message: "Collaborating with mentors helped me understand IoT systems deeply — I even presented at a tech fest!",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sana Fatima",
    role: "2nd Year AI & DS",
    message: "I used Project Nest to build my portfolio — it stood out during my internship interviews!",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];

const Feedback = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#033579] mb-12">Student Success Stories</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((student, index) => (
            <div key={index} className="bg-[#f9fbfd] rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
              <img
                src={student.img}
                alt={student.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-4">“{student.message}”</p>
              <h4 className="text-lg font-semibold text-[#033579]">{student.name}</h4>
              <p className="text-sm text-gray-500">{student.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
