"use client" 
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const VideoPlayer = ({ src, type, controls = false, autoplay = true, loop = true, muted = true }) => {
    return (
      <div className="relative h-[60vh] md:h-[80vh] lg:h-[100vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          controls={controls}
          autoPlay={autoplay}
          loop={loop}
          muted={muted}
        >
          <source src={src} type={type} />
          
        </video>
        <div className="absolute font-semibold text-[#E5B80B]  top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-8xl ">Welcome to My</h1>
          <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-8xl "> 
          <Typewriter
            words={['Portfolio Web']}
            loop={1}
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={1000}
          />
          </h1>
        </div>

        <div className='absolute hidden md:block right-20 bottom-28'>
         <svg xmlns="http://www.w3.org/2000/svg" width="103" height="94" fill="none" viewBox="0 0 103 94"><path class="ScrollArrow_arrow__BVESl " fill="url(#paint0_linear_476_1366)" d="M50.54 54.46a.65.65 0 00.92 0l4.136-4.137a.65.65 0 00-.919-.92L51 53.082l-3.677-3.677a.65.65 0 00-.92.919l4.137 4.137zM50.35 0v54h1.3V0h-1.3z"></path><path fill="url(#paint1_linear_476_1366)" d="M3.465 90.154a3.62 3.62 0 01-1.474-.286 2.325 2.325 0 01-1.023-.891c-.25-.403-.374-.913-.374-1.529v-.209h.704v.209c0 .711.202 1.24.605 1.584.41.337.931.506 1.562.506.638 0 1.13-.147 1.474-.44.345-.3.517-.682.517-1.144 0-.308-.077-.554-.231-.737a1.46 1.46 0 00-.627-.451 5.677 5.677 0 00-.924-.308l-.704-.176a6.074 6.074 0 01-1.122-.407 2.145 2.145 0 01-.781-.649c-.19-.271-.286-.616-.286-1.034 0-.418.106-.781.319-1.089.22-.308.52-.543.902-.704.381-.169.825-.253 1.331-.253s.96.088 1.364.264c.41.176.733.436.968.781.242.337.363.763.363 1.276v.517h-.704v-.517c0-.403-.088-.73-.264-.979a1.535 1.535 0 00-.715-.55 2.765 2.765 0 00-1.012-.176c-.535 0-.979.125-1.331.374-.345.242-.517.594-.517 1.056 0 .308.07.554.209.737.147.183.348.33.605.44.264.11.572.209.924.297l.704.176a5.5 5.5 0 011.111.385c.337.154.609.37.814.649.205.271.308.63.308 1.078 0 .447-.114.836-.341 1.166a2.17 2.17 0 01-.935.77c-.403.176-.876.264-1.419.264zm19.472 0c-.902 0-1.624-.264-2.167-.792-.535-.535-.803-1.316-.803-2.343v-1.738c0-1.027.268-1.804.803-2.332.543-.535 1.265-.803 2.167-.803.895 0 1.577.253 2.046.759.477.499.715 1.18.715 2.046v.055h-.704v-.077c0-.63-.168-1.144-.506-1.54-.33-.403-.847-.605-1.55-.605-.712 0-1.27.216-1.673.649-.396.433-.594 1.041-.594 1.826v1.782c0 .785.198 1.393.594 1.826.404.433.961.649 1.672.649.704 0 1.221-.198 1.551-.594.338-.403.506-.92.506-1.551v-.165h.704v.143c0 .865-.238 1.551-.715 2.057-.469.499-1.151.748-2.046.748zM39.741 90v-7.7h3.014c.477 0 .895.08 1.254.242.367.161.653.396.858.704.213.3.32.667.32 1.1v.11c0 .52-.125.931-.375 1.232-.25.293-.542.488-.88.583v.132a.996.996 0 01.65.242c.175.154.263.4.263.737V90h-.704v-2.541c0-.235-.066-.414-.198-.539-.124-.125-.315-.187-.572-.187h-2.926V90h-.704zm.704-3.905h2.244c.572 0 1.012-.132 1.32-.396.316-.271.473-.656.473-1.155v-.055c0-.499-.154-.88-.462-1.144-.3-.271-.744-.407-1.33-.407h-2.245v3.157zm21.438 4.059c-.902 0-1.621-.264-2.156-.792-.536-.535-.803-1.316-.803-2.343v-1.738c0-1.027.267-1.804.803-2.332.535-.535 1.254-.803 2.156-.803.902 0 1.62.268 2.156.803.535.528.803 1.305.803 2.332v1.738c0 1.027-.268 1.808-.803 2.343-.536.528-1.254.792-2.156.792zm0-.638c.718 0 1.272-.216 1.66-.649.397-.433.595-1.041.595-1.826v-1.782c0-.785-.198-1.393-.594-1.826-.389-.433-.943-.649-1.661-.649-.712 0-1.265.216-1.661.649-.396.433-.594 1.041-.594 1.826v1.782c0 .785.198 1.393.594 1.826.396.433.95.649 1.66.649zM78.977 90v-7.7h.704v7.062h4.048V90h-4.752zm18.5 0v-7.7h.704v7.062h4.048V90h-4.752z"></path><defs><linearGradient id="paint0_linear_476_1366" x1="51.153" x2="44.74" y1="10.64" y2="11.525" gradientUnits="userSpaceOnUse"><stop stop-color="#ffcc00"></stop><stop offset="1" stop-color="#ffcc00"></stop></linearGradient><linearGradient id="paint1_linear_476_1366" x1="20.294" x2="69.143" y1="76.701" y2="121.688" gradientUnits="userSpaceOnUse"><stop stop-color="#ffcc00"></stop><stop offset="1" stop-color="#ffcc00"></stop></linearGradient></defs></svg>
        </div>
      </div>
    );
  };

export default VideoPlayer;