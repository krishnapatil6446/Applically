'use client';

import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-500 mb-4">Applically AI – Your Trusted Partner for Campus Placements</h1>
        <p className="mb-6">We transform student potential into professional excellence.</p>

        <h2 className="text-2xl font-semibold text-blue-400 mb-2">Mission</h2>
        <p className="mb-6">Our mission is to cultivate problem-solving abilities, creativity, and effective communication through world-class AI innovative interview strategies.</p>

        <h2 className="text-2xl font-semibold text-blue-400 mb-2">Vision</h2>
        <p className="mb-6">Empower students to prepare their critical thinking and enhance cognitive index to achieve the best campus placements in today’s professional landscape.</p>

        <h2 className="text-2xl font-semibold text-blue-400 mb-2">TruSkill AI Resume Maker</h2>
        <p className="mb-4">Fact - Recruiters spend an average of 10 seconds reviewing a resume. Even the average ATS score is as low as 50-55.</p>
        <p className="mb-6">Top MNCs do not review your resume manually. The higher the ATS score of your resume, the higher the chance of recruitment. The resume is the most vital part of the professional world. Our AI Resume Maker will help you achieve an ATS score of 80+ within seconds. We curate your resume and align it with specific job requirements to enhance your job application success rate. We ensure to provide high ATS score resumes with customized formats to stand out in job applications and capture recruiter attention.</p>

        <ul className="list-disc list-inside mb-6">
          <li>Generate a professional, job-specific resume in under a minute.</li>
          <li>Choose from a variety of industry-standard templates.</li>
          <li>Create unlimited resumes for different job applications.</li>
          <li>Download your resume in multiple formats (PDF).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-400 mb-2">AI-Enabled Real Mock Interview</h2>
        <p className="mb-4">Fact - 70%: The best way to prepare for an interview is to practice, practice, practice.</p>
        <p className="mb-6">With our AI-powered mock interviews, we provide diverse and realistic interview simulations along with an interview preparation platform. With an adaptive mock interview platform, it will help students work on their soft skills through regular feedback-driven interview training. Students will build their confidence through practice interviews and refine their answers for better interview outcomes.</p>

        <ul className="list-disc list-inside mb-6">
          <li>Experience realistic interview scenarios tailored to your profile and job requirements.</li>
          <li>Receive instant feedback and ratings on your answers and overall performance.</li>
          <li>Practice with a diverse range of interviews.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-400 mb-2">College Assistance Module (For Institute Use)</h2>
        <p className="mb-4">Fact - Institutions using data-driven analytics see a 45% increase in student success rates.</p>
        <p className="mb-6">This function enables institutes to offer personalized support and guidance to their students. It allows institutes to provide detailed reports, efficient batch management, and performance tracking. Educators can obtain valuable insights into student progress and customize their teaching for the best results.</p>

        <ul className="list-disc list-inside mb-6">
          <li>Generate individual student reports that include detailed performance data.</li>
          <li>Analyze the overall performance of the class across various test series.</li>
          <li>Create thorough college-wide reports with just one click.</li>
          <li>Efficiently assign students to different batches and make adjustments based on their performance.</li>
          <li>Simplify student management tasks to enhance efficiency.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;