import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen noisy flex justify-center items-center z-50 transition-opacity duration-500">
      <div className="text-center text-white">
        <div className="mb-8 animate-[fadeInUp_1s_ease-out]">
          <img 
            src="/images/logo.png" 
            alt="Velvet Pour" 
            className="w-20 h-20 object-contain mx-auto drop-shadow-lg"
          />
        </div>
        
        <div className="animate-[fadeInUp_1s_ease-out_0.3s_both]">
          <h2 className="text-3xl font-light mb-8 tracking-wider text-white">
            Velvet Pour
          </h2>
        </div>
        
        <div className="my-8 animate-[fadeInUp_1s_ease-out_0.6s_both]">
          <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full mx-auto animate-spin"></div>
        </div>
        
        <div className="flex justify-center gap-2 mt-4 animate-[fadeInUp_1s_ease-out_0.9s_both]">
          <span className="w-2 h-2 bg-white rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></span>
          <span className="w-2 h-2 bg-white rounded-full animate-[pulse_1.5s_ease-in-out_infinite_0.2s]"></span>
          <span className="w-2 h-2 bg-white rounded-full animate-[pulse_1.5s_ease-in-out_infinite_0.4s]"></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;