import { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import { toast } from 'react-toastify'

export const handleErrors = (error: FetchBaseQueryError) => {
    if (error) {
        switch (error.status) {
            case 'FETCH_ERROR':
            case 'PARSING_ERROR':
            case 'CUSTOM_ERROR':
            case 'TIMEOUT_ERROR':
                toast(error.error, { theme: 'colored', type: 'error' })
                break

            case 400:
                if (typeof error.data === "object" && error.data !== null && "status_message" in error.data && typeof error.data.status_message === 'string') {
                    const errorMessage = error.data.status_message
                    toast(errorMessage, { theme: 'colored', type: 'error' })
                } else {
                    toast(JSON.stringify(error.data), { theme: 'colored', type: 'error' })
                }
                break

            case 404:
                if (typeof error.data === "object" && error.data !== null && "status_message" in error.data && typeof error.data.status_message === 'string') {
                    toast(error.data.status_message, { theme: 'colored', type: 'error' })
                } else {
                    toast(JSON.stringify(error.data), { theme: 'colored', type: 'error' })
                }
                break

            case 401:
            case 429:
                if (typeof error.data === "object" && error.data !== null && "status_message" in error.data && typeof error.data.status_message === 'string') {
                    toast(error.data.status_message, { theme: 'colored', type: 'error' })
                } else {
                    toast(JSON.stringify(error.data), { theme: 'colored', type: 'error' })
                }
                break
        }
    }
}