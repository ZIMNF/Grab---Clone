/* eslint-disable react/jsx-key */
import Image from "next/image";

async function getTeams() {
  const res = await fetch("https://fakestoreapi.com/users?limit=4");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function Teams() {
  const data = await getTeams();
  console.log(data);
  return (
    <>
      <h1 className="text-3xl pb-5 font-bold text-center pt-20">Teams</h1>
      <hr />
      <div className="py-16 text-center flex flex-wrap justify-evenly gap-4">
        {data.length > 0 &&
          data.map((data: any) => {
            return (
              <div className="flex flex-wrap justify-evenly gap-4 pb-5">
                <div className="card card-compact w-72 bg-base-100 shadow-xl">
                  <div key={data.id} className="">
                    <div className="m-5">
                      <figure className="p-5">
                        <Image src={require("../../../public/t4.jpg")} alt="Shoes" className="rounded-full" />
                      </figure>
                      <h2 className="text-center text-xl font-bold">{`${data.name.firstname} ${data.name.lastname}`} </h2>
                      <h2>📧 {data.email}</h2>
                      <h2>📞 {data.phone}</h2>
                      <h2>📍 {data.address.city}</h2>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Teams;
