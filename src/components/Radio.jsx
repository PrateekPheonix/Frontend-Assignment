import { useState, useContext, useEffect } from "react"

import Desc from "./Desc"
import TabContext from '../context/TabContext'
import OutputContext from "../context/OutputContext"


const Radio = ({
    label,
    description,
    required,
    immutable,
    name,
    icon,
    level,
    placeholder,
    options,
    defaultValue,
}) => {

    const [isHovering, setIsHovering] = useState(false)

    const { tabValue, setTabValue } = useContext(TabContext)

    const [input, setInput] = useState(defaultValue)
    const { outputData, setOutputData } = useContext(OutputContext)

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    useEffect(() => {
        if (!tabValue) {
            setTabValue(defaultValue)
        }
        outputData[name] = input
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input])


    return (
        <div className="w-[90%] py-4 m-auto">
            <div className='text-black-200 text-sm mb-6 flex '>
                {label} &nbsp;
                {description &&
                    <div onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
                        <img className="w-[14px] h-[14px] cursor-help" src="https://img.icons8.com/material-outlined/14/null/info--v1.png" />
                    </div>
                }
                {isHovering && <Desc desc={description} />}
            </div>
            <div className='flex items-center justify-around'>
                {
                    options.map((elem) => {
                        return (
                            <div key={elem.value}>
                                <input
                                    type="radio"
                                    id={elem.value}
                                    name={name}
                                    onChange={handleChange}
                                    value={elem.value}
                                    defaultChecked={elem.value === defaultValue}
                                    readOnly={immutable}
                                    onClick={() => { setTabValue(elem.value) }}
                                />
                                <label className="border-solid border-2 border-blue-200 bg-[#dff0ff] w-[30%] px-3 py-2 text-sm rounded-md cursor-pointer"
                                    htmlFor={elem.value}
                                >
                                    {elem.label}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Radio