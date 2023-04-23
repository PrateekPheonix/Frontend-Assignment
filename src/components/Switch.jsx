import React, { useState } from 'react'

import Desc from './Desc'

const Switch = ({
    label,
    description,
    required,
    immutable,
    name,
    icon,
    level,
    placeholder,
    defaultValue
}) => {

    const [isHovering, setIsHovering] = useState(false)

    return (
        <div className="w-[90%] py-4 m-auto">
            <label className='flex items-center'>
                <input
                    type='checkbox'
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    readOnly={immutable}
                    className="w-4 h-4 rounded mr-3 bg-black text-black focus:ring-0"
                />
                <span className='text-black-200 text-sm flex'>
                    {label} &nbsp;
                    {description &&
                        <div onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
                            <img className="w-[14px] h-[14px] cursor-help" src="https://img.icons8.com/material-outlined/14/null/info--v1.png" />
                        </div>
                    }
                </span>
                {isHovering && <Desc desc={description} />}
            </label>
        </div>
    )
}

export default Switch