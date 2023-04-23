import Editor from './components/Editor'
import Preview from './components/Preview'

function App() {

  return (
    <div className='flex'>
      <div className='w-[28%] border-solid border-r-4 border-stone-700'>
        <Editor />
      </div>
      <div className='w-[72%]'>
        <Preview />
      </div>
    </div>
  )
}

export default App
