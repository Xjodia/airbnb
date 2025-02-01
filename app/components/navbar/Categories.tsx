"use client";

import {GiBoatFishing, GiIsland, GiWindmill, GiCutDiamond } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";
import { PiFarm } from "react-icons/pi";
import { MdOutlineForest, MdOutlineVilla, MdLocalFireDepartment } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import {TbBeach, TbMountain, TbCactusFilled} from "react-icons/tb";
import Container from "../Container"
import CategoryBox from "../CategoryBox";
import {usePathname, useSearchParams} from "next/navigation";

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!',
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has windmills!',
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern!',
    },
    {
        label: 'Countryside',
        icon: PiFarm,
        description: 'This property is close to the countryside!',
    },
    {
        label: 'Pools',
        icon: FaSwimmingPool,
        description: 'This property has pools!',
    },
    {
        label: 'Island',
        icon: GiIsland,
        description: 'This property is located in the island!',
    },
    {
        label: 'Fishing',
        icon: GiBoatFishing,
        description: 'This property is close to the lake!',
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activities!',
    },
    {
        label: 'Camping',
        icon: MdOutlineForest,
        description: 'This property is close to the forest!',
    },
    {
        label: 'Mountain',
        icon: TbMountain,
        description: 'This property is close to the mountain!',
    },
    {
        label: 'Desert',
        icon: TbCactusFilled,
        description: 'This property is close to the desert!',
    },
    {
        label: 'Luxury',
        icon: GiCutDiamond,
        description: 'This property is luxury!',
    },
    {
        label: 'Trending',
        icon: MdLocalFireDepartment,
        description: 'This property is trending!',
    },
]

const Categories = () => {

    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if (!isMainPage) return null;

    return (
        <Container>
            <div
                className="
                    pt-4
                    flex
                    flex-row
                    items-center
                    justify-between
                    overflow-x-auto
                ">
                { categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    )
}

export default Categories;