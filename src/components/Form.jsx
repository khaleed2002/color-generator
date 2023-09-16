import { useState } from 'react'

const Form = ({ onSubmit }) => {
  const [color, setColor] = useState('#f15025')
  const handleColor = (e) => {
    setColor(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(color)
  }
  return (
    <form onSubmit={handleSubmit} className="color-form">
      <input
        type="color"
        name="color"
        id="color"
        value={color}
        onChange={handleColor}
      />
      <input
        type="text"
        name="text"
        id="text"
        value={color}
        onChange={handleColor}
      />
      <button type="submit" className="btn" style={{ backgroundColor: color }}>
        Submit
      </button>
    </form>
  )
}
export default Form
