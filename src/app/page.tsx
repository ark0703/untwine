import Image from "next/image";
import welcome_img_1 from "@/assets/Your Mental Health Home (2).png";
import Avatar from "./components/avatar";
import apple from "@/assets/1631341448001.png";
import figma from "@/assets/300644344_5745913652137591_50658904666476588_n.jpg";
import slack from "@/assets/th-1702536725.jpg";
import google from "@/assets/WhatsApp Image 2024-06-13 at 4.46.02 PM.jpeg";
import meet from "@/assets/untwineImg/meet.png";
import whatsapp from "@/assets/untwineImg/whatsapp.png";
import phone from "@/assets/untwineImg/phone.png";
import skype from "@/assets/untwineImg/skype.png";
import zoom from "@/assets/untwineImg/zoom.png";
import formImg from "@/assets/Service 24_7-bro 1.png";
import therapyImg from "@/assets/Marriage counseling-bro 1.png";
import doveImg from "@/assets/pigeon.png";
import YourMentalHealthHome from "@/assets/untwineImg/Your Mental Health Home 1.png";
import appstore from "@/assets/appstore.svg";
import googleplay from "@/assets/googleplay.svg";
import communcationImg from "@/assets/communcationImage.png";
import Accordion from "@/app/components/accordion";
import fore from "@/assets/Psychologist-bro (3).png";
import cafeTwoPerson from "@/assets/untwineImg/cafe-two-person.jpg";
import VideoPlayer from "@/app/ui/video";
import Theraoist from "@/app/components/theraoist";
import Link from "next/link";
import Slider from "./components/slider";
import ContactForm from "./components/contactForm";
import HeroCard from "./components/HeroCard";
import brainFaceAnimation from "../../public/Your Mental Health Home.svg";
import { url } from "inspector";
import Card from "./components/Card";
import leftHome from "@/assets/untwineImg/lefthome.png";
import fivthCardImg from "@/assets/untwineImg/supporting-img.png";
import Companionship from "@/assets/untwineImg/campanionShip.png";
import transitionSupport from "@/assets/untwineImg/transitionSupport.png";
import quality from "@/assets/untwineImg/quality.png";
import timeManagment from "@/assets/untwineImg/timeManagment.png";
import flexible from "@/assets/untwineImg/flexible.png";
import Footer from "./components/footer";
import { Forum } from "next/font/google";
import AboutUntwine from "./components/AboutUntwine";

const clientLogo = [
  {
    logo: meet,
    name: "Google Meet",
  },
  {
    logo: whatsapp,
    name: "Whatsapp",
  },
  {
    logo: skype,
    name: "Skype",
  },
  {
    logo: zoom,
    name: "Zoom",
  },
  {
    logo: phone,
    name: "Phone",
  },
];

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

