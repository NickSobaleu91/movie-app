import {IconButton, InputAdornment, TextField} from "@mui/material"
import s from "./searchMovies.module.css"
import ClearIcon from "@mui/icons-material/Clear";

type Props = {
    inputValue: string
    handleInputChange: (value: string) => void
    handleSearch: () => void
}

const SearchMovies = ({inputValue, handleInputChange, handleSearch,}: Props) => {
    return (
        <div className={s.searchWrapper}>
            <TextField
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Search for a movie"
                variant="outlined"
                size="small"
                className={s.searchInput}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        backgroundColor: "background.paper",
                        color: "text.primary",
                        borderRadius: "25px",
                    },
                    "& .MuiInputBase-input::placeholder": {
                        color: "text.secondary",
                        opacity: 1,
                    },
                }}
                slotProps={{// крестик в инпуте с mui
                    input: {
                        endAdornment: inputValue ? (
                            <InputAdornment position="end">
                                <IconButton
                                    size="small"
                                    onClick={() => handleInputChange("")}
                                    aria-label="Clear search"
                                >
                                    <ClearIcon fontSize="small" />
                                </IconButton>
                            </InputAdornment>
                        ) : null,
                    },
                }}
            />
            <button disabled={!inputValue} className={s.searchButton} onClick={handleSearch}>
                Search
            </button>
        </div>
    )
}

export default SearchMovies