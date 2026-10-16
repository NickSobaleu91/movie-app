import {Box, Button} from "@mui/material";

type Props = {
        selectedGenres:number[];
        setSelectedGenres:React.Dispatch<React.SetStateAction<number[]>>
}


export const GenreFilter = ({selectedGenres,setSelectedGenres}:Props) => {

        const buttons = [
                { id: 28, name: "Action" },
                { id: 12, name: "Adventure" },
                { id: 16, name: "Animation" },
                { id: 35, name: "Comedy" },
                { id: 80, name: "Crime" },
                { id: 99, name: "Documentary" },
                { id: 18, name: "Drama" },
                { id: 10751, name: "Family" },
                { id: 14, name: "Fantasy" },
                { id: 36, name: "History" },
                { id: 27, name: "Horror" },
                { id: 10402, name: "Music" },
                { id: 9648, name: "Mystery" },
                { id: 10749, name: "Romance" },
                { id: 878, name: "Science Fiction" },
                { id: 10770, name: "TV Movie" },
                { id: 53, name: "Thriller" },
                { id: 10752, name: "War" },
                { id: 37, name: "Western" },
        ];


        const addHandler = (id:number) => {
            if(!selectedGenres.includes(id))    {
                    setSelectedGenres(prev => [...prev,id])
            } else {
                    setSelectedGenres(prev => prev.filter(x => x !== id))
            }
        }

        return (
        <Box   sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                rowGap: "10px",
                marginBottom: "40px",
        }}>
                {buttons.map(button => (
                        <Button
                            onClick={() =>addHandler(button.id)}
                            key={button.id}
                            variant={selectedGenres.includes(button.id) ? "contained" : "outlined"}
                            sx={{
                                    borderRadius: "20px",
                                    textTransform: "none",
                                    minWidth: "auto",

                                    bgcolor: selectedGenres.includes(button.id)
                                        ? "primary.main"
                                        : "action.hover",

                                    color: selectedGenres.includes(button.id)
                                        ? "primary.contrastText"
                                        : "text.primary",

                                    "&:hover": {
                                            bgcolor: selectedGenres.includes(button.id)
                                                ? "primary.dark"
                                                : "action.selected",
                                    }
                            }}
                        >
                                {button.name}
                        </Button>
                ))}
        </Box>
    );
};

