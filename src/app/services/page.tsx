import Image from "next/image";
import React from "react";

function Services() {
  return (
    <>
      <div className="hero min-h-screen pt-16">
        <div className="hero-content flex-col lg:flex-row">
          <Image src={require("../../../public/a1.png")} alt="abot" width={800} className="h-auto rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Order Food From Restaurants Near You</h1>
            <p className="py-6">Order your favourite foods from restaurants near you. Fast, easy and convenience online food delivery service at your fingertips avilable 24/7 to satisfied your cravings.</p>
            <hr />
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-wrap justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src={require("../../../public/a2.png")} alt="abot" width={400} className="h-auto rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold pb-4">Grocery shopping has never been easier</h1>
            <p className="py-6">Online grocery shopping at your convenience. Choose from minimarket or supermarket near you and get your orders delivered within the hour, or schedule a delivery at your convenience.</p>
            <hr />
          </div>
        </div>
        <div className="hero-content flex-col lg:flex-row">
          <Image src={require("../../../public/a3.png")} alt="abot" width={400} className="h-auto rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold pb-4">Same Day Delivery Service You Can Count On</h1>
            <p className="py-6">
              Safe, affordable and fast delivery service at your fingertips. GrabExpress is an on-demand delivery service with live GPS tracking that helps you to send documents, items, and more. Choose from instant or same day delivery.
            </p>
            <hr />
          </div>
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src={require("../../../public/a4.png")} alt="abot" width={400} className="h-auto rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold pb-4">Ask drivers to help you buy goods</h1>
            <p className="py-6">GrabJastip is an on-demand service that lets you engage a Grab driver-partner to buy goods on your behalf and have them delivered to your chosen destination.</p>
            <hr />
          </div>
        </div>
        <div className="hero-content flex-col lg:flex-row">
          <Image src={require("../../../public/a5.png")} alt="abot" width={400} className="h-auto rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold pb-4">Going somewhere? Let our reliable taxi service transport you there</h1>
            <p className="py-6">Grab rides connect millions of passengers with private hire, taxi, and coach drivers.</p>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
