import Image from "next/image";
import formImg from "@/assets/Service 24_7-bro 1.png";
import therapyImg from "@/assets/Marriage counseling-bro 1.png";
import doveImg from "@/assets/pigeon.png";
import YourMentalHealthHome from "@/assets/untwineImg/Your Mental Health Home 1.png";
import communcationImg from "@/assets/communcationImage.png";
import Accordion from "@/app/components/accordion";
import VideoPlayer from "@/app/ui/video";
import Link from "next/link";
import Slider from "./components/slider";
import ContactForm from "./components/contactForm";
import HeroCard from "./components/HeroCard";
import Card from "./components/Card";
import leftHome from "@/assets/untwineImg/3.png";
import fivthCardImg from "@/assets/untwineImg/supporting-img.png";
import Companionship from "@/assets/untwineImg/campanionShip.png";
import transitionSupport from "@/assets/untwineImg/transitionSupport.png";
import quality from "@/assets/untwineImg/quality.png";
import image1 from "@/assets/untwineImg/image1.png";
import flexible from "@/assets/untwineImg/flexible.png";
import AboutUntwine from "./components/AboutUntwine";



const accordionData = [
  {
    title: "What is Lifetalk's corporate wellness program?",
    content:
      "Lifetalk offers a comprehensive program providing 24/7 access to 1-1 coaching from verified psychologists. With customizable options for group-based wellness workshops, we tailor solutions to meet your company's specific needs.",
  },
  {
    title: "Is it worth implementing a well-being program for your company?",
    content:
      "Starting a well-being program is worthwhile as it boosts morale and productivity, reduces absenteeism, showcasing commitment to employee health & attracting top talent.",
  },
  {
    title: "What topics can employees get help with through the program?",
    content:
      "Lifetalk covers a wide range of issues employees may face including stress, anxiety, burnout, relationships, work-life balance & personal growth.",
  },
  {
    title: "How much does the Corporate wellness program cost?",
    content:
      "Our affordable & customized pricing plans ensure accessibility as per your preferences. Contact us to find the perfect fit for your organization's budget.",
  },
];


const unlockData = [
  {
    heading: "Mental Health",
    para: "Our counselors specialize in supporting individuals with a wide range of mental health conditions, including depression, anxiety, panic attack and trauma. We provide a safe and judgment- free space to explore your thoughts, feelings, and behaviors.",
  },
  {
    heading: "Life Transitions",
    para: "Whether you're navigating a relationship breakdown, job loss, or the grieving process, our counselors can help you develop effective coping strategies to overcome life's challenges and emerge stronger.",
  },
  {
    heading: " Personal Growth",
    para: "Our sessions focus on empowering you to build self-awareness, improve self- esteem, and cultivate a healthier relationship with your emotions. Together, we'll work towards a more fulfilling and balanced life.",
  },
];

