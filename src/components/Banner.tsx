import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import img from "../assets/profile.jpg";
import AOS from "aos";
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

const Banner=()=>{
   useEffect(()=> { 
    AOS.init({
    easing:'ease-out-quart',
    delay:0,
    duration:750,
    })   
    },[])
    return(
        <div  className="lg:px-56 px-10 lg:py-0 py20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div data-aos="fade-up" className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1  data-aos="fade-right"className="text-[52px] font-semibold mb-8 leading-normal text-slate-50">Welcome to <span className="text-green-500 ">My website</span></h1>
                <p data-aos ="fade-left" className="text-slate-50">Front end Developer</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="https://github.com/michaelfernandezs" className="text-slate-50 hover:text-green-500 rounded-full glow p-2">  
                                <AiFillGithub className="text-[28px]"/>
                            </a>
                            <a href="https://www.linkedin.com/in/michael-jeffrey-fern%C3%A1ndez-609b13149/" className="text-slate-50 hover:text-green-500  rounded-full glow p-2">  
                                <FaLinkedin className="text-[28px]"/>
                            </a>
                            <a href="https://www.instagram.com/mikefdz11/" className="text-slate-50 hover:text-green-500  rounded-full glow p-2">  
                                <FaInstagram className="text-[28px]"/>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
            <img src={img} width={290} height={290} className="rounded-full border-2 p-1 border-fuchsia-500 img_glow" alt="" />
        </div>
    );
}

export default Banner;