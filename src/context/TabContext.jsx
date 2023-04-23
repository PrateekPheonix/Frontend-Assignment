import { createContext, useState } from "react";

const TabContext = createContext()

export function TabProvider({ children }) {

    const [tabValue, setTabValue] = useState()


    return (
        <TabContext.Provider value={{ tabValue, setTabValue }}>
            {children}
        </TabContext.Provider>
    )
}

export default TabContext