import Form from './components/Form'
import ColorList from './components/ColorList'
import Values from 'values.js'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10))
  const onSubmit = (color) => {
    try {
      const newColors = new Values(color).all(10)
      setColors(newColors)
    } catch (err) {
      toast.error(err.message)
    }
  }
  const handleIsCopy = (isCopied) => {
    if (isCopied) {
      toast.success('Color Copied successfully!')
    } else {
      toast.error('Error when copy')
    }
  }
  return (
    <main>
      <section className="container">
        <h4>Color Generator</h4>
        <Form onSubmit={onSubmit} />
      </section>
      <ColorList colors={colors} handleIsCopy={handleIsCopy} />
      <ToastContainer position="top-center" />
    </main>
  )
}
export default App
