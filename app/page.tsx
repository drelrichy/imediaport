

export const page = () => {
  function getRandomColor(){
    
    return "#"+((1<<24) *Math.random()| 0).toString(16);
  }

  return (
    <div className="grid grid-cols-4 gap-1">

    <div style ={{backgroundColor: `${getRandomColor()}`}}> 01</div>
    <div style ={{backgroundColor: `${getRandomColor()}`}}> 02</div>
    <div style ={{backgroundColor: `${getRandomColor()}`}}> 03</div>
    <div style ={{backgroundColor: `${getRandomColor()}`}}> 04</div>
    <div style ={{backgroundColor: `${getRandomColor()}`}}> 05</div>
    <div style ={{backgroundColor: `${getRandomColor()}`}}> 06</div>
    <div style ={{backgroundColor: `${getRandomColor()}`}}> 07</div>
    <div style ={{backgroundColor: `${getRandomColor()}`}}> 08</div>
    <div style ={{backgroundColor: `${getRandomColor()}`}}> 09</div>
    <div style ={{backgroundColor: `${getRandomColor()}`}}> 10</div>
    <div style ={{backgroundColor: `${getRandomColor()}`}}> 11</div>
    <div style ={{backgroundColor: `${getRandomColor()}`}}> 12</div>
    <div style ={{backgroundColor: `${getRandomColor()}`}}> 13</div>
    <div style ={{backgroundColor: `${getRandomColor()}`}}> 14</div>
    <div style ={{backgroundColor: `${getRandomColor()}`}}> 15</div>
    <div style ={{backgroundColor: `${getRandomColor()}`}}> 16</div>
    </div>
  )
  
}

export default page;