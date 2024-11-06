import React from "react";

const Dome = () => {
  return (
    <div>
      <div>
        <h1 className="flex justify-center text-4xl mt-10 font-medium text-gray-700">
          22_DomePannawat GroupMatem : A / JSD8
        </h1>
      </div>

      <div>
        <div className="flex justify-center items-center mt-10">
          <img className="w-80" src="/dome.jpg" alt="Dome" />
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 mb-40">
        <div>
          <p className="flex justify-center items-center font-medium text-2xl text-gray-700">
            Short Biography:
          </p>
          <br />
          <p className="flex justify-center items-center text-center text-2xl text-gray-700">
            My nickname is Dome, or pen name DomePannawat. <br /> I simplify
            complex things constantly seek new challenges, and enjoy pushing my
            limits. <br /> My hobbies include coding, exploring new
            technologies, mindset development <br /> and following motorsports,
            especially Formula 1.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dome;
