/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="">
        <h1 className="text-xl md:text-2xl p-4 text-center">
          From essential services to earning opportunities.
          <br /> We're an all-in-one platform.
        </h1>
        <br />
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          <div>
            <h2 className="text-2xl font-bold hover:font-extrabold">
              <Link href="/services">Food</Link>
              <Image className="flex justify-center align-middle" src={require("../../public/m1.png")} alt="food" width={50} />
            </h2>
            <p>Have all your cravings delivered to your doorstep.</p>
            <hr />
          </div>

          <div>
            <h2 className="text-2xl font-bold hover:font-extrabold">
              <Link href="/services">Mart</Link> <Image className="" src={require("../../public/m2.png")} alt="food" width={50} />
            </h2>
            <p>Find Everything you need-groceries and more.</p>
            <hr />
          </div>
          <div>
            <h2 className="text-2xl font-bold hover:font-extrabold">
              <Link href="/services">Express</Link> <Image className="" src={require("../../public/m3.png")} alt="food" width={50} />
            </h2>
            <p>Send packages, documents, and beyond.</p>
            <hr />
          </div>
          <div>
            <h2 className="text-2xl font-bold hover:font-extrabold">
              <Link href="/services">Jastip</Link> <Image className="" src={require("../../public/m4.png")} alt="food" width={50} />
            </h2>
            <p>Get everything you need, flexibly, everywhere.</p>
            <hr />
          </div>
          <div>
            <h2 className="text-2xl font-bold hover:font-extrabold">
              <Link href="/services">Rides</Link> <Image className="" src={require("../../public/m5.png")} alt="food" width={50} />
            </h2>
            <p>Choose from a variety of vehicles to take you from A to B safely.</p>
            <hr />
          </div>
          <div>
            <h2 className="text-2xl font-bold hover:font-extrabold">
              <Link href="/services">Pay</Link> <Image className="" src={require("../../public/m6.png")} alt="food" width={50} />
            </h2>
            <p>Secure and seamless cashless payments, online and in-store.</p>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
