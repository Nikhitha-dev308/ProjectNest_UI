import React from 'react'
import Navbar from '../HomeScreen/Navbar'
import Footer from '../HomeScreen/Footer'

const Terms = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mx-auto px-6 py-10 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold text-[#0447a5] mb-6">Terms & Conditions</h1>

      <p className="mb-4">
        Welcome to <strong>Project Nest</strong>! By accessing or using our platform, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Purpose of Project Nest</h2>
      <p className="mb-4">
        Project Nest is a collaborative learning platform that connects <strong>students</strong> with <strong>industry experts</strong>. Our goal is to foster hands-on learning, mentorship, and real-world project development.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. User Eligibility</h2>
      <p className="mb-4">
        - Students must be currently enrolled in an academic institution or recent graduates. <br />
        - Experts must have verifiable industry experience and relevant technical knowledge.<br />
        - Users must be at least 16 years of age.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Account Responsibility</h2>
      <p className="mb-4">
        You are responsible for maintaining the confidentiality of your login credentials. You agree not to impersonate another user or share your credentials with others.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Code of Conduct</h2>
      <p className="mb-4">
        All users must:
        <ul className="list-disc list-inside ml-4">
          <li>Communicate respectfully and professionally.</li>
          <li>Not engage in plagiarism, cheating, or any form of academic dishonesty.</li>
          <li>Avoid using the platform for any illegal or unauthorized purpose.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Expert Verification</h2>
      <p className="mb-4">
        Experts may be required to provide proof of experience or portfolio links. Project Nest reserves the right to verify qualifications and deny access if standards are not met.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Data Usage & Privacy</h2>
      <p className="mb-4">
        We collect only necessary user data to operate the platform and improve your experience. We do not sell your data to third parties. For more details, refer to our Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">7. Project Ownership</h2>
      <p className="mb-4">
        All content created by students or experts on the platform remains their intellectual property unless clearly stated otherwise in project guidelines or collaborations.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">8. Termination of Access</h2>
      <p className="mb-4">
        Project Nest reserves the right to suspend or terminate user accounts that violate these terms, with or without prior notice.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">9. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms & Conditions periodically. Continued use of the platform after changes implies your acceptance of the updated terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">10. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns regarding these terms, feel free to reach out at <a href="mailto:support@projectnest.com" className="text-blue-600 underline">support@projectnest.com</a>.
      </p>

      <p className="mt-10 text-sm text-gray-500">
        Last Updated: April 2025
      </p>
    </div>
    <Footer/>
    </>
  )
}

export default Terms
