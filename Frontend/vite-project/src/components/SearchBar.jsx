
import { Button, TextInput } from "flowbite-react";
import { useState } from "react";



const SearchBar = () => {
    const [search, setSearch] = useState('')

    const handleSearchResult = (e) => {
        e.preventDefault();
        console.log(search)
    }

    return (
        <>

            <form onSubmit={handleSearchResult} className="flex flex-row justify-center w-[50%] m-auto">
                <div className="w-[70%]">
                    <label htmlFor="search" className="sr-only">Search</label>
                    
                    <TextInput id="search" type="search" placeholder="Find the latest blogs" required onChange={(e) => {
                        setSearch(e.target.value)
                    }} />
                </div>
                <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[30%]">Search</button>

            </form>

        </>
    )
}

export { SearchBar }