import clipboard from 'clipboard-copy'

const SingleColor = ({ hex, type, weight, handleIsCopy }) => {
  const handleCopy = async () => {
    try {
      await clipboard(hex)
      handleIsCopy(true)
    } catch (err) {
      handleIsCopy(false)
    }
  }
  return (
    <div
      className={`color ${type === 'shade' ? 'color-light' : ''}`}
      style={{ backgroundColor: hex }}
      onClick={handleCopy}
    >
      <p className="percent-value">{weight}</p>
      <p className="color-value">{hex}</p>
    </div>
  )
}
export default SingleColor
