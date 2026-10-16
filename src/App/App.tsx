import {Header} from "@/common/components/Header/Header.tsx";
import { ThemeProvider } from '@mui/material/styles'
import {getTheme} from "@/common/theme";
import {selectThemeMode} from "@/App/app-slice.ts";
import {useAppSelector} from "@/common/hooks";
import { Box } from "@mui/material"
import "./App.css"
import {Rouring} from "@/common/routing/Rouring.tsx";
import Footer from "@/common/components/footer/Footer.tsx";
import { ToastContainer } from 'react-toastify'

const App = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const theme = getTheme(themeMode)

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{bgcolor: "background.default", color: "text.primary", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
                <Box sx={{ bgcolor: "background.paper" }}>
                    <Header />
                </Box>
                <Rouring />
                <Box sx={{ bgcolor: "background.paper",fontSize: "14px",color: "text.secondary", mt: "auto" }}>
                  <Footer />
                </Box>
            </Box>
            <ToastContainer/>
        </ThemeProvider>
    )
}

export default App
















