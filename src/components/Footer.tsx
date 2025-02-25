import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer=()=>{
    return(
        <footer className="bg-slate-950 text-white lg:px-48 px-4 py-20">
            <div className="container mx-auto grid grid-cols-1   md:grid-cols-4 gap-4">
                <div className="mb-4 md:mb-0">
                    <span className="text-[22px] font-semibold text-green-500 py-2 uppercase">Professional Summary</span>
                    <p className="text-slate-50"> Reliable candidate ready to take on challenges using problem-solving and task prioritization skills to help the team succeed.</p>
                </div>
            
            <div>
                <h2 className="text-[22px] font-semibold text-green-500  py-2 uppercase">Services</h2>
                <ul className="text-[16px] my-4">
                    <li className="my-2 text-slate-50 ">Web Design</li>
                    <li className="my-2 text-slate-50">Web Development</li>
                    
                </ul>
            </div>
            <div className="mb-4 md:mb-0">
                <h2 className="text-[22px] font-semibold text-green-500 py-2 uppercase">Contact</h2>
                <p className="text-[16px0 my-4 text-slate-50">Email: michaelferndezdev@gmail.com</p>
                <p className="text-[16px0 my-4 text-slate-50">Phone: +52 951-345-6174</p>
            </div>
            <div>
            <h2 className="text-[22px] font-semibold text-green-500 py-2 uppercase">Follow Me</h2>
            <div className="flex space-x-4">
                <a className="text-green-500 hover:text-green-600 transition-all duration-150 ease-in-out" href="https://github.com/michaelfernandezs">
                    <FaGithub/>
                </a>
                <a className="text-green-500 hover:text-green-600 transition-all duration-150 ease-in-out" href="https://www.linkedin.com/in/michael-jeffrey-fern%C3%A1ndez-609b13149/">
                    <FaLinkedin/>
                </a>
                <a className="text-green-500 hover:text-green-600 transition-all duration-150 ease-in-out" href="https://www.instagram.com/mikefdz11/">
                    <FaInstagram/>
                </a>
            </div>
            </div>

        </div>
        </footer>
    );
}

export default Footer;