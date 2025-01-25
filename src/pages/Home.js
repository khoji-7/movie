import {useSelector} from "react-redux";
import React from "react";
import BannerHome from "../components/BannerHome";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import useFetch from "../hooks/useFetch";


const Home = () => {
    const trendingData = useSelector((state) => state.movieoData.bannerData);
    const {data : nowPLaying} = useFetch("/movie/now_playing")
    const {data : topRated} = useFetch("/movie/top_rated")
    const {data : popular} = useFetch("/tv/popular")
    const {data : onTheAirShow} = useFetch("/tv/on_the_air")




    return (
        <div>
            <BannerHome />
            <HorizontalScrollCard data={trendingData} heading={"Trending"} trending={true}/>
            <HorizontalScrollCard data={nowPLaying} heading={"Now Plating"} media_type={"movie"}/>
            <HorizontalScrollCard data={topRated} heading={"Top Rated"} media_type={"movie"}/>
            <HorizontalScrollCard data={popular} heading={"Popular"} media_type={"tv"}/>
            <HorizontalScrollCard data={onTheAirShow} heading={"On The Air Show"} media_type={"tv"}/>

        </div>
    );
};

export default Home;
