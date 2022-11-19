import '../styles/grid.css'
import { useState } from 'react'

const Grid = () => {
  const [data, setData] = useState(new Array(28 * 28).fill(false))
  const [mouseState, setMouseState] = useState(false)

  const handleMouseMove = (i) => {
    if (mouseState) {
      let newArr = [...data]
      newArr[i] = true
      setData(newArr)
    }
  }

  const handleMouseDown = () => {
    setMouseState(true)
  }

  const handleMouseup = () => {
    setMouseState(false)
  }

  const handleSubmitData = () => {
    console.log(data)
  }

  const handleRefresh = () => {
    let newArr = new Array(28 * 28).fill(false)
    setData(newArr)
  }
  return (
    <div className='image-grid-container'>
      <div className='grid-container'>
        {[...Array(28 * 28)].map((e, i) => {
          let classes = `cell-${i} cell`
          if (data[i] === true) {
            classes += ' actived'
          }
          return (
            <div
              key={i}
              className={classes}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseup}
              onMouseMove={() => handleMouseMove(i)}
            ></div>
          )
        })}
      </div>
      <div className='image-button-container'>
        <button onClick={handleRefresh}>Refresh</button>
        <button onClick={handleSubmitData}>Send Data</button>
      </div>
    </div>
  )
}
export default Grid
