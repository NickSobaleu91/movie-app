import { ThemeMode } from "@/App/app-slice.ts"
import { createTheme } from "@mui/material/styles"

export const getTheme = (themeMode: ThemeMode) => {
    return createTheme({
        palette: {
            mode: themeMode,
            primary: {
                main: "#087EA4",
            },
            background: {
                default: themeMode === "light"
                    ? "#ffffff"
                    : "#0b1220",
                paper: themeMode === "light"
                    ? "#f3f4f6"
                    : "#111b2e",
            },
        },
    })
}