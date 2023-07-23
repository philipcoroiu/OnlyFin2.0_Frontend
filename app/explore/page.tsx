"use client"

import {useEffect, useState} from "react";
import SearchDropDownMenu from "@/app/explore/components/SearchDropDownMenu";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import SearchResult from "@/app/explore/components/SearchResult";

export default function Explore() {

    const [dropdownButtonIsClicked, setDropdownButtonIsClicked] = useState(false);
    const menuItems: string[] = ["Users", "Stocks"]

    const [searchResult, setSearchResult] = useState();

    useEffect(() => {
        ApiCalls.fetchNewestUsers()
            .then((response) => {
                setSearchResult(response.data)
            })
            .catch(error => {
                console.log("[explore/page.tsx] error fetching data: " + error)
            })
    }, [])

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