import React from 'react';

const HeroBackground = () => {
  return (
    <div
      className="relative w-52 h-52 bg-cover bg-center border-2 border-black rounded-full flex items-center justify-center gap-4 mt-6"
      style={{ backgroundImage: "url('https://media.licdn.com/dms/image/v2/D4D03AQEKGR7ewt16Fg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709836549235?e=1746057600&v=beta&t=Mdd3vhwVCLg9C--q62WlVmuyfb5rfXPlxC51Yk-rZcA')" }}
    />
  );
};

export default HeroBackground;
