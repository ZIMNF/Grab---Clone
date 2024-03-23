/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

function Testi() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center pb-10 ">
        Testimonials <hr />
      </h1>

      <div className="flex flex-wrap justify-evenly gap-4 pb-5">
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
          <figure className="p-5">
            <Image src={require("../../public/t1.jpg")} alt="Shoes" className="rounded-full" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-xl font-bold">Michael Jayson A</h2>
            <div className="btn btn-neutral">⭐⭐⭐⭐🌠</div>
            <p>
              "Convenient way to get a ride" <br /> <br /> Overall: Grab helped me a lot with my delivery needs and grocery needs. You can focus on doing other things instead of going to the grocery or going out to take your parcels or
              takeout from a restaurant. If you have some money to spare and considering the transportation system here, you may want to just consider getting a ride from them rather than using the public transportation. Overall I recommend
              this app to others.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card card-compact w-72 bg-base-100 shadow-xl">
          <figure className="p-5">
            <Image src={require("../../public/t2.jpg")} alt="Shoes" className="rounded-full" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-xl font-bold">Kevin Liem</h2>
            <div className="btn btn-neutral">⭐⭐⭐⭐⭐</div>
            <p>
              "A great time saver for businesses"
              <br /> <br /> Pros: The grabexpress courier service is so convenient. Once we call a rider, he comes within half an hour, and the cost is reasonable. Best of all it saves us having to make a trip down to the courier shop.
              Cons: There aren't many other options like this in the market besides lalamove. As a result, we are basically locked in to whatever pricing they choose. Luckily it is affordable.{" "}
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
          <figure className="p-5">
            <Image src={require("../../public/t3.jpg")} alt="Shoes" className="rounded-full" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-xl font-bold">Keli D Taylor </h2>
            <div className="btn btn-neutral">⭐⭐⭐⭐⭐</div>
            <p>
              "employees are good to be true"
              <br /> <br /> Overall: I really love this app because it makes my life become easier when Im hungry or find a taxi I can easily use this app and also I always use grab when I want to order food and all i can say is that
              drivers are very responsible and also respectful{" "}
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testi;
