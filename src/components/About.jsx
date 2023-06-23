import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-4">
          Saya merupakan lulusan S1 Ekonomi dengan IPK 3.74. Saya Merupakan lulusan Bootcamp dari My Skill dan Coding Studio. Saya sebagai Front-end Development menguasai HTML,CSS, JavaScript. FrameWork CSS seperti Vanila CSS, Tailwinds,
          dan Bootstrap. Memahami Framework JavaScript seperti ReactJS dan jQuery. dan Saya sebagai Back-end Development menguasai Node JS dan menggunakan database seperti Postgresql, MongoDB, dan mySQL.Saya merupakan seorang yang energetik
          dan ambisius. Aktif dalam berbagai Event Internal Kampus ataupun external kampus. Memiliki ketertarikan di bidang akuntansi, Administrasi, Perbankan, dan IT. Andal menjalankan software accounting, Administrasi,Perbankan, dan IT.
          Mahir problem solving dan berpikir kritis.
        </p>
      </div>
    </div>
  );
};

export default About;
