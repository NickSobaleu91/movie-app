import Photo from "@/assets/images/2fdc3e8077a2024240236b53fd21e36c.jpg"
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import s from './NotFound.module.css'


export const NotFound = () => {
    const theme = useTheme()

    return (
        <div className={s.container}>
            <Link to="/" className={s.monkeyLink}>
                <img src={Photo} alt="404 Not Found" />
                <span
                    className={s.goBack}
                    style={{
                        backgroundColor: theme.palette.background.default
                    }}
                >
                    GO BACK
                </span>
            </Link>

            <h1 className={s.title}>Page Not Found</h1>
        </div>
    )
}

