import React from 'react'
import Footer from './Footer'
import { FaChalkboardTeacher, FaUsers, FaLightbulb, FaAward } from 'react-icons/fa';
import { FaCode, FaEdit, FaFileAlt, FaVideo, FaMoneyBillWave } from 'react-icons/fa';
import { FaCheckCircle, FaIdCard, FaUserAlt, FaClipboardList } from 'react-icons/fa'
import Navbar from './Navbar';
import { Link } from 'react-router';


const Home = () => {
  const becomeExpert = [
    {
      icon: <FaChalkboardTeacher size={40} className="text-blue-600 mb-4" />,
      title: 'Share Your Knowledge',
      description: 'Mentor students and shape the future with your real-world experience.'
    },
    {
      icon: <FaUsers size={40} className="text-green-600 mb-4" />,
      title: 'Build Your Network',
      description: 'Connect with bright minds and industry peers from various domains.'
    },
    {
      icon: <FaLightbulb size={40} className="text-yellow-500 mb-4" />,
      title: 'Inspire Innovators',
      description: 'Guide young talent and ignite the next wave of innovation.'
    },
    {
      icon: <FaAward size={40} className="text-purple-600 mb-4" />,
      title: 'Earn Recognition',
      description: 'Get featured, gain credibility, and receive potential incentives.'
    }
  ]

  const expertFlow = [
    {
      icon: <FaLightbulb className="text-indigo-500 text-3xl" />,
      title: 'Receive Project Ideas from Students',
      desc: 'Students submit their innovative ideas. You pick the ones that align with your skills or interest.'
    },
    {
      icon: <FaCode className="text-blue-500 text-3xl" />,
      title: 'Develop the Project',
      desc: 'Build the complete project from scratch based on the student’s concept using best practices.'
    },
    {
      icon: <FaEdit className="text-orange-500 text-3xl" />,
      title: 'Refine Based on Student Feedback',
      desc: 'Make modifications or improvements based on discussions and feedback from students.'
    },
    {
      icon: <FaFileAlt className="text-green-500 text-3xl" />,
      title: 'Provide Detailed Documentation',
      desc: 'Write clear, structured documentation that explains how the project works, step-by-step.'
    },
    {
      icon: <FaVideo className="text-pink-500 text-3xl" />,
      title: 'Create Video Resources',
      desc: 'Record short walkthrough videos explaining how to run, understand, and present the project.'
    },
    {
      icon: <FaMoneyBillWave className="text-emerald-500 text-3xl" />,
      title: 'Earn for Your Contribution',
      desc: 'Get paid once the project and its materials are reviewed and approved by the student.'
    }
  ]

  const applicationSteps = [
    {
      icon: <FaIdCard className="text-blue-600 text-3xl" />,
      title: 'Step 1: Sign Up',
      description: 'Sign up to join as an expert. Tell us about your skills and expertise.'
    },
    {
      icon: <FaUserAlt className="text-green-600 text-3xl" />,
      title: 'Step 2: Get Verified',
      description: 'We’ll review your profile and verify your credentials. Once confirmed, you’ll be ready to start.'
    },
    {
      icon: <FaClipboardList className="text-yellow-500 text-3xl" />,
      title: 'Step 3: Start Mentoring',
      description: 'Once verified, you can start engaging with students, reviewing their projects, and sharing your knowledge.'
    },
    {
      icon: <FaCheckCircle className="text-emerald-500 text-3xl" />,
      title: 'Step 4: Get Paid',
      description: 'Earn money for every project you mentor. You’ll receive compensation after project submission and feedback.'
    }
  ]


  return (
    <>
      <Navbar />
      <div className="relative bg-cover bg-center bg-no-repeat text-white font-medium py-64 px-10"
        style={{ backgroundImage: "url('/images/background image.png')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Text content on top of overlay */}
        <div className="relative z-10">
          <p className="text-center text-4xl max-w-4xl mx-auto">
            "Empower. Connect. Thrive – Join Project Nest, Where Expertise Builds the Future."
          </p>
        </div>
      </div>


      {/* why become an expert */}

      <div className="py-15 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">Why Become an Expert?</h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
          {becomeExpert.map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
              <div className="flex justify-center">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">What Experts Are Saying</h3>
          <p className="text-lg italic text-gray-700 mb-6">
            “Being part of Project Nest has been a game-changer. I’ve met passionate students and contributed to meaningful projects.”
          </p>
          <p className="font-semibold text-gray-800">– Dr. Aditi Verma, AI Researcher</p>
        </div>
      </div>

      {/* what to do as an expert */}

      <div className="py-15 px-6 bg-gray-200 ">
        <h2 className="text-4xl font-bold text-center mb-12">What You Can Do as an Expert</h2>

        <div className="max-w-5xl mx-auto relative border-l-4 border-gray-500 pl-8 space-y-12">
          {expertFlow.map((step, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-5 top-2.5 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>

              {/* Step content */}
              <div className="flex items-center gap-5">
                <div className="mt-1">{step.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-600 mt-1">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">Become an Expert: Simple 4-Step Process</h2>

        <div className="max-w-4xl mx-auto space-y-16">
          {applicationSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-6">
              {/* Step icon */}
              <div className="bg-white p-4 rounded-full shadow-lg flex items-center justify-center">
                {step.icon}
              </div>

              {/* Step content */}
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to='/expert/signup'><button className=" cursor-pointer px-8 py-3 text-white bg-blue-600 rounded-lg text-xl hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
          </Link>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Home
