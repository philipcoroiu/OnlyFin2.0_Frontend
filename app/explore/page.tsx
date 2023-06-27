"use client"

import {useState} from "react";
import SearchDropDownMenu from "@/app/explore/components/SearchDropDownMenu";

export default function Explore() {

    const [dropdownButtonIsClicked, setDropdownButtonIsClicked] = useState(false);
    let menuItems: string[] = ["Mockups", "Templates", "Design", "Logos"]

    function handleDropdownClick() {
        setDropdownButtonIsClicked(oldValue => !oldValue);
    }

    return (
        <SearchDropDownMenu
            menuItems={menuItems}
            dropdownButtonIsClicked = {dropdownButtonIsClicked}
            setDropdownButtonIsClicked = {setDropdownButtonIsClicked}
        ></SearchDropDownMenu>
    )
}