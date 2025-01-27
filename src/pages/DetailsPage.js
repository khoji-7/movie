import React from "react";
import {useParams} from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import {useSelector} from "react-redux";
import moment from "moment";

const DetailsPage = () => {
    const params = useParams();
    const {data} = useFetchDetails(`/${params?.explore}/${params?.id}`);
    const imageUrl = useSelector((state) => state.movieoData.imageUrl);
    const {data: castData} = useFetchDetails(`${params?.explore}/${params?.id}/credits`);

    const duration = (Number(data?.runtime || data?.episode_run_time[0]) / 60).toFixed(1).split(".");
    console.log(data, "sad");
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
                    <img src={imageUrl + data?.poster_path} alt="" className="h-80 w-60 object-cover rounded-lg" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-white">{data?.title || data?.name}</h2>
                    <p className="text-neutral-400">{data?.tagline}</p>
                    <div className="flex items-center gap-3 my-3">
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
                        <div className="flex gap-4 text-center my-3">
                            <p>Status : {data?.status}</p>
                            <span>|</span>
                            <p>Release date {moment(data?.release_date).format("MMMM Do YYYY")}</p>
                            <span>|</span>
                            <p>
                              Revenue : {Number(data?.revenue)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
