import { useContext } from "react"

import Input from "./Input"
import Radio from "./Radio"
import Select from "./Select"
import Group from "./Group"
import Wrapper from "./Wrapper"
import DataContext from "../context/DataContext"
import Toggle from "./Toggle"
import Switch from "./Switch"



const Preview = () => {

    const { formData } = useContext(DataContext)
    formData?.sort((a, b) => a.sort - b.sort);

    const formSubmit = (e) => {
        e.preventDefault()
        console.log("Submit")
    }

    return (
        <div className="min-h-screen h-max flex flex-col items-center justify-center mt-14 mb-10">
            <form className="w-full" onSubmit={formSubmit}>
                {formData?.map((elem) => {
                    switch (elem.uiType) {
                        case "Input":
                            return (
                                <Wrapper>
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
                                </Wrapper>
                            )
                        case "Select":
                            return (
                                <Wrapper>
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
                                </Wrapper>
                            )
                        case "Radio":
                            return (
                                <Wrapper>
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
                                </Wrapper>
                            )
                        case "Group":
                            return (
                                <Wrapper>
                                    <Group
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
                                </Wrapper>
                            )
                        case "Switch":
                            return (
                                <Wrapper>
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
                                </Wrapper>
                            )
                    }
                })}
                {formData && Object.keys(formData[0]).length > 0 &&
                    <div className="w-[90%] flex justify-end items-center mt-6">
                        <div>
                            <button className="bg-transparent text-sm text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded-xl mr-3">
                                Cancel
                            </button>
                            <button type="submit" className="bg-gray-800 text-sm text-white font-medium py-2 px-4  rounded-xl">
                                Submit
                            </button>
                        </div>
                    </div>
                }
            </form>
        </div>
    )
}

export default Preview