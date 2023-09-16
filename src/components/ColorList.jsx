import SingleColor from './SingleColor'
import { nanoid } from 'nanoid'
const ColorList = ({ colors, handleIsCopy }) => {
  return (
    <section className="colors">
      {colors.map((color) => {
        return (
          <SingleColor
            {...color}
            hex={color.hexString()}
            key={nanoid()}
            handleIsCopy={handleIsCopy}
          />
        )
      })}
    </section>
  )
}
export default ColorList
