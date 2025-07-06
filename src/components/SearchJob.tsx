import TextField from "@mui/material/TextField"
import {Close, Search} from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"
import { useState } from "react"

interface SearchJobProps {
    search: string,
    setSearch: (text: string) => void
}

const SearchJob:React.FC<SearchJobProps> = ({search, setSearch}:SearchJobProps) => {
    const [value, setValue] = useState("")

    return (
        <section className="flex flex-row justify-center items-center">
            <TextField id="search-job" label="Search Job" variant="outlined" onChange={(e) => setValue(e.target.value)} />
            {
                value != search
                ?
                    <IconButton onClick={() => setSearch(value)}>
                        <Search  />
                    </IconButton>
                : 
                <IconButton onClick={() => {setValue(""); setSearch("")}}>
                    <Close  />
                </IconButton>
            }
        </section>
    )
}

export default SearchJob