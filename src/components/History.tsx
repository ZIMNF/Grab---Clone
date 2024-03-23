import Image from "next/image";
import Link from "next/link";

function History() {
  return (
    <div>
      <div className="hero min-h-screen pt-16">
        <div className="hero-content flex-col lg:flex-row">
          <Image src={require("../../public/h1.png")} alt="abot" width={700} className="h-auto rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">
              <Link href="/about">A letter from Anthony and Hooi Ling </Link>
            </h1>
            <p className="py-6">
              We started off as a ride-hailing company, helping drivers earn a livelihood, only to open our eyes and see the millions of everyday entrepreneurs: the tuk tuk driver in Phnom Penh, the wet market fishmonger, the Chinatown
              chicken rice seller we’ve known for the past 20 years. <br />
              <br /> With the Grab Way as our compass, we have not only helped them increase their earnings, but enabled them to earn a living in a way that better supported their life choices and aspirations; be it to spend more time with
              family, to be their own boss and can control their own destiny, or to give them a platform that opens up new opportunities of growth. This is more than just making an income. This is economic empowerment. <br />
              <br /> While we’ve already had an impact on this community, we still have a long way to go. First, while we’ve made some progress helping segments of everyday entrepreneurs find a gainful living, many still live hand to mouth
              and haven’t built up any financial cushion to absorb economic shocks which are bound to come. <br />
              <br /> So for now and for as long as the above continues to hold true, Grab’s mission is to drive Southeast Asia forward by creating economic empowerment for everyone—because everyone should have the option to pursue economic
              progress for themselves. <br /> <br />
              Anthony and Hooi Ling
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
