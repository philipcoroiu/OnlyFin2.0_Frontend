"use client"

import {useEffect, useState} from "react";
import SearchDropDownMenu from "@/app/explore/components/SearchDropDownMenu";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import SearchResult from "@/app/explore/components/SearchResult";
//import {Layout, Responsive, WidthProvider} from "react-grid-layout";

export default function Page() {

    //const ResponsiveGridLayout = WidthProvider(Responsive)

    /*
    const layouts: {lg: Layout[]} = {
        lg: [
            {i: '1', x: 0, y: 0, w: 1, h: 2},
            {i: '2', x: 1, y: 0, w: 3, h: 2},
            {i: '3', x: 4, y: 0, w: 1, h: 2},
        ],
    };
     */

    const [dropdownButtonIsClicked, setDropdownButtonIsClicked] = useState(false);
    const [dropdownChoice, setDropdownChoice] = useState("Users");
    //const menuItems: string[] = ["Users", "Stocks"]

    const [nothingFound, setNothingFound] = useState<boolean>(false)
    const [usernameSearchQuery, setUsernameSearchQuery] = useState<string>()
    const [stockSearchQuery, setStockSearchQuery] = useState<string>()
    const [searchResult, setSearchResult] = useState<OnlyfinProfileSubInfo[]>();

    const [stockDropdownSearchSuggestions, setStockDropdownSearchSuggestions] = useState<OnlyfinStock[] | undefined>();

    useEffect(() => {
        setNothingFound(false)
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

                const noResultFound = response.status === 204
                setNothingFound(noResultFound)

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

                    setNothingFound(response.status === 204)

                    setSearchResult(profiles)
                })
                .catch(error => {
                    console.log("[explore/page.tsx]: " + error)
                })
        }
    }

    function fetchStockBySearchInput() {
        if(stockSearchQuery) {
            ApiCalls.findStocksByName(stockSearchQuery)
                .then((response) => {
                    setStockDropdownSearchSuggestions(response.data)
                })
        }
    }

    function handleDropdownClick() {
        setDropdownButtonIsClicked(oldValue => !oldValue);
    }

    function handleSearchInput(searchQuery: string) {
        if (dropdownChoice === "Users") {
            setUsernameSearchQuery(searchQuery)
        }
        else if (dropdownChoice === "Stocks") {
            if (searchQuery === "") {
                setStockDropdownSearchSuggestions(undefined)
            }
            else {
                setStockSearchQuery(searchQuery)
                fetchStockBySearchInput()
            }
        }
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

    function handleUserClick() {
        setDropdownChoice("Users")
        setDropdownButtonIsClicked(false)
    }

    function handleStockClick() {
        setDropdownChoice("Stocks")
        setDropdownButtonIsClicked(false)
    }

    function handleStockSuggestionClick(stockIdChoice: number) {
        setNothingFound(false)

        ApiCalls.findAnalystsThatCoverStock(stockIdChoice)
            .then((response) => {
                if(response.data.length === 0) {
                    setNothingFound(true)
                } else {
                    setSearchResult(response.data)
                }
            })

        setStockDropdownSearchSuggestions(undefined)
    }

    return (
        <>
            <div>
                <SearchDropDownMenu
                    //menuItems={menuItems}
                    dropdownButtonIsClicked={dropdownButtonIsClicked}
                    handleDropdownClick={handleDropdownClick}
                    handleSearchInput={handleSearchInput}
                    handleUserClick={handleUserClick}
                    handleStockClick={handleStockClick}
                    dropdownChoice={dropdownChoice}
                    stockDropdownSearchSuggestions={stockDropdownSearchSuggestions}
                    handleStockSuggestionClick={handleStockSuggestionClick}
                />
                {nothingFound ? renderNoResultFound() : renderSearchResult()}
            </div>
        </>
    )
}