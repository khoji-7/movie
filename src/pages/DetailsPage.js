import React from "react";
import {useParams} from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import {useSelector} from "react-redux";
import moment from "moment";
import useFetch from "../hooks/useFetch"
import Devider from "../components/Devider";
import HorizontalScrollCard from "../components/HorizontalScrollCard"

const DetailsPage = () => {
    const params = useParams();
    const {data} = useFetchDetails(`/${params?.explore}/${params?.id}`);
    const imageUrl = useSelector((state) => state.movieoData.imageUrl);
    const {data: castData} = useFetchDetails(`${params?.explore}/${params?.id}/credits`);
    const {data: similarData} = useFetch(`/${params?.explore}/${params?.id}/similar`)
    const {data: recomanded} = useFetch(`/${params?.explore}/${params?.id}/recommendations`)


    const duration = (Number(data?.runtime || data?.episode_run_time[0]) / 60).toFixed(1).split(".");
    const writer = castData?.crew?.filter(el=>el?.job === "Writer")?.map(el=>el?.name)?.join(",")

    console.log(castData, "sasssad");
    
    return (
        <div>
            <div className="w-full h-[300px] hidden lg:block">
                <div className="w-full h-full ">
                    <img src={imageUrl + data?.backdrop_path} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="absolute  w-full h-full top-0 bg-gradient-to-b from-neutral-900/50 to-transparent"></div>
            </div>
            <div className="container mx-auto px-3 py-20 lg:py-2 flex flex-col lg:flex-row gap-10">
                <div className="relative mx-auto lg:-mt-32 lg:mx-0 w-fit ">
                    <img src={imageUrl + data?.poster_path} alt="" className="h-80 w-60 object-cover rounded-lg min-w-60" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-white lg:text-4xl ">{data?.title || data?.name}</h2>
                    <p className="text-neutral-400">{data?.tagline}</p>
                    <Devider/>
                    <div className="flex items-center gap-3 ">
                        <p>Rating : {Number(data?.vote_average).toFixed(2)}</p>
                        <span>|</span>
                        <p>Views : {Number(data?.vote_count)}</p>
                        <span>|</span>
                        <p>
                            Duration : {duration[0]}h {duration[1]}m
                        </p> 
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Overview</h3>
                        <p>{data?.overview}</p>
                        <Devider/>
                        <div className="flex gap-4 text-center my-3">
                            <p>Status : {data?.status}</p>
                            <span>|</span>
                            <p>Release date {moment(data?.release_date).format("MMMM Do YYYY")}</p>
                            <span>|</span>
                            <p>
                              Revenue : ${Number(data?.revenue).toLocaleString()}
                            </p>
                        </div>
                        <Devider/>
                    </div>
                    <div>
                        <p>
                            Director : {castData?.crew[0]?.name}
                        </p>
                        <Devider/>
                        <p>
                            Writer : {writer}
                        </p>
                        <Devider/>
                        <h2 className="text-lg font-bold" >
                            Cast : 
                        </h2>
                        <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5">
                            {
                                castData?.cast?.filter(el => el?.profile_path).map((starCast,index) =>{
                                    return(
                                        <div >
                                            <div>
                                                <img src={imageUrl+starCast?.profile_path} alt="" className="w-24 h-24 object-cover rounded-full" />
                                            </div>
                                            <p className="font-bold">
                                                {starCast?.name}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <HorizontalScrollCard data={similarData} heading={"Similar " + params?.explore} media_type={params?.explore} />
                <HorizontalScrollCard data={recomanded} heading={"Recommendation  " + params?.explore} media_type={params?.explore} />

            </div>
           
        </div>
    );
};

export default DetailsPage;
