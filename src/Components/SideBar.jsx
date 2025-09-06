"use client";

import Link from "next/link";

export default function Sidebar() {
    const options = [
        "All",
        "Trees",
        "Shrubs",
        "Edibles",
        "Herbs",
        "צמחי בית",
        "זרעים",
    ];

    return (
        <div className="  w-48 h-screen bg-gray-50 p-4 shadow-md mt-20">
            <ul className=" flex flex-col space-y-2">
                {options.map((option, index) => (
                    <li key={index}>
                        <Link
                            href="#"
                            className={`block px-4 py-2 rounded ${index === 0
                                ? "bg-teal-100 font-bold text-teal-700"
                                : "hover:bg-teal-100"
                                }`}
                        >
                            {option}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
