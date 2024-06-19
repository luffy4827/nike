import { useState } from "react";
import { motion, spring } from "framer-motion";
import { shoes, statistics } from "../constants/index";
import Button from "../components/Button";
import ShoeCard from "../components/ShoesCard";
import { big1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(big1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <motion.div
        initial={{ x: -100, opacity: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 30 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28 z-20"
      >
        <p className="text-xl  text-coral-red">Our Summer collections</p>

        <h1 className="mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-20 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className=" text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="leading-7  text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: spring, stiffness: 30 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
