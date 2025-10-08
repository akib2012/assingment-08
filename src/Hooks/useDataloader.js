import { useEffect, useState } from "react"
import axios from "axios";
export const useDataloader = () => {
    const [fetchdata, setFetchdata] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        axios('/appdata.json')
            .then(data => setFetchdata(data.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))

    }, [])
    return { fetchdata, error, loading }
}


