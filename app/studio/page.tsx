"use client"

export default function DashboardPage() {

    return(
        <div>
            <div className="h-screen flex justify-center items-center p-4">
                <div className="flex-1 mx-2 bg-white rounded shadow-lg p-4 h-full overflow-auto">
                    <p className="text-gray-700">This is Card 1's content.</p>
                </div>
                <div className="flex-1 mx-2 bg-white rounded shadow-lg p-4 h-full overflow-auto">

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
                            <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-blue-500 border-b border-blue-400">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="bg-blue-600 border-b border-blue-400">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>
                                <td className="px-6 py-4">
                                    Laptop PC
                                </td>
                                <td className="px-6 py-4">
                                    $1999
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="bg-blue-500 border-b border-blue-400">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">
                                    Black
                                </td>
                                <td className="px-6 py-4">
                                    Accessories
                                </td>
                                <td className="px-6 py-4">
                                    $99
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="bg-blue-600 border-b border-blue-400">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                    Google Pixel Phone
                                </th>
                                <td className="px-6 py-4">
                                    Gray
                                </td>
                                <td className="px-6 py-4">
                                    Phone
                                </td>
                                <td className="px-6 py-4">
                                    $799
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="bg-blue-500 border-blue-40">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                    Apple Watch 5
                                </th>
                                <td className="px-6 py-4">
                                    Red
                                </td>
                                <td className="px-6 py-4">
                                    Wearables
                                </td>
                                <td className="px-6 py-4">
                                    $999
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </div>
    )
}