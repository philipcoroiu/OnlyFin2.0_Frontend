"use client"

import {useEffect, useState} from "react";
import SearchDropDownMenu from "@/app/explore/components/SearchDropDownMenu";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import SearchResult from "@/app/explore/components/SearchResult";

export default function Explore() {

    const [searchResult, setSearchResult] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await ApiCalls.searchAllUsers();
                setSearchResult(data);
                console.log(data[0].username);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, [])



    const [dropdownButtonIsClicked, setDropdownButtonIsClicked] = useState(false);
    let menuItems: string[] = ["Mockups", "Templates", "Design", "Logos"]

    function handleDropdownClick() {
        setDropdownButtonIsClicked(oldValue => !oldValue);
    }

    return (
        <div>
            <SearchDropDownMenu
                menuItems={menuItems}
                dropdownButtonIsClicked = {dropdownButtonIsClicked}
                handleDropdownClick = {handleDropdownClick}
            />
            <SearchResult
                searchResult={searchResult}
            />
        </div>
    )
}