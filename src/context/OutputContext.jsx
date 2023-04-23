import { createContext, useState } from "react";

const OutputContext = createContext()

export function OutputProvider({ children }) {

    const [outputData, setOutputData] = useState({})
    const [showModal, setShowModal] = useState(false);


    return (
        <OutputContext.Provider value={{ outputData, setOutputData, showModal, setShowModal }}>
            {children}
        </OutputContext.Provider>
    )
}

export default OutputContext