import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

export default function Header(){
    return(
        <>
            <header>
                <Logo />

                <div className='menu-container'>
                    <SearchBar /> 

                    <Menu />
                </div>
            </header>
        </>
    )
}