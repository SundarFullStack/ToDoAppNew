    import React,{useState} from 'react';

    export default function ReactForm(){

        // first name

        const [data,setData] = useState(null);
        const [print,setPrint] =useState('')

        function getData(val){

            setData(val.target.value);

            setPrint(false);

        }

         // second name

         const [data1,setData1] = useState(null);
 
         function getData1(val1){
 
             setData1(val1.target.value);
 
             setPrint(false);
 
         }

         //Address

         const [data2,setData2] = useState(null);

         function Address(val2){

            setData2(val2.target.value);

            setPrint(false);
         }

         //village

         const [data3,setData3] = useState(null);

         function village(val3){

            setData3(val3.target.value);

            setPrint(false);
         }

          //pincode

          const [data4,setData4] = useState(null);

          function pincode(val4){
 
             setData4(val4.target.value);
 
             setPrint(false);
          }

        //   male & female

          let [data5,setData5] = useState(null);

          function gender(val5){
 
            setData5(val5.target.value);
        
 
             setPrint(false);
          }

        
          //state

          let [data7,setData7] = useState('');

          function states(val7){

            setData7(val7.target.value); 
            setPrint(false);

          }

          //country

          let [data8,setData8] = useState('');

          function country(val8){

            setData8(val8.target.value)
            setPrint(false);


          }


        return (  <div className='container'>
        
        <div className='row'>

                <div className='col-lg-4'>
                    <div className='card1 card mt-4'>
                    <h5><span className='form_header mt-10'>Application Form</span></h5>
                    {/* First Name */}
                    <div className='formInputs form-group mt-5'>
                        <div className='col-md-10'>
                            <label htmlFor='firstName' className='label'>First Name:</label>
                            <input className='form-control mb-3' type='text' id='Vlaidation1' placeholder='First Name' onChange={getData}required/>
                        </div>
                    </div>
                    {/* Second Name */}
                    <div className='formInputs form-group'>
                        <div className='col-md-10'>
                            <label htmlFor='secondName' className='label'>Second Name:</label>
                            <input className='form-control mb-3' type='text' id='Vlaidation2' placeholder='Second Name' onChange={getData1} required />
                        </div>
                    </div>

                    {/* Address Line ! */}

                    <div className='formInputs form-group'>
                        <div className='col-md-10'>
                            <label htmlFor='adressLine1' className='label'>Address Line1:</label>
                            <input className='form-control mb-3' type='text' id='Validation3' placeholder='Address Line 1' onChange={Address} required/>
                        </div>
                    </div>

                    {/* Village */}

                    <div className='formInputs form-group'>
                        <div className='col-md-10'>
                            <label htmlFor='Village' className='label'>Village:</label>
                            <input className='form-control mb-3' type='text' id='Validation4' placeholder='Village' onChange={village}required/>
                        </div>
                    </div>

                    {/* PinCode */}

                    <div className='formInputs form-group'>
                        <div className='col-md-10'>
                            <label htmlFor='pincode' className='label'>Pincode:</label>
                            <input className='form-control mb-3' type='text' id='Validation5' placeholder='Pincode' onChange={pincode} required/>
                        </div>
                    </div>

                    {/* Gender */}

                      <b>Gender:</b>
                    <div className='form-check mt-2'>
                        <input type='radio'className='form-check-input'value='Male' id='form_input'name='radioInput'checked={data5='Male'}onChange={gender}/>
                        <label htmlFor='Male' className='radio_label form-check-label' >Male</label>
                  
                    </div>
                    <div className='form-check mt-2'>
                    <input type='radio'className='form-check-input'value='Female' id='form_input'name='radioInput'/>
                        <label htmlFor='Female' className='radio_label form-check-label'>Female</label>
                        </div>
                      

                        {/* State */}
                        <form className='form mt-3'>

                        <label htmlFor='state'><b>Select your state:</b></label>
                        <select name='state' className='state ml-2'value={data7} onChange={states} id='state'>

                            <option value=''></option>
                            <option value='Tamil Nadu'>Tamil Nadu</option>
                            <option value='Andhra'>Andhra</option>
                            <option value='Kerala'>Kerala</option>
                            <option value='Karnataka'>Karnataka</option>
                            <option value='Telugana'>Telugana</option>
                        </select>
                        </form>

                        {/* country */}

                         <form className='form mt-3'>

                        <label htmlFor='Country'><b>Select your Country:</b></label>
                        <select name='Country' value={data8}onChange={country}className='Country ml-2' id='Country'>

                            <option value=''></option>
                            <option value='America'>America</option>
                            <option value='India'>India</option>
                            <option value='Antartica'>Antartica</option>
                            <option value='China'>China</option>
                            <option value='Thailand'>Thailand</option>

                        </select>
                        </form>

                        {/* submit button */}

                        <div className='button'>
                        <button type='button' className='btn btn-success btn-sm' onClick={()=>setPrint(true)}>Submit</button>
                        <button type='button' onClick={()=>setPrint(false)}className='btn btn-danger btn-sm'>Clear</button>
                        </div>

                
                </div>
                </div>
            
                <div className='col-lg-8'>
                    <div className='card2 card mt-4'>
                    <h5><span className='form_header mt-10'>Temporary Database</span></h5>

                    <table className='table table-striped mt-3'>
                        <thead>
                            <tr>
                    
                                <th scope='col'>Name</th>
                                <th scope='col'>Address</th>
                                <th scope='col'>Village</th>
                                <th scope='col'>Pincode</th>
                                <th scope='col'>Gender</th>
                                <th scope='col'>State</th>
                                <th scope='col'>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                
                                <td scope='row'>{print?<p>{data} {data1}</p>:null}</td>
                                <td scope='row'>{print?<p>{data2}</p>:null}</td>
                                <td scope='row'>{print?<p>{data3}</p>:null}</td>
                                <td scope='row'>{print?<p>{data4}</p>:null}</td>
                                <td scope='row'>{print?<p>{data5}</p>:null}</td>
                                <td scope='row'>{print?<p>{data7}</p>:null}</td>
                                <td scope='row'>{print?<p>{data8}</p>:null}</td>
                             
                                

                            </tr>
                        </tbody>

                    </table>
                    </div>
                </div>
        
        </div>

        </div>


    
        )
    }