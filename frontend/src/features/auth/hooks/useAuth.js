import { useEffect, useState } from "react";
import api from "../../../core/api/client";

export function useAuth(){
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    useEffect( () => {
        api.get("/profile")
           .then(() => setIsAuthenticated(true))
           .catch(() => setIsAuthenticated(false))
    }, []);

    return isAuthenticated

}