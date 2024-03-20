const Video = () => {
  return (
    <>
      <div className="h-auto md:h-[85vh] w-auto flex justify-center pb-3 pt-20">
        <video src={require("../../public/video.mp4")} autoPlay loop muted className="rounded-md" />
        {/* <div className="gr21-boxed-content"></div> */}
      </div>
      <h1 className="text-3xl md:text-5xl text-center pb-4">
        Grab. Making <br /> Everyday better.
      </h1>
      <hr />
    </>
  );
};

export default Video;
