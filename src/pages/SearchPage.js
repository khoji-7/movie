import axios from "axios";
import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Card from "../components/Card";

const SearchPage = () => {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [page, setPage] = useState([]);
    const navigate = useNavigate();
    const query = location?.search?.slice(3)

    const fetchData = async () => {
        try {
            const response = await axios.get(`/search/multi`, {
                params: {
                    query: location?.search?.slice(3),
                    page: page,
                },
            });
            setData((preve) => {
                return [...preve, ...response.data.results];
            });
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        if(query){
        setPage(1);
        setData([]);
        fetchData();
        }
    }, [location?.search]);

    const handeleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setPage((preve) => preve + 1);
        }
    };
    useEffect(() => {
        if(query){
            fetchData();
        }
    }, [page]);

    useEffect(() => {
        window.addEventListener("scroll", handeleScroll);
    }, []);

    return (
        <div className="py-16">
            <div className="lg:hidden my-2 mx-2 sticky top-20 z-10">
                <input
                    className="px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-700 "
                    type="text"
                    placeholder="Search here..."
                    value={query?.split("%20")?.join(" ")}
                    onChange={(e) => navigate(`/search?q=${e.target.value}`)}
                />
            </div>
            <div className="container mx-auto">
                <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">Search result</h3>
                <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 mx-auto justify-center lg:justify-start">
                    {data.map((searchData, index) => {
                        return (
                            <Card data={searchData} key={searchData.id + "search"} media_type={searchData.media_type} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
