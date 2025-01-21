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
            <HorizontalScrollCard data={trendingData} heading={"Trending"}/>
            <HorizontalScrollCard data={nowPLaying} heading={"Now Plating"}/>
            <HorizontalScrollCard data={topRated} heading={"Top Rated"}/>
            <HorizontalScrollCard data={popular} heading={"Popular"}/>
            <HorizontalScrollCard data={onTheAirShow} heading={"On The Air Show"}/>

        </div>
    );
};

export default Home;
