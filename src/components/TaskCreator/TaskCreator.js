import React,{useState,useEffect, useRef} from 'react';

export function TaskCreator(){

  let [count,setCount] = useState(0);

console.log('Count Increased: ',count);

  return (<div>

    <div className="rectangle"

onClick = {()=>{
  setCount(count+1);
}}
 ><h1>{count}</h1>

    </div>
<p>{count}</p>
    </div>

  )
}



export function Learning(){


  let [keys,setKeys] = useState(['create Component','useComponent','create state','use state']);

  let todoElementValue = useRef(null);

const handleInput = (e)=>{

if(e){

  let keysCopy = [...keys];

keysCopy.push(todoElementValue.current.value);

todoElementValue.current.value = '';

setKeys(keysCopy);

}

}


  return (<div className='keypoints'>
<b>Learning Points</b>

<div className='form-group'>
  <input type="text" className='form-control col-md-4' ref={todoElementValue} />
  <button className='btn btn-primary'onClick={handleInput}>Click me to Add</button>
</div>
    <ul>
      {keys.map((d,i) => <li key={i}>{d}</li>)}
    </ul>
   

  </div>)
}

