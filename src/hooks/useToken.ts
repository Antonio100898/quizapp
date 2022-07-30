import { useEffect, useState } from "react"
import { api } from "../api/api"

export const useToken = () => {
    const [token, setToken] = useState<string | null>(null)
    useEffect(() => {
        handleToken()
    }, [])

    const handleToken = async () => {
        let item = localStorage.getItem("token")
        if (item) setToken(item)
        else {
            try {
                const response = await api.getToken()
                setToken(response.data.token)
                localStorage.setItem("token", response.data.token)
            } catch (error) {
                console.log(error);
            }
        }
    }
    return token
}