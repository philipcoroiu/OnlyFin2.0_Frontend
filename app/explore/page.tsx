"use client"

import {useEffect, useState} from "react";
import SearchDropDownMenu from "@/app/explore/components/SearchDropDownMenu";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import SearchResult from "@/app/explore/components/SearchResult";
import {Layout, Responsive, WidthProvider} from "react-grid-layout";

export default function Explore() {

    const ResponsiveGridLayout = WidthProvider(Responsive);

    const layouts: {lg: Layout[]} = {
        lg: [
            {i: '1', x: 0, y: 0, w: 1, h: 2},
            {i: '2', x: 1, y: 0, w: 3, h: 2},
            {i: '3', x: 4, y: 0, w: 1, h: 2},
        ],
    };

    const [dropdownButtonIsClicked, setDropdownButtonIsClicked] = useState(false);
    const menuItems: string[] = ["Users"]

    const [nothingFound, setNothingFound] = useState<boolean>(false)
    const [usernameSearchQuery, setUsernameSearchQuery] = useState<string>()
    const [searchResult, setSearchResult] = useState<OnlyfinProfileSubInfo[]>();

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

                setNothingFound(response.status === 204)

                setSearchResult(profiles)
            })
            .catch(error => {
                console.log("[explore/temp.tsx] error fetching data: " + error)
            })
    }

    function fetchUsersByUsername() {
        if (usernameSearchQuery) {
            ApiCalls.searchByUsername(usernameSearchQuery)
                .then(response => {
                    const profiles: OnlyfinProfileSubInfo[] = response.data

                    setNothingFound(response.status === 204)

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
        <>
            <div>
                <SearchDropDownMenu
                    menuItems={menuItems}
                    dropdownButtonIsClicked={dropdownButtonIsClicked}
                    handleDropdownClick={handleDropdownClick}
                    handleSearchInput={handleSearchInput}
                />
                {nothingFound ? renderNoResultFound() : renderSearchResult()}
            </div>
        </>
    )
}