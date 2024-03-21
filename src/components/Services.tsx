/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="">
        <h1 className="text-xl md:text-2xl p-4 text-center">
          From essential services to earning opportunities.
          <br /> We're an all-in-one platform.
        </h1>
        <div className="p-4 ">
          {/* <h1 className="text-3xl text-center font-bold"> Services </h1> */}
          <br />
          <h2 className="text-2xl font-bold">
            Food <Image className="" src={require("../../public/m1.png")} alt="food" width={50} />
          </h2>
          <p>Have all your cravings delivered to your doorstep.</p>
          <hr />
          <h2 className="text-2xl font-bold">
            Mart <Image className="" src={require("../../public/m2.png")} alt="food" width={50} />
          </h2>
          <p>Find Everything you need-groceries and more.</p>
          <hr />
          <h2 className="text-2xl font-bold">
            Express <Image className="" src={require("../../public/m3.png")} alt="food" width={50} />
          </h2>
          <p>Send packages, documents, and beyond.</p>
          <hr />
          <h2 className="text-2xl font-bold">
            Jastip <Image className="" src={require("../../public/m4.png")} alt="food" width={50} />
          </h2>
          <p>Get everything you need, flexibly, everywhere.</p>
          <hr />
          <h2 className="text-2xl font-bold">
            Rides <Image className="" src={require("../../public/m5.png")} alt="food" width={50} />
          </h2>
          <p>Choose from a variety of vehicles to take you from A to B safely.</p>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Services;
