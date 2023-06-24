    import React from 'react';

    export default function (){

        return   <div className='container'>
        
        <div className='row'>

                <div className='col-lg-4'>
                    <div className='card mt-4'>
                    <h5><span className='form_header mt-10'>Application Form</span></h5>
                    {/* First Name */}
                    <div className='formInputs form-group mt-5'>
                        <div className='col-md-10'>
                            <label forName='firstName' className='label'>First Name:</label>
                            <input className='form-control mb-3' type='text' id='Vlaidation1' placeholder='First Name'required/>
                        </div>
                    </div>
                    {/* Second Name */}
                    <div className='formInputs form-group'>
                        <div className='col-md-10'>
                            <label forName='secondName' className='label'>Second Name:</label>
                            <input className='form-control mb-3' type='text' id='Vlaidation2' placeholder='Second Name'required/>
                        </div>
                    </div>

                    {/* Address Line ! */}

                    <div className='formInputs form-group'>
                        <div className='col-md-10'>
                            <label forName='adressLine1' className='label'>Address Line1:</label>
                            <input className='form-control mb-3' type='text' id='Validation3' placeholder='Address Line 1'required/>
                        </div>
                    </div>

                    {/* Address Line 2 */}

                    <div className='formInputs form-group'>
                        <div className='col-md-10'>
                            <label forName='adressLine2' className='label'>Address Line2:</label>
                            <input className='form-control mb-3' type='text' id='Validation4' placeholder='Address Line 2'required/>
                        </div>
                    </div>

                    {/* PinCode */}

                    <div className='formInputs form-group'>
                        <div className='col-md-10'>
                            <label forName='pincode' className='label'>Pincode:</label>
                            <input className='form-control mb-3' type='text' id='Validation5' placeholder='Pincode'required/>
                        </div>
                    </div>

                    {/* Gender */}

                      <b>Gender:</b>
                    <div className='form-check mt-2'>
                        <input type='radio'className='form-check-input' id='form_input'name='radioInput'/>
                        <label forName='Male' className='radio_label form-check-label'>Male</label>
                  
                    </div>
                    <div className='form-check mt-2'>
                    <input type='radio'className='form-check-input' id='form_input'name='radioInput'/>
                        <label forName='Female' className='radio_label form-check-label'>Female</label>
                        </div>

                        {/* Choice Of Food */}

                        <div className='food mt-3'>
                         Choice Of Food
                            <small>(Choose of atleast two of five)</small>:
                        </div>

                        <div className='form-check mt-2'>
                    <input type='checkbox'className='form-check-input' id='form_input'name='checkbox1'/>
                        <label forName='southIndian' className='check_label form-check-label'>South Indian</label>
                        </div>
                        <div className='form-check mt-2'>
                    <input type='checkbox'className='form-check-input' id='form_input'name='checkbox2'/>
                        <label forName='Female' className='check_label form-check-label'>North Indian</label>
                        </div>

                        <div className='form-check mt-2'>
                    <input type='checkbox'className='form-check-input' id='form_input'name='checkbox3'/>
                        <label forName='chinese' className='check_label form-check-label'>Chinese Food</label>
                        </div>

                        <div className='form-check mt-2'>
                    <input type='checkbox'className='form-check-input' id='form_input'name='checkbox4'/>
                        <label forName='american' className='check_label form-check-label'>American Food</label>
                        </div>

                        <div className='form-check mt-2'>
                    <input type='checkbox'className='form-check-input' id='form_input'name='checkbox5'/>
                        <label forName='japan' className='check_label form-check-label'>Japanese Food</label>
                        </div>

                        {/* State */}
                        <form className='form mt-3'>

                        <label forName='state'><b>Select your state:</b></label>
                        <select name='state' className='state ml-2' id='state'>

                            <option value='Tamil Nadu'></option>
                            <option value='Tamil Nadu'>Tamil Nadu</option>
                            <option value='Tamil Nadu'>Andhra</option>
                            <option value='Tamil Nadu'>Kerala</option>
                            <option value='Tamil Nadu'>Karnataka</option>
                            <option value='Tamil Nadu'>Telugana</option>
                        </select>
                        </form>

                        {/* country */}

                         <form className='form mt-3'>

                        <label forName='Country'><b>Select your Country:</b></label>
                        <select name='Country' className='Country ml-2' id='Country'>

                            <option value='India'></option>
                            <option value='India'>India</option>
                            <option value='Tamil Nadu'>America</option>
                            <option value='Tamil Nadu'>Antartica</option>
                            <option value='Tamil Nadu'>China</option>
                            <option value='Tamil Nadu'>Thailand</option>

                        </select>
                        </form>

                        {/* submit button */}

                        <div className='button'>
                        <button type='button' className='btn btn-success btn-sm'>Submit</button>
                        <button type='button' className='btn btn-danger btn-sm'>Clear</button>
                        </div>

                       

                


                </div>
                </div>

                {/* function for submit */}

                {/* function valuedetector(){

                    console.log(Validation5)
                } */}
            
                <div className='col-lg-8'>
                    <h4 className='table_header mt-3'>Temporary Database</h4>
                </div>
        
        </div>

        </div>


    

    }