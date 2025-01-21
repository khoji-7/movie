import React from "react";
import {useSelector} from "react-redux";
import {setImageUrl} from "../store/movieoSlice";
import moment from "moment";
import {Link} from "react-router-dom";


const Card = ({data, trending, index,media_type}) => {
    const imageUrl = useSelector((state) => state.movieoData.imageUrl);

    const mediaType = data.media_type ?? media_type
   
    return (
        <Link to={"/"+mediaType+"/"+data.id} className="w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative hover:scale-110 transition-all">
            <img src={imageUrl + data?.poster_path} alt="" />
            <div className="absolute top-5">
                {trending && (
                    <div className="py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/50 overflow-hidden">
                        #{index} Trending
                    </div>
                )}
            </div>
            <div className=" absolute bottom-0 w-full backdrop-blur-3xl bg-black/50 p-2 h-14 ">
                <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold">{data?.title || data?.name}</h2>
                <div className="text-sm text-neutral-400 flex justify-between items-center">
                  <p >
                    {moment (data?.release_date).format("MMMM Do YYYY")}
                  </p>
                  <p className="bg-black rounded-full px-1 text-white text-xs">
                   Rating: {Number(data.vote_average).toFixed(1)}
                  </p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
