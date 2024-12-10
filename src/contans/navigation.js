import { IoHome } from "react-icons/io5";
import { IoTvSharp } from "react-icons/io5";
import { MdMovie } from "react-icons/md";
import {IoSearch} from "react-icons/io5";


export const navigation = [
    {
        label: "TV Shows",
        href: "tv",
        icon : <IoTvSharp/>
    },
    {
        label: "Movies",
        href: "movies",
        icon : <MdMovie/>
    },
];

export const mobileNavigation = [
    {
        label: "Home",
        href: "/",
        icon : <IoHome/>
    },
    ...navigation,
    {
        label: "Search",
        href: "/search?q",
        icon : <IoSearch/>
    },
]
