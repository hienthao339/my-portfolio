import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full py-10">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* About */}
          <div className="mb-2 flex flex-col text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-white/80 ">Frontend Developer</span>
            <h1 className="xl:text-[56px] text-[48px] font-bold mb-4 mt-2">
              Hello I’m <br />
              <span className="text-accent">Tran Hien Thao</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">
              I excel at crafting elegant product designs and strive for
              proficiency in diverse technologies to enhance your digital
              experiences.
            </p>

            {/* Contact */}
            <div className="flex flex-col xl:flex-row items-center gap-8 xl:mb-0 mb-10">
              {/* Button */}
              <div>
                <Button variant="outline" size="lg">
                  <span>Download CV</span>
                  <FiDownload className="ml-2" />
                </Button>
              </div>
              {/* Social */}
              <div>
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="flex w-9 h-9 justify-center items-center rounded-full hover:bg-accent hover:text-primary bg-transparent text-accent hover:transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="oder-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
