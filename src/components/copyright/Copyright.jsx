import React from 'react';

const Copyright = () => {
  return (
    <section className="w-full py-4 text-orange-400 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Niko Pippuri. All rights reserved.
      </p>
    </section>
  );
};

export default Copyright;
