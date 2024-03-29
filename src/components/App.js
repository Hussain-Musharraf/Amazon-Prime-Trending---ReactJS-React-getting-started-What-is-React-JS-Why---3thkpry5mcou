import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {
  const [getForm,setForm]=useState(props.slides[0])
  const [getCount,setCount]=useState(0);

  const onNextHandler=()=>{
    if(getCount+1<props.slides.length){
      setCount(getCount+1);
      setForm(props.slides[getCount+1])
    }
  }

  const onPreviousHandler=()=>{
    if(getCount>=0){
      setCount(getCount-1);
      setForm(props.slides[getCount-1]);
    }
  }
  const onRestartHandler=()=>{
    setCount(0);
    setForm(props.slides[0]);
  }

  return (
    <>
    <h1 data-testid="title">{getForm.title}</h1>
    <p data-testid="text">{getForm.text}</p>
    <button disabled={getCount==0} data-testid="button-restart" onClick={onRestartHandler}>Restart</button>
    <button disabled={getCount==0} data-testid="button-prev" onClick={onPreviousHandler}>Prev</button>
    <button disabled={getCount==props.slides.length-1}  data-testid="button-next" onClick={onNextHandler}>Next</button>
    </>
  )
}


export default App;




// import React, {Component, useState} from "react";
// import '../styles/App.css';

// function App(props) {
  
//   const [slides, setSlides] = useState(props.slides);
//   const [index, setIndex] = useState(0);

//     return (
//       <div id='main'>
//         <div className="nav">
//           <button data-testid="button-restart" disabled={index === 0} onClick={() => (setIndex(0))}>Restart</button>
//           <button data-testid="button-prev" disabled={index === 0} onClick={() => (setIndex(index - 1))}>Prev</button>
//           <button data-testid="button-next" disabled={index === props.slides.length - 1} onClick={() => (setIndex(index + 1))}>Next</button>
//         </div> 
//         <div className='slide'>
//           <h1 data-testid="title">{slides[index].title}</h1>
//           <p data-testid="text">{slides[index].text}</p>
//         </div>
//       </div>
//     );

// }

// export default App;
