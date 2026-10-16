import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type Props = {
    count: number;
    query:string
    setNamberPage: (namberPage:number) => void;
}
export function PaginationOutlined({count,query,setNamberPage}: Props) {

    const handlePageChange = (value: number) => {
        setNamberPage(value)
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        query && count > 1 &&
        <Stack spacing={2}>
            <Pagination
                count={count}
                variant="outlined" color="primary"
                onChange={(_, value) => handlePageChange(value)}/>
        </Stack>
    );
}