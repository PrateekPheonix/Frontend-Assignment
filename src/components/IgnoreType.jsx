import React, { useContext } from 'react'

import TabContext from '../context/TabContext'
import Input from "./Input"
import Radio from "./Radio"
import Select from "./Select"
import Switch from "./Switch"

const IgnoreType = ({
    label,
    description,
    required,
    immutable,
    name,
    icon,
    level,
    placeholder,
    parent,
    subParameters,
    conditions
}) => {

    const { tabValue } = useContext(TabContext)

    return (
        <div className="w-[90%] py-4 m-auto">
            {tabValue && conditions[0].value == tabValue ?
                <>
                    <div className="font-bold border-b-2 pb-4 mb-4">
                        {label}
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        {
                            subParameters.map((elem) => {
                                switch (elem.uiType) {
                                    case "Input":

                                        return (
                                            <Input
                                                key={elem.label}
                                                label={elem.label}
                                                description={elem.description}
                                                required={elem.validate.required == true ? "required" : ""}
                                                immutable={elem.validate.immutable == true ? "readOnly" : ""}
                                                name={parent + "_" + elem.jsonKey}
                                                icon={elem.icon}
                                                level={elem.level}
                                                placeholder={elem.placeholder}
                                            />
                                        )
                                    case "Select":
                                        return (
                                            <Select
                                                key={elem.label}
                                                label={elem.label}
                                                description={elem.description}
                                                required={elem.validate.required == true ? "required" : ""}
                                                immutable={elem.validate.immutable == true ? "readOnly" : ""}
                                                options={elem.validate.options}
                                                defaultValue={elem.validate.defaultValue}
                                                name={parent + "_" + elem.jsonKey}
                                                icon={elem.icon}
                                                level={elem.level}
                                                placeholder={elem.placeholder}
                                            />
                                        )
                                    case "Radio":
                                        return (
                                            <Radio
                                                key={elem.label}
                                                label={elem.label}
                                                description={elem.description}
                                                required={elem.validate.required == true ? "required" : ""}
                                                immutable={elem.validate.immutable == true ? "readOnly" : ""}
                                                options={elem.validate.options}
                                                defaultValue={elem.validate.defaultValue}
                                                name={parent + "_" + elem.jsonKey}
                                                icon={elem.icon}
                                                level={elem.level}
                                                placeholder={elem.placeholder}
                                            />
                                        )
                                    case "Switch":
                                        return (
                                            <Switch
                                                key={elem.label}
                                                label={elem.label}
                                                description={elem.description}
                                                required={elem.validate.required == true ? "required" : ""}
                                                immutable={elem.validate.immutable == true ? "readOnly" : ""}
                                                name={parent + "_" + elem.jsonKey}
                                                icon={elem.icon}
                                                level={elem.level}
                                                placeholder={elem.placeholder}
                                                defaultValue={elem.validate.defaultValue}
                                            />
                                        )
                                }
                            })
                        }
                    </div></> : <></>
            }

        </div>
    )
}

export default IgnoreType