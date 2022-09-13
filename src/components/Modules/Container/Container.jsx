import React from "react";

const Container = ({ children }) => {
  return (
    <div className='container mx-auto px-2 overflow-hidden sm:px-6 h-full'>
      {children}
    </div>
  );
};

export default Container;
