import Skeleton from "@mui/material/Skeleton"
import Box from "@mui/material/Box"

type Props = {
    variant?: "default" | "similar"
}

export const MovieCardSkeleton = ({ variant = "default" }: Props) => {
    const width = variant === "similar" ? 180 : 240
    const height = variant === "similar" ? 280 : 350

    return (
        <Box sx={{ width, flexShrink: 0 }}>
            <Skeleton variant="rounded" width={width} height={height} animation="wave" sx={{ borderRadius: "20px" }}/>
            <Skeleton variant="text" width="80%" height={28} sx={{ mt: 1 }}/>
        </Box>
    )
}