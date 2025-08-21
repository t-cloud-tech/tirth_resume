import React from 'react';

export default function ResumeWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Tirth Patel</h1>
        <p className="mt-2">📞 +971 562835254 | ✉️ <a href="mailto:ttirthupatel5@gmail.com" className="text-blue-600">ttirthupatel5@gmail.com</a></p>
        <a href="https://www.linkedin.com/in/tirth-patel-24a70426a" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">LinkedIn Profile</a>

        {/* Download Resume Button */}
        <div className="mt-4">
          <a
            href="/Tirth_Patel_Resume_OnePage.pdf"
            download
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            📄 Download Resume
          </a>
        </div>
      </header>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <aside className="col-span-1 space-y-6">
          {/* About Me */}
          <section>
            <h2 className="text-lg font-semibold border-b-2 border-blue-400 pb-1 mb-2">About Me</h2>
            <p>
              Motivated IT professional specializing in <b>Cloud Computing</b> and <b>Web Development</b>. Skilled in designing
              scalable architectures, building responsive applications, and delivering innovative solutions. Currently pursuing an
              <b> MBA in Management Information Systems (MIS)</b> to combine technical expertise with business strategy.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-lg font-semibold border-b-2 border-blue-400 pb-1 mb-2">Skills</h2>
            <ul className="list-disc ml-6 text-sm">
              <li><b>Cloud & DevOps:</b> AWS, Docker, Jenkins</li>
              <li><b>Web:</b> MERN, REST APIs, UI/UX</li>
              <li><b>Languages:</b> Java, C++, SQL, JavaScript</li>
              <li><b>Tools:</b> Git, Firebase</li>
              <li><b>Soft Skills:</b> Leadership, Communication, Time Management</li>
            </ul>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-lg font-semibold border-b-2 border-blue-400 pb-1 mb-2">Certifications</h2>
            <ul className="list-disc ml-6 text-sm">
              <li>AWS Solutions Architecture Simulation</li>
              <li>Cybersecurity – ADBI Institute</li>
              <li>AWS Workshops & Hackathons</li>
              <li>Volunteer – Coding Ninjas Events</li>
            </ul>
          </section>
        </aside>

        {/* Right Column */}
        <main className="col-span-2 space-y-6">
          {/* Education */}
          <section>
            <h2 className="text-lg font-semibold border-b-2 border-blue-400 pb-1 mb-2">Education</h2>
            <ul className="list-disc ml-6">
              <li><b>MBA in Management Information Systems (MIS)</b> – Quantum University, Dubai, UAE (2025 – 2027)</li>
              <li><b>B.Tech in Information Technology</b> – Devang Patel Institute of Advance Technology & Research, Gujarat (2021 – 2025) | CGPA: 7.7</li>
            </ul>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-lg font-semibold border-b-2 border-blue-400 pb-1 mb-2">Experience</h2>
            <div className="mb-4">
              <h3 className="font-bold">Cloud Developer Intern – Agevole Innovation (Jan 2025 – Jun 2025)</h3>
              <ul className="list-disc ml-6">
                <li>Implemented AWS solutions (EC2, S3, Lambda, EKS, App Runner, CloudWatch).</li>
                <li>Contributed to cloud migration strategies.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Web Developer Intern – Amphy Technolabs (Apr 2024 – Jun 2024)</h3>
              <ul className="list-disc ml-6">
                <li>Built responsive web apps with React, Tailwind CSS, and MongoDB.</li>
                <li>Integrated REST APIs to enhance functionality.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Android Developer Intern – Escrow Infotech (May 2023 – Jun 2023)</h3>
              <ul className="list-disc ml-6">
                <li>Developed Android apps in Kotlin with engaging UI.</li>
                <li>Worked on a Music Player Application.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-lg font-semibold border-b-2 border-blue-400 pb-1 mb-2">Projects & Research</h2>
            <ul className="list-disc ml-6">
              <li>Research Paper – "Navigating the Cloudscape" (ICICIT 2024)</li>
              <li>Job Portal Website – React & Tailwind CSS with role-based access control</li>
              <li>TweetStream – A social media app with real-time posting & Firestore integration</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