export default async function Home() {
  return (
    <>
      <section className=" page-width h-[70vh] flex gap-2 flex-col justify-between">
        <div className="">
          <br/>
          <br/>
        <h2 className="text-primary text-4xl font-bold text-center animate-scaleUp ">
            Your Mental Health Home
          </h2>
          <p className=" text-center text-xl  m-auto md:max-w-[70%]">
            Connect with Untwine and step into a safe space where privacy and
            confidentiality come first.
          </p>
        </div>
        <br/>
        <div className="">
          <div className="flex justify-center items-center ">
            <Image
              width={700}
              height={700}
              src={YourMentalHealthHome}
              alt="illustration of psychiatrist sitting with a client"
            />
          </div>
        </div>
      </section>
      <div className="relative">
        <section className=" ">
          <br />
          <br />
          <div className="page-width flex flex-wrap  ">
            <div>
              <h2 className="header-class text-primary md:text-4xl text-center ">
                Why Choose
                Untwine?
              </h2>
              <p className=" m-auto text-center md:max-w-[70%] text-xl">
                We adapt to your preferences, ensuring a safe and supportive
                environment. Because we understand the courage it takes to take
                that first step towards healing. Untwine offers flexible therapy
                options to suit your needs.
              </p>
            </div>
          </div>
          <br />
          <br />
        </section>

        <section>
          <br />
          <br />
          <div className="page-width">
            <HeroCard
              src={image1}
              alt="Open Space Therapy"
              headContent="Open Space Therapy"
              mainContent="We meet you at a location of your choice a cozy cafe, a peaceful beach, a serene garden or at home."
            />
            <HeroCard
              src={leftHome}
              alt="Close Space Therapy"
              reverse={true}
              headContent="Close Space Therapy"
              mainContent="We offer sessions in a private setting, such as a closed space or a clinic."
            />
            <HeroCard
              src={flexible}
              alt="Virtual Therapy"
              headContent="Virtual Therapy"
              mainContent="Via Skype, Zoom, Google meet, phone call or chat."
            />
          </div>
        </section>

        <section>
          <div className="page-width">
            <div className="">
              <div className="">
                <br/>
                <br/>
                <h2 id="services" className="text-4xl text-center  footer-class pb-2">
                  Geriatric Therapy: Enriching the Golden Years
                </h2>
              </div>
            </div>
            <div className="grid md:md:grid-cols-2 ">
              <video
                width="1920"
                height="400"
                preload="none"
                muted
                autoPlay
                playsInline
                className=" w-full mix-blend-darken md:max-h-[500px] "
              >
                <source
                  src={`https://tsuahomfkoxepnrgbjcu.supabase.co/storage/v1/object/public/assets/banner800.mp4?t=2024-06-12T11%3A40%3A36.667Z`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              <div className="flex justify-center flex-col  md:px-20">
                <h2 className="text-left heading header-class  text-primary animate-fadeIn">
                  Cognitive decline:
                </h2>
                <p className="text-left">
                  Our Psychologists use evidence based approach to help
                  individuals with cognitive decline, resulting from conditions
                  like Alzheimer's, dementia, stroke, or Parkinson's, to enhance
                  cognitive abilities and daily functioning skills. This will
                  address memory difficulties, problem-solving challenges, and
                  attention and concentration issues.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="page-width">
            <div className="md:grid md:grid-cols-2 flex flex-col-reverse ">
              <div className="flex justify-center flex-col  md:px-20">
                <h2 className="header-class pt-5 text-left heading text-primary animate-fadeIn">
                  Physical Limitations:
                </h2>
                <p className="text-left">
                  We address the emotional impact of physical changes, such as
                  incontinence and mobility issues, empowering older adults to
                  adapt and thrive.
                </p>
              </div>
              <VideoPlayer
                src="https://tsuahomfkoxepnrgbjcu.supabase.co/storage/v1/object/public/assets/Untitled_design__2_.mp4?t=2024-06-12T11%3A42%3A04.206Z"
                width={1920}
                height={400}
                className=" w-full mix-blend-darken md:max-h-[500px] "
              />
            </div>
          </div>
        </section>

        
      </div>

      {/* forum */}

      <section>
        <div className="bg-primary relative pt-4 md:pt-20" id="about">
          <div className="page-width ">
              <div className=" w-full flex flex-wrap items-start justify-between gap-8">
                <h2 className="footer-class text-white text-4xl"> Don’t worry! <br/> We are here for you</h2>
                <ContactForm/>
              </div>
            
            <br />
            <br />
          </div>
          <div className="absolute top-[85%] w-full -z-1 overflow-x-clip ">
            <svg
              className="transform scale-x-[-1.5]"
              xmlns=" http://www.w3.org/2000/svg"
              viewBox="0 0 1440 200"
            >
              <path
                className=" fill-primary"
                fill=""
                fillOpacity="1"
                d="M0,128L40,138.7C80,149,160,171,240,181.3C320,192,400,192,480,176C560,160,640,128,720,106.7C800,85,880,75,960,69.3C1040,64,1120,64,1200,85.3C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
