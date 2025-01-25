import React, {useRef} from "react";
import Card from "./Card";
import { FaAngleRight,FaAngleLeft } from "react-icons/fa6";

const HorizontalScrollCard = ({data = [], heading,trending,media_type}) => {
    const containerRef = useRef();
    const handleNext = () =>{
        containerRef.current.scrollLeft += 400
    }
    const handlePrew = () =>{
        containerRef.current.scrollLeft -= 400
    }
 
    return (
        <div className="container mx-auto px-3 my-10">
            <h2 className="text-xl lg:text-2xl mb-3 font-bold text-white">{heading}</h2>
            <div className="relative">
                <div
                    ref={containerRef}
                    className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col overflow-hidden overflow-x-scroll relative gap-6 z-10 scroll-smooth transition-all"
                >
                    {data.map((data, index) => {
                        return <Card key={data.id} data={data} index={index + 1} trending={trending} media_type={media_type}/>;
                    })}
                </div>
                <div className="absolute top-0 hidden lg:flex w-full h-full justify-between items-center ">
                    <button onClick={handlePrew} className="bg-white p-1 rounded-full text-black z-20 -ml-2">
                        <FaAngleLeft/>
                    </button>
                    <button onClick={handleNext} className="bg-white p-1 rounded-full text-black z-20 -mr-2">
                        <FaAngleRight/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HorizontalScrollCard;
