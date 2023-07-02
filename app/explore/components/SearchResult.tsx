"use client"


export default function SearchResult(props : any) {

    function searchResult() {
        if (props.searchResult) {
            return props.searchResult.map((data: any, index: number) => {
                return (
                    <div key={index} className="bg-gray-200 rounded-lg p-4">
                        <h3 className="text-xl font-bold">Card 4</h3>
                        <p></p>
                    </div>
                );
            });
        } else {
            return <div>Loading</div>;
        }
    }

    return(
        <div className="mx-auto my-10 px-4 sm:px-6 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-200 rounded-lg p-4">
                    <h3 className="text-xl font-bold">Card 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bg-gray-200 rounded-lg p-4">
                    <h3 className="text-xl font-bold">Card 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bg-gray-200 rounded-lg p-4">
                    <h3 className="text-xl font-bold">Card 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bg-gray-200 rounded-lg p-4">
                    <h3 className="text-xl font-bold">Card 4</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                {searchResult()}

            </div>
        </div>

    )
}