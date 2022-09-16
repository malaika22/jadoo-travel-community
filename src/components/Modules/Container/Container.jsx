import React from "react";

const Container = ({ children }) => {
  return (
    <div className='container overflow-hidden mx-auto px-2  sm:px-6 h-full'>
      {children}
    </div>
  );
};

export default Container;
