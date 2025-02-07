import { createContext, useEffect, useState } from "react";

export const dataProvider = createContext(null)
const DataProvider = ({ children }) => {
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('/project.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    console.log('details', details);

    const transferData = {
        details
    }

    return (
        <dataProvider.Provider value={transferData}>
            {children}
        </dataProvider.Provider>
    );
};

export default DataProvider;