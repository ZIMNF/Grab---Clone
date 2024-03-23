async function getTeams() {
  const res = await fetch("https://fakestoreapi.com/users?limit=5");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function Teams() {
  const data = await getTeams();
  console.log(data);
  return (
    <div className="pt-20 text-center">
      <h1 className="text-3xl pb-10">Teams</h1>
      {data.length > 0 &&
        data.map((data: any) => {
          return (
            <div key={data.id} className="">
              <div className="m-5">
                <h1>👤 {`${data.name.firstname} ${data.name.lastname}`}</h1>
                <h2>📧 {data.email}</h2>
                <h2>📞 {data.phone}</h2>
                <h2>📍 {data.address.city}</h2>
                <hr />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Teams;
