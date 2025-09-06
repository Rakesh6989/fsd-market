"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link href="/">
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <Image src="/logo.png" alt="Brand Logo" width={40} height={40} />
                            <span className="font-bold text-lg text-teal-500">Market-Hub</span>
                        </div>
                    </Link>
                    <div className="hidden md:flex space-x-6 w-1/2 items-center relative">
                        <input
                            type="text"
                            placeholder="Search products  "
                            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                        <SearchIcon className="cursor-pointer absolute right-8" />

                    </div>
                    <div className="hidden md:flex space-x-6 items-center">
                        <ShoppingCartIcon className="cursor-pointer hover:text-teal-500" />
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <input
                        type="text"
                        placeholder="Search products"
                        className="w-full border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                    <div className="flex items-center space-x-4 mt-2">
                        <ShoppingCartIcon className="cursor-pointer" />
                        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
