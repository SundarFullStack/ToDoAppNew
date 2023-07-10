import React from 'react';


export default function TextInput({placeholder='',type1='',className='',id=''}){

    return (
        

        <div className="col-md-5">
                    <input type={type1} placeholder={placeholder} id={id} className={className}/>
                </div>
              
   
    );
}

