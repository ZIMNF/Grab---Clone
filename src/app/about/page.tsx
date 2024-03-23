import Image from "next/image";
import React from "react";

function Abot() {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <Image src={require("../../../public/s1.png")} alt="abot" width={800} className="h-auto rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">Charging forward together</h1>
            <p className="py-6">Guided by the Grab Way, our mission is to drive Southeast Asia forward by creating economic empowerment for everyone.</p>
            <hr />
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-wrap justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src={require("../../../public/s2.png")} alt="abot" width={400} className="h-auto rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-xl md:text-3xl font-bold pb-4">Millions of people use Grab for many moments in their everyday lives.</h1>
            <hr />
          </div>
        </div>
        <div className="hero-content flex-col lg:flex-row">
          <Image src={require("../../../public/s3.png")} alt="abot" width={500} className="h-auto rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-xl md:text-3xl font-bold pb-4">We hold ourselves responsible for the sustainable economic empowerment of this region.</h1>
            <hr />
          </div>
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src={require("../../../public/s4.png")} alt="abot" width={400} className="h-auto rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-xl md:text-3xl font-bold pb-4">Strong corporate governance principles help us stay true to our mission.</h1>
            <hr />
          </div>
        </div>
        <div className="hero-content flex-col lg:flex-row">
          <Image src={require("../../../public/s5.png")} alt="abot" width={500} className="h-auto rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-xl md:text-3xl font-bold pb-4">Grab Financial Group aims to improve economic mobility in Southeast Asia for everyone through financial inclusion.</h1>
            <hr />
          </div>
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src={require("../../../public/s6.png")} alt="abot" width={400} className="h-auto rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-xl md:text-3xl font-bold pb-4">As we grow to serve millions every day, so do our measures to ensure a secure marketplace everyone can thrive in.</h1>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Abot;
