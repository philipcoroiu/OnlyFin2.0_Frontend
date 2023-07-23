"use client"

import {useEffect, useState} from "react";
import SearchDropDownMenu from "@/app/explore/components/SearchDropDownMenu";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import SearchResult from "@/app/explore/components/SearchResult";

//TODO: Fix cursed CSS & code, add support for stock search type
export default function Explore() {

    const [dropdownButtonIsClicked, setDropdownButtonIsClicked] = useState(false);
    const menuItems: string[] = ["Users"]

    const [noSearchResult, setNoSearchResult] = useState<boolean>(false)
    const [usernameSearchQuery, setUsernameSearchQuery] = useState<string>()
    const [searchResult, setSearchResult] = useState<OnlyfinProfileSubInfo[]>([]);

    useEffect(() => {
        if (usernameSearchQuery) {
            fetchUsersByUsername()
        }
        else {
            fetchRandomUsers()
        }
    }, [usernameSearchQuery])

    function fetchRandomUsers() {
        ApiCalls.fetchNewestUsers()
            .then((response) => {
                const profiles: OnlyfinProfileSubInfo[] = response.data

                setNoSearchResult(response.status === 204)

                setSearchResult(profiles)
            })
            .catch(error => {
                console.log("[explore/page.tsx] error fetching data: " + error)
            })
    }

    function fetchUsersByUsername() {
        if (usernameSearchQuery) {
            ApiCalls.searchByUsername(usernameSearchQuery)
                .then(response => {
                    const profiles: OnlyfinProfileSubInfo[] = response.data

                    setNoSearchResult(response.status === 204)

                    setSearchResult(profiles)
                })
                .catch(error => {
                    console.log("[explore/page]: " + error)
                })
        }
    }

    function handleDropdownClick() {
        setDropdownButtonIsClicked(oldValue => !oldValue);
    }

    function handleSearchInput(searchQuery: string) {
        setUsernameSearchQuery(searchQuery)
    }

    function renderSearchResult() {
        return (
            <SearchResult
                searchResult={searchResult}
            />
        )
    }

    function renderNoResultFound() {
        return <p className={"text-center"}>No results found...</p>
    }

    return (
        <div>
            <SearchDropDownMenu
                menuItems={menuItems}
                dropdownButtonIsClicked={dropdownButtonIsClicked}
                handleDropdownClick={handleDropdownClick}
                handleSearchInput={handleSearchInput}
            />
            {noSearchResult ? renderNoResultFound() : renderSearchResult()}
        </div>
    )
}