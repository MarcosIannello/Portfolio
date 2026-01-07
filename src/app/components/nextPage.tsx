"use client";
import { FaArrowDown } from "react-icons/fa";

interface Props {
    name: string;
}

export default function NextPage({ name }: Props) {
    return (
        <div className={`flex items-center justify-center gap-2 p-2 md:p-3 border-none md:border border-gray-50 md:rounded-lg bg-transparent animate-pulse transition-opacity duration-300 text-xs md:text-base`}>
            <h3>{name}</h3>
            <FaArrowDown />
        </div>
    )
}