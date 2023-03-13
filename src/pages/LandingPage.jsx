import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import college from '../assets/college.json';
import worried from '../assets/worried.json';
import frog from '../assets/frog.json';
import thinking from '../assets/thinking.json';
import connect from '../assets/connect.json';
import sun from '../assets/sun.jpg';
import moon from '../assets/moon.jpg';
import { Parallax } from 'react-parallax';

import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* home container */}
      <div className='home stickey flex flex-col w-[100%]'>
        <div className='entry w-full h-[90vh] bg-[#355C7D] flex flex-col items-center justify-center'>
          <h1 className='text-slate-100 text-xxxl'>Job-bie</h1>
          <h4 className='text-3xl text-slate-50 space-x-2'>Make it Easy</h4>

          <div className='mouse-container m-[2rem]'>
            <div className='mouse'>
              <span class='scroll-down'></span>
            </div>
          </div>
          <h4 className='text-2xl text-slate-50 space-x-2'>Scroll</h4>
        </div>

        <Parallax strength={600} bgImage={moon} blur={{ min: -1, max: 0 }}>
          <div className='wrapper1'>
            {/* first container */}
            <div
              className='first h-[80%] p-[1rem] w-[100%] flex items-center justify-center '
              data-aos='fade-up '
            >
              <div className='flex flex-col justify-end w-2/5 text-center'>
                <h1 className='uppercase text-3xl' data-aos='fade-up'>
                  Are you studying in college and not yet placed !!!
                </h1>
              </div>
              <div className='w-64 m-12'>
                <Lottie animationData={college} loop={true} />
              </div>
            </div>

            {/* second container */}
            <div
              className='second h-[80%]  p-[1rem] w-[80%] flex items-center justify-center '
              data-aos='fade-up '
            >
              <div className='w-64 m-12'>
                <Lottie animationData={worried} loop={true} />
              </div>
              <div className='uppercase text-3xl' data-aos='fade-up '>
                <h1>Worried about your Placements</h1>
              </div>
            </div>

            {/* third container */}
            <div
              className='third h-[80%]  p-[1rem] w-full flex flex-col items-center justify-center '
              data-aos='fade-up '
            >
              <Lottie
                id='frog'
                style={{
                  height: '30vh',
                  width: '20vw',
                }}
                animationData={frog}
              />
              <h1 className='text-3xl text-center w-full' data-aos='fade-up '>
                Tired of searching for suitable job roles and jumping platforms
                like a frog?
              </h1>
            </div>

            {/* text container */}
            <div className='text text-5xl w-[100%] h-[100%] text-center p-[5rem] mt-[5rem] flex items-center justify-center'>
              <h4 data-aos='fade-up '>Well not anymore....</h4>
            </div>
          </div>
        </Parallax>

        {/* fourth container */}
        <div
          className='fourth h-[11rem]  p-[10rem] w-full text-center bg-red-600 text-[#ffff] flex items-center justify-center flex-col  '
          data-aos='fade-up '
        >
          <h2 className='text-4xl  w-[100%] ' data-aos='fade-up '>
            Introducing
          </h2>
          <h2
            className='text-7xl font-bold w-[100%] pt-[2rem]'
            data-aos='fade-up'
          >
            Job-bie
          </h2>
        </div>

        <Parallax strength={600} bgImage={sun} blur={{ min: -1, max: 2 }}>
          <div className='wrapper2'>
            {/* fifth container */}
            <div className='fifth h-[80%] p-[1rem] w-[80%] flex items-center justify-center'>
              <div className='w-64 m-12'>
                <Lottie animationData={thinking} loop={true} />
              </div>
              <div className='flex flex-col justify-end w-50%'>
                <h1
                  className='text-3xl  w-[100%] uppercase text-center'
                  data-aos='fade-up'
                >
                  So what exactly is Job-bie?
                </h1>
              </div>
            </div>

            {/* sixth container */}
            <div className='sixth h-[80%] p-[1rem] w-[80%] flex items-center justify-center'>
              <div className='flex flex-col justify-end w-full text-start'>
                <h4 className='text-2xl  w-[100%] pt-4' data-aos='fade-left'>
                  Job-bie is all in one job portal which connects employer and
                  employee
                </h4>
                <h4 className='text-2xl w-[100%] pt-4' data-aos='fade-right'>
                  Handling complete process from interview to onbording
                </h4>
                <h4
                  className='text-2xl w-[100%]
                        pt-4'
                  data-aos='fade-left'
                >
                  In a nut shell Job-bie is
                </h4>
                <h4 className='text-2xl w-[100%] pt-4' data-aos='fade-right'>
                  One stop destination for all career needs
                </h4>
              </div>
              <div className='connect w-64 m-12'>
                <Lottie
                  animationData={connect}
                  loop={true}
                  style={{
                    width: '150%',
                    height: '150%',
                  }}
                />
              </div>
            </div>
            {/* text2 container */}
            <h2
              className='text2 text-5xl font-bold  w-[100%] text-center'
              data-aos='fade-up '
            >
              So what are you waiting for?
            </h2>

            {/* seventh container */}
            <div className='seventh h-[100%] p-[1rem] w-[80%] flex flex-col items-center justify-center mt-10 mb-10'>
              <div className='flex flex-col justify-end w-full text-center'>
                <h2
                  className='text-4xl font-bold w-[100%] pt-7 '
                  data-aos='fade-up'
                >
                  Apply to your dream job and get placed now
                </h2>
              </div>
              <div className='btn'>
                <button
                  className='w-[12rem] h-[4rem] bg-green-500 text-2xl mt-[3rem]  rounded-[1rem] text-center '
                  data-aos='fade-up'
                >
                  Sign up/Sign in
                </button>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
}

export default Home;
