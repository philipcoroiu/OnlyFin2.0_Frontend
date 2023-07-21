"use client"

import {useEffect} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";

/**
 * Used for testing API endpoints. Just change the ApiCalls.method()
 */
export default function test() {

    useEffect(() => {
      ApiCalls.updateProfilePicture(2)
          .then((response) => {
              console.log(response.data)
      })
          .catch(error => {
              document.write(error)
          })
    }, [])

    return (
        <>
            <h1 className="text-center text-lg p-2">Test page for API calls</h1>
            <p className="text-center text-lg">Check console for output</p>
        </>
    )
}