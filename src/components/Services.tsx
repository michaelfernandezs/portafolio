const Services=()=>{
    return(
        <div data-aos="fade-right" id="Services" className="p-20 flex flex-col items-center justify-center">
        <h1 className="text-[50px] font-semibold mb-20 leading-normal uppercase text-green-500">Skills</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  justify-around  gap-20">
            <h2 data-aos="fade-up"className="text[-26px] flex items-center justify-center font-semibold text-slate-50 rounded-3x1 h-36 w-44 border-2  border-green-500 b_glow">HTML5</h2>
            <h2 data-aos="fade-down"className="text[-26px] flex items-center justify-center font-semibold text-slate-50 rounded-3x1 h-36 w-44 border-2  border-green-500 b_glow">Tailwind</h2>
            <h2 data-aos="fade-up"className="text[-26px] flex items-center justify-center font-semibold text-slate-50 rounded-3x1 h-36 w-44 border-2  border-green-500 b_glow">Typesript</h2>
            <h2 data-aos="fade-down"className="text[-26px] flex items-center justify-center font-semibold text-slate-50 rounded-3x1 h-36 w-44 border-2  border-green-500 b_glow">Angular</h2>
        </div>
        </div>
    );
}

export default Services;