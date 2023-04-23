import { useState, useRef, useContext } from 'react'
import DataContext from '../context/DataContext.jsx'

const Editor = () => {

    const formRef = useRef()

    const [inputData, setInputData] = useState("")

    const { setFormData } = useContext(DataContext)


    const handleChange = (e) => {
        setInputData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setFormData(JSON.parse(inputData))
        } catch (error) {
            alert('Invalid JSON Input Data')
        }
    }



    return (
        <div className="min-h-screen h-max">
            <div className='p-8 rounded-2xl'>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-black-200 font-bold text-lg mb-2'>Enter UI-Schema</span>
                        <textarea
                            rows="28"
                            name="data"
                            value={inputData}
                            onChange={handleChange}
                            placeholder="UI Schema"
                            className='py-4 px-6 border-solid border-2 text-sm rounded font-medium'
                        />
                    </label>

                    <button type='submit' className='bg-[#151030] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Editor