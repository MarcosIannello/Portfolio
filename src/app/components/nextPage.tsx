"use client";
import { FaArrowDown } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

interface Props {
    name: string;
}

export default function NextPage({ name }: Props) {
    return (
        <div className={`flex items-center justify-center gap-2 p-3 border-gray-50 border rounded-lg bg-transparent animate-pulse transition-opacity duration-300`}>
            <h3>{name}</h3>
            <FaArrowDown />
        </div>
    )
}