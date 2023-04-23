import { useContext, useEffect } from 'react'

import TabContext from '../context/TabContext'
import IgnoreType from "./IgnoreType"
import Input from "./Input"
import Radio from "./Radio"
import Select from "./Select"
import Switch from "./Switch"

const Group = ({
    label,
    description,
    required,
    immutable,
    name,
    icon,
    level,
    placeholder,
    subParameters
}) => {

    const { tabValue } = useContext(TabContext)

    useEffect(() => {
        console.log(tabValue)
    }, [tabValue])

    return (
        <div className="w-[90%] py-4 m-auto">
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
                                        name={elem.jsonKey}
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
                                        name={elem.jsonKey}
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
                                        name={elem.jsonKey}
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
                                        name={elem.jsonKey}
                                        icon={elem.icon}
                                        level={elem.level}
                                        placeholder={elem.placeholder}
                                        defaultValue={elem.validate.defaultValue}
                                    />
                                )
                            case "Ignore":
                                if (elem.conditons?.value == tabValue) {
                                    console.log(elem.label)
                                    return (
                                        <IgnoreType
                                            key={elem.label}
                                            label={elem.label}
                                            description={elem.description}
                                            required={elem.validate.required == true ? "required" : ""}
                                            immutable={elem.validate.immutable == true ? "readOnly" : ""}
                                            name={elem.jsonKey}
                                            icon={elem.icon}
                                            level={elem.level}
                                            placeholder={elem.placeholder}
                                            subParameters={elem.subParameters}
                                        />
                                    )
                                }
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Group