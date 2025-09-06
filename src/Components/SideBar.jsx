"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
    const router = useRouter();

    const options = [
        { label: "All", value: "all" },
        { label: "Trees", value: "trees" },
        { label: "Shrubs", value: "shrubs" },
        { label: "Edibles", value: "edibles" },
        { label: "Herbs", value: "herbs" },
        { label: "צמחי בית", value: "houseplants" },
        { label: "זרעים", value: "seeds" },
    ];

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(options[0]);

    const handleSelect = (option) => {
        setSelected(option);
        setOpen(false);
        router.push(`/categories/${option.value}`);
    };

    return (
        <>
            <div className="hidden md:block w-48 h-screen bg-gray-50 p-4 shadow-md mt-20">
                <ul className="flex flex-col space-y-2">
                    {options.map((option, index) => (
                        <li key={option.value}>
                            <Link
                                href={`/categories/${option.value}`}
                                className={`block px-4 py-2 rounded ${index === 0
                                        ? "bg-teal-100 font-bold text-teal-700"
                                        : "hover:bg-teal-100"
                                    }`}
                            >
                                {option.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="block md:hidden w-full p-4 mt-16">
                <div className="relative">
                    <div
                        className="w-full p-2 border rounded shadow-sm cursor-pointer bg-white"
                        onClick={() => setOpen(!open)}
                    >
                        {selected ? selected.label : "Select Category"}
                    </div>

                    {open && (
                        <div className="absolute mt-1 w-full border rounded bg-white shadow-md z-10">
                            {options.map((option) => (
                                <div
                                    key={option.value}
                                    onClick={() => handleSelect(option)}
                                    className="px-4 py-2 hover:bg-teal-100 cursor-pointer"
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
