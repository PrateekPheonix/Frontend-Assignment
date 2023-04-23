import { createContext, useState } from "react";

const OutputContext = createContext()

export function OutputProvider({ children }) {

    const [outputData, setOutputData] = useState()


    return (
        <OutputContext.Provider value={{ outputData, setOutputData }}>
            {children}
        </OutputContext.Provider>
    )
}

export default OutputContext