import { useContext, useState } from "react"

import Desc from "./Desc"
import OutputContext from "../context/OutputContext"

const Input = ({
    label,
    description,
    required,
    immutable,
    name,
    icon,
    level,
    placeholder,
}) => {


    const [isHovering, setIsHovering] = useState(false)
    const [input, setInput] = useState()
    const { outputData, setOutputData } = useContext(OutputContext)

    const handleChange = (e) => {
        setInput(e.target.value)
        outputData[name] = input
    }


    return (
        <div className="w-[90%] py-4 m-auto">
            <label className='flex items-center justify-between'>
                <span className='text-black-200 text-sm mr-2 flex'>
                    {label} &nbsp;
                    {description &&
                        <div onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
                            <img className="w-[14px] h-[14px] cursor-help" src="https://img.icons8.com/material-outlined/14/null/info--v1.png" />
                        </div>
                    }
                </span>
                {isHovering && <Desc desc={description} />}
                <input
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    readOnly={immutable}
                    onChange={handleChange}
                    className="border-solid border-2 border-blue-200 bg-[#dff0ff] w-[50%] px-3 py-2 text-sm rounded-md"
                />
            </label>
        </div>

    )
}

export default Input