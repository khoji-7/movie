import axios from "axios";
import React, { useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Card from "../components/Card";
import { use } from "react";

const ExplorePage = () => {
    const params = useParams();
    const [pageNo, setPageNo] = useState(1);
    const [data, setData] = useState([]);
    const [totalPage, setTotalPage] = useState(0);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/discover/${params.explore}`,{
              params:{
                page: pageNo,
              }
            })
            setData((prev)=>{
              return[
                ...prev,
                ...response.data.results
              ]
              setTotalPage(response.data.total_pages)
            })
        } catch (error) {
            console.log("error", error);
        }
    };
    const handeleScroll = () => {
      if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        setPageNo(preve => preve + 1 )
      }
    }

    useEffect(() => {
        fetchData()
    },[pageNo]);

    useEffect(()=>{
      setPageNo(1)
      setData([])
      fetchData()
    },[params.explore])

    useEffect(()=>{
      window.addEventListener('scroll', handeleScroll)
    },[])

    return(
      <div className="pt-16">
          <div className="mx-auto container">
              <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
                  Popular {params.explore} show
              </h3>
              <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 mx-auto">
                {
                  data.map ((exploreData,index)=>{
                    return(
                      <Card data={exploreData} key={exploreData.id + "exploreSection"} media_type={params.explore}/>
                    )
                  })
                }
              </div>
          </div>
      </div>
    );
};

export default ExplorePage;