const cardData = [
  {
    icon: "",
    heading: "For Corporates",
    para: "Thriving Employees, Thriving Business: See a rise in employee satisfaction, retention, and overall productivity. Lifetalk empowers your workforce to perform at their best.",
  },
  {
    icon: "",
    heading: "For Employees",
    para: "Feel empowered. Lifetalk provides tools and resources to manage stress, boost energy, and achieve your personal and professional goals.",
  },
  {
    icon: "",
    heading: "For Leaders",
    para: "Invest in your most valuable asset - your team. Lifetalk equips leaders to create a thriving workplace environment.",
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
      <section className=" page-width xs:h-screen flex gap-2 flex-col px-2">
        <div className="h-1/8">
          <h2 className="text-4xl font-bold text-center animate-scaleUp ">
            Your Mental <span className="text-primary text-6xl">Health</span>{" "}
            Home
          </h2>
        </div>
        <div className="h-3/8">
          <p className=" text-center text-xl animate-fadeIn">
            Connect with Untwine and step into a safe space where privacy and
            confidentiality come first. Explore resources, counseling, and
            guidance tailored to help you navigate life's challenges with
            confidence and resilience.
          </p>
        </div>
        <div className="h-1/2">
          <div className="flex justify-center items-center relative md: animate-slideInLeft">
            <Image
              width={1080}
              height={1080}
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
              <h2 className="heading text-center  footer-class pb-2 text-[#2F8455]">
                <span className="text-secondary">Why Choose {"  "}</span>
                Untwine?
              </h2>
              <p className=" m-auto text-center md:max-w-[50%]">
                We adapt to your preferences, ensuring a safe and supportive
                environment. Because we understand the courage it takes to take
                that first step towards healing. Untwine offers flexible therapy
                options to suit your needs.
              </p>
            </div>
            <div className=" flex items-center justify-between w-full flex-wrap">
              <Card
                title="Therapy in Your Safe Space"
                content="We meet you at a location of your choice a cozy cafe, a peaceful beach, a serene garden or at home."
              />
              <Card
                title="Clinic or session setup"
                content="Private Sessions: We offer sessions in a private setting, such as a closed space or a clinic."
              />
              <Card
                title="Virtual Therapy"
                content="Via Skype, Zoom, Google meet, phone call or chat."
              />
            </div>
          </div>
          <br />
          <br />
        </section>

        <section>
          <br />
          <br />
          <div className="page-width">
            <h2 className="text-center m-auto text-2xl md:text-4xl font-bold">
              Our Flexible Approach
            </h2>
            <br />
            <HeroCard
              src={timeManagment}
              alt="Convenient Scheduling"
              headContent="Convenient Scheduling"
              mainContent="We offer appointments from Monday to Friday, from 9:00 am to 7:00 pm, ensuring we can accommodate your needs and preferences."
            />
            <HeroCard
              src={leftHome}
              alt="Diverse Modalities"
              reverse={true}
              headContent="Diverse Modalities"
              mainContent="We're happy to meet you in person, at your home or a café, or connect virtually via Skype, Zoom, Google Duo, or even a simple phone call."
            />
            <HeroCard
              src={flexible}
              alt="Flexible Session Lengths"
              headContent="Flexible Session Lengths"
              mainContent="Our sessions range from 45 minutes, 1 or 1.5 hour allowing us to provide the time and attention you deserve."
            />
          </div>
        </section>

        <div className="bg-[#E5FFF2]/30">
          <section className="page-width pt-8 md:pt-20">
            <br />
            <br />
            <div className="grid grid-cols-2 gap-4 pb-4">
              <div className="col-span-1">
                <h2 id="services" className="heading  footer-class pb-2">
                  Adult Counseling: Empowering Growth
                </h2>
              </div>
              <div className="col-span-1 flex items-end justify-end">
                <Image src={doveImg} alt="dove" width={80} height={80} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 p-4">
              {/* First column with an image */}
              <div className="md:w-1/2">
                <Image
                  src={therapyImg}
                  alt="Therapies"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              {/* Second column with nested rows */}
              <div className="md:w-1/2 flex flex-col space-y-4">
                {/* First nested row */}
                <div className=" grid md:grid-cols-2">
                  {unlockData.map((item, index) => (
                    <div key={index} className="  md:p-4">
                      <div className="  w-16 h-16 bg-primary hover:bg-primary-content rounded-full flex items-center justify-center mb-2 transition-colors duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-8 h-8 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                          />
                        </svg>
                      </div>
                      <h2 className="subheading header-class font-bold mb-1">
                        {item.heading}
                      </h2>
                      <p className="">{item.para}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <br />
            <br />
          </section>
        </div>
        <div className="w-full z-0 overflow-x-clip">
          <svg
            className="y=-10%"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <defs>
              <filter id="shadow" x="-50%" y="-8%" width="200%" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
                <feOffset dx="5" dy="3" result="offsetblur" />
                <feFlood floodColor="rgba(200, 240, 230, 0.5)" />
                <feComposite in2="offsetblur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              fill="#F8FFFB"
              fillOpacity="1"
              d="M0,192L80,202.7C160,213,320,235,480,208C640,181,800,107,960,85.3C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
              filter="url(#shadow)"
            ></path>
          </svg>
        </div>

        <section>
          <div className="page-width">
            <div className="grid grid-cols-4 md:grid-cols-2 gap-4 pb-4">
              <div className="col-span-3 md:col-span-1">
                <h2 id="services" className="text-2xl footer-class pb-2">
                  Geriatric Therapy: Enriching the Golden Years
                </h2>
              </div>
              <div className="col-span-1 flex md:items-end items-center justify-end">
                <Image src={doveImg} alt="dove" width={80} height={80} />
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

        <section>
          <div className="page-width">
            <div className="grid md:md:grid-cols-2 ">
              <Image
                src={quality}
                alt="Improved Quality of life"
                height={640}
                width={640}
                className="grayscale animate-slideInLeft"
              />

              <div className="flex justify-center flex-col  md:px-20">
                <h2 className="text-left heading header-class  text-primary animate-fadeIn">
                  Improved Quality of Life:
                </h2>
                <p className="text-left">
                  Our comprehensive approach aims to enhance the overall quality
                  of life, enabling them to maintain their sense of
                  belongingness and independence.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="page-width">
            <div className="md:grid md:grid-cols-2 flex flex-col-reverse">
              <div className="flex justify-center flex-col  md:px-20">
                <h2 className="header-class pt-5 text-left heading text-primary animate-fadeIn">
                  Transition Support:
                </h2>
                <p className="text-left">
                  We guide older adults through the challenges of transitioning
                  from middle to later years, such as post retirement lifestyle
                  planning.
                </p>
              </div>
              <Image
                src={transitionSupport}
                alt="transition Support"
                height={640}
                width={640}
                className="grayscale animate-slideInLeft"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="page-width">
            <div className=" grid md:md:grid-cols-2 ">
              <Image
                src={fivthCardImg}
                alt="Emotional Support"
                height={750}
                width={750}
                className="grayscale animate-slideInLeft"
              />

              <div className="flex justify-center flex-col  md:px-20">
                <h2 className="text-left heading header-class  text-primary animate-fadeIn">
                  Emotional Support:
                </h2>
                <p className="text-left">
                  Through companionship and tailored interventions, we nurture
                  the emotional well-being of older adults, ensuring they feel
                  valued and connected.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="page-width">
            <div className="md:grid md:grid-cols-2 flex flex-col-reverse">
              <div className="flex justify-center flex-col  md:px-20">
                <h2 className="header-class pt-5 text-left heading text-primary animate-fadeIn">
                  Compassionate Companionship:
                </h2>
                <p className="text-left">
                  Our services include companionship to reduce loneliness and
                  isolation, fostering a sense of connection and community.
                </p>
                <div className="text-white flex items-center gap-2 mb-10">
                  <p className="text-primary header-class ">Learn more</p>
                  <Link
                    aria-label="contact"
                    className="btn btn-circle hover:animate-pulse"
                    href="#contact-us"
                  >
                    <svg
                      className="w-full h-full "
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="27" cy="27" r="27" fill="#2F8455" />
                      <path
                        d="M40.7071 27.7071C41.0976 27.3166 41.0976 26.6834 40.7071 26.2929L34.3431 19.9289C33.9526 19.5384 33.3195 19.5384 32.9289 19.9289C32.5384 20.3195 32.5384 20.9526 32.9289 21.3431L38.5858 27L32.9289 32.6569C32.5384 33.0474 32.5384 33.6805 32.9289 34.0711C33.3195 34.4616 33.9526 34.4616 34.3431 34.0711L40.7071 27.7071ZM14 28H40V26H14V28Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <Image
                src={Companionship}
                alt="Compassionate Companionship"
                height={1080}
                width={1080}
                className="grayscale animate-slideInLeft"
              />
            </div>
          </div>
        </section>
      </div>

      {/* forum */}

      <section>
        <div className="bg-primary relative pt-4 md:pt-20" id="about">
          <div className="page-width md:flex flex-row-reverse ">
            <div className="avatar flex flex-col justify-center items-center ">
              <div className="w-52 md:w-72 rounded-full animate-fadeIn">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
              <h3 className="w-full text-center text-3xl text-white py-4">
                Founders Name
              </h3>
            </div>
            <div className="flex flex-wrap m-auto">
              <div className=" w-full md:w-5/6">
                <h2 className="footer-class text-white pb-2 text-3xl">
                  Get to know the professionals behind Untwine's exceptional
                  mental health services
                </h2>
                <AboutUntwine />

                {/* <div className="text-white flex items-center pt-9 gap-2 mb-10">
                  <p>Request callback</p>
                  <Link
                    aria-label="contact"
                    className="btn btn-circle btn-secondary hover:animate-pulse"
                    href="#contact-us"
                  >
                    <svg
                      width="27"
                      height="16"
                      viewBox="0 0 27 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM0 9H26V7H0V9Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div> */}
              </div>
              {/* <div>
                <div className=" grid md:grid-cols-3 gap-4">
                  <div className="bg-[#DDDDDD] col-span-1 h-[200px]  rounded-xl">
                    <Image
                      width={171}
                      height={200}
                      src={welcome_img_1}
                      className="h-[200px] w-[171px] object-contain"
                      alt="illustration of girl sitting"
                    />
                  </div>
                  <div className="bg-[#EA1410] flex flex-col justify-center col-span-2 rounded-xl p-4">
                    <Avatar />
                    <div className="flex items-center  gap-2 pt-2">
                      <p className=" text-4xl md:text-6xl mb-0 text-white">
                        2K+
                      </p>
                      <p className="text-white ">
                        Lives have been
                        <br />
                        transformed.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <br />
            <br />
          </div>
          <div className="absolute top-[100%] w-full z-0 overflow-x-clip ">
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
      <br />
      <br />
      <br />

      {/*--Carousel*/}
      {/* <section className="md:pt-10 page-width">
        <h2 className="heading footer-class pb-2 text-[#26275F] text-center">
          Virtual Therapy
        </h2>

        <div className="flex justify-center items-center mt-5">
          <div className="carousel gap-16 carousel-center rounded-box items-center">
            <>
              <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                  {clientLogo.map((item, index) => (
                    <li key={index}>
                      <Image
                        width={150}
                        height={150}
                        src={item.logo}
                        alt={item.name}
                        className=" object-contain aspect-square"
                      />
                    </li>
                  ))}
                </ul>
                <ul
                  className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                  aria-hidden="true"
                >
                  {clientLogo.map((item, index) => (
                    <li key={index}>
                      <Image
                        width={150}
                        height={150}
                        src={item.logo}
                        alt={item.name}
                        className=" object-contain aspect-square"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </>
          </div>
        </div>
      </section> */}

      <section>
        <div className="page-width md:pt-16 ">
          <div className="container mx-auto p-4">
            {/* First Row */}
            <div className="row mb-4">
              <h2
                id="contact-us"
                className="heading text-center footer-class pb-2 md:pt-20 text-[#26275F]"
              >
                Corporate Wellness Solution At Your Fingertips
              </h2>
              <p className=" text-center">Discover what we can do for you!</p>
            </div>

            {/* Second Row */}
            <div className="row grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col">
                {/* Image column */}
                <Image src={formImg} alt="" />
              </div>
              <div className="col content-center">
                {/* form column */}
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 page-width space-y-4 bg-primary">
        <Slider />
        <div className="flex items-center justify-center  pt-8 md:pt-0 pb-4">
          <Image
            src={communcationImg}
            alt="communication"
            width={80}
            height={80}
            className="mr-4 hidden md:block"
          />
          <h2 className="heading footer-class text-white">
            Mind Matters: Your Essential Psychologist{" "}
            <span className="">FAQ Guide </span>{" "}
          </h2>
        </div>
        <Accordion accordionData={accordionData} />

        <div className="flex items-center justify-between flex-wrap gap-4 md:pt-8">
          <div className="col-span-1">
            <p className=" text-white subheading footer-class pb-2">
              Still can&apos;t find your answer? <br />
              <span className="text-white">
                Contact us for personalized support and guidance!
              </span>
            </p>
          </div>
          <div className="col-span-1 flex items-end justify-end">
            <div className="flex items-center gap-2">
              <p className="text-white font-semibold">Connect With Us</p>
              <Link
                aria-label="contact"
                className="btn btn-circle btn-primary hover:animate-pulse"
                href="#contact-us"
              >
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 27 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM0 9H26V7H0V9Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
