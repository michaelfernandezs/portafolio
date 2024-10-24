
import img from "../assets/profile1.jpg"
const About=()=>{
    const handleClick = () => {
        window.location.href = 'https://drive.google.com/file/d/1oImQhzpEXoGZDHcXDQA6VmuaILuMV6GP/view?usp=sharing';
      };    
    return(
        <div id="About" className="">
             <div className="lg:px-56 px-10 lg:py-0 py20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div    className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1  data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase text-green-500"> About me</h1>
                <p  data-aos="fade-left" className="text-slate-50" >Hello, I am an Engineering student in Software development with solid knowledge in Frontend Technologies (Html, Tailwind, CSS, Typescript, React, Angular). I consider myself a person capable of quickly adapting to changes, responsible and committed to work.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <button onClick={handleClick}  className="neno-button shadow-xl hover:shadow-green-500/50  text-slate-50  hover:bg-green-800  border-green-600 rounded-lg py-4 px-8 uppercase relative overflow-hidden bg-green-500  ">Resume
                                
                            </button>
                             
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos="fade-down" src={img} width={290} height={290} className="rounded-md  img_glow" alt="" />
        </div>
        </div>
    );
}

export default About;