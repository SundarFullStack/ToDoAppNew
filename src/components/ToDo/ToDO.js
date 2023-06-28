// import React ,{useState} from 'react';


// export default function ToDo(){

//   const [print,setPrint] = useState([]);

//   function handleToDO(){

//     let input_value = document.getElementById('text');

//     console.log(input_value.value);

//     let print_copy = [...print];

//     print_copy.push(input_value.value);

//     setPrint(input_value.value)


//   }

//   return (
//     <div>
//   <div className='form'>

//     <input  id='text'placeholder='enter your text'/>
//     <button type='button' onClick={handleToDO}>Print</button>
//       </div>

//      <div>
//       <ul>{print.map((d,i)=> 
//       (<li key={i}>{d}</li>))}
//       </ul>
//      </div>
//      </div>
//      )
// }