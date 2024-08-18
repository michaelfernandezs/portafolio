import img from '../assets/img.jpg.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import { FaGithub } from 'react-icons/fa'
const Projects=()=>{
    return(
   
        <div id='Projects' className="p-20 flex flex-col items-center justify-center ">
             <h1 data-aos-="fade-left" className="text-[50px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
                 <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  justify-around  gap-10">
                 <div className="gy-3">
                     <img data-aos="fade-up" height={100} width={200} className="text[-26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3x1 h-36 w-42  p-1 border-fuchsia-500 b_glow" src={img} alt=""/>
                      
                         <a href="https://github.com/michaelfernandezs/angularx" target="_blank" className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out">GitHub <FaGithub /></a>
                
                      </div>
                      <div className="gy-3">
                     <img data-aos="fade-up" height={100} width={200} className="text[-26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3x1 h-36 w-42  p-1 border-fuchsia-500 b_glow" src={img2} alt=""/>
                      
                         <a href="https://github.com/michaelfernandezs/Vite-React" target="_blank" className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out">GitHub <FaGithub /></a>
                        
                       
                      </div>

                  <div className="gy-3">
                     <img data-aos="fade-up" height={100} width={200} className="text[-26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3x1 h-36 w-42  p-1 border-fuchsia-500 b_glow" src={img3} alt=""/>
                      
                         <a href="https://github.com/michaelfernandezs/AngularAnimeSearch" target="_blank" className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out">GitHub <FaGithub /></a>
                        
                     
                      </div>              
                </div>
                
                
        </div>    
        
    );

}
export default Projects;
