import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full py-4">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* About */}
          <div className="mb-2 flex flex-col text-center xl:text-left">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="xl:text-[56px] text-[48px] font-bold mb-4">
              Hello I’m <br />
              <span className="text-accent">Tran Hien Thao</span>
            </h1>
            <p className="text-white/80 max-w-[500px] mb-9">
              I excel at crafting elegant product design and I am driving for
              enhancing my proficiency in diverse technologies to lit your
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
              <div className="flex gap-4">Social</div>
            </div>
          </div>

          {/* Avatar */}
          <div className="">abc</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
