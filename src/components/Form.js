import React, { useState,useRef } from 'react'
import Table from './Table'
import DisplayFields from './DisplayFields';


export default function Form() {

    
    const [profile, setprofile] = useState("Select")
    const [field, setfield] = useState('Set Field Type')
    const [datatype, setdatatype] = useState("String");
    const [mandatory, setMandatory] = useState("No");
    const [displayName, setDisplayName] = useState("");
    const [textData, setTextData] = useState("");
    const [dateData, setDateData] = useState("");
    const [fieldLen, setfieldLen] = useState("")

    const [rows, setRows] = useState([]);
    const serialNumberCounter = useRef(1);

    const formRef = useRef(null);
    const [listInput, setListInput] = useState('');

    const [formFields, setFormFields] = useState({
    // Initial state, you can customize as needed
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
  });

  

  

    const handleListInputChange = (event) => {
    setListInput(event.target.value);
    
  };
    const handleDisplayInputChange = (event) => {
    setDisplayName(event.target.value);
    
  };
    const handleTextField = (event) => {
    setTextData(event.target.value);
    
  };
    const handleDateField = (event) => {
    setDateData(event.target.value);
    
  };
    const handleFieldLen = (event) => {
    setfieldLen(event.target.value);
    
  };
   
    const createProfile =(event) =>{
        
        setprofile(event.target.value)
    }

    const createField =(event) =>{
        setfield(event.target.value)
        if (event.target.value==="Date Picker") {
        setdatatype("Date")
        }
        else{
            setdatatype("String")
        }
            
    }

     const putDataType= (event)=>{
        setdatatype(event.target.value)
    }
    const putMandatory= (event)=>{
        setMandatory(event.target.value)
    }

    const handleFormSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    }

    const handleSubmit = (event)=>{

        if (rows.length >= 4) {
        alert('Maximum of 4 records reached. Cannot add more.');
        return;
    }
        if (field === 'Set Field Type') {
        alert('Set Field Type not.');
        return;
    }
        // Split the entered text into an array of values
        const listOfValues = listInput.split('\n').map(value => value.trim());
        console.log('List of values:', listOfValues);

         const newRow = {
        id: serialNumberCounter.current,
        fName: displayName,
        fType:field,
        fDataType:datatype,
        fValid:fieldLen.length===0?"Nil":fieldLen,
        values: field==="TextBox"?textData:field==="Dropdown"?listOfValues:dateData,
        isMan:mandatory
        };

        // Update the serial number counter
        serialNumberCounter.current += 1;

        // Update the list of rows
        setRows((prevRows) => [...prevRows, newRow]);

    }
    const fields = rows.map((row) => ({
    label: rows.fName,
    type: rows.fType,
    options: rows.Values || [], // Default to an empty array if options are not provided
  }));

  return (
    <div className='container mt-5'>
    <h4>Dynamic Data Collection</h4>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {profile}
            </button>
            <ul className="dropdown-menu">
                <li><button className="dropdown-item" value={"Student"} onClick={createProfile}>Student</button></li>
                <li><button className="dropdown-item" value={"Salaried"} onClick={createProfile} >Salaried</button></li>
                <li><button className="dropdown-item" value={"Buisness"} onClick={createProfile}>Buisness</button></li>
            </ul>
        </div>
        <div style={{marginTop:'10em'}}> 
            <button type="button" className="btn btn-secondary">Add Field</button>
        </div>
        <form ref={formRef} onSubmit={handleFormSubmit} className='container mt-4 border border-secondary rounded p-3 row align-items-center'> 
           
            {/* Field Type */}
            <div className="col-sm">
            <label htmlFor="field">Field Type</label>
            <div className="dropdown my-2">
            <button className="btn btn-secondary dropdown-toggle" id="field" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {field}
            </button>
            <ul className="dropdown-menu">
                <li><button className="dropdown-item" value={"TextBox"} onClick={createField}>TextBox</button></li>
                <li><button className="dropdown-item" value={"Dropdown"} onClick={createField} >Dropdown</button></li>
                <li><button className="dropdown-item" value={"Date Picker"} onClick={createField}>Date Picker</button></li>
            </ul>
            </div>
            </div>

            {/* Field Display Name */}
            <div className="col-sm">
                <label htmlFor="displayName" className="form-label">Field Display Name </label>
                <input type="text " className="form-control" onChange={handleDisplayInputChange} id="displayName" value={displayName} placeholder=""/>

            </div>
            {/* Field Data Type */}
            <div className="col-sm">
                <label htmlFor="DataType">Field Data Type</label>
                <div className="dropdown my-2">
                <button className="btn btn-primary dropdown-toggle" id="DataType" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {datatype}
            </button>
            <ul className="dropdown-menu">
                <li><button className={`dropdown-item ${field==="Date Picker"?"d-none":"d-bock"}`} value={"String"} onClick={putDataType}>String</button></li>
                <li><button className={`dropdown-item ${field==="Date Picker"?"d-none":"d-bock"}`} value={"Number"} onClick={putDataType} >Number</button></li>
                <li><button className={`dropdown-item ${field==="Date Picker"?"d-block":"d-none"}`} value={"Date"} onClick={putDataType} >Date</button></li>
            </ul>
            </div>
            </div>
            {/* Field Max Length */}
            <div className={`col-sm ${field==="Date Picker"?"d-none":"d-bock"}`}>
                <label for="maxLength" className="form-label">Field Max Length</label>
                <input type="text" value={fieldLen} onChange={handleFieldLen} className="form-control" id="maxLength" placeholder="10"/>

            </div>
            <div className={`col row ${field==="Date Picker"?"d-block":"d-none"}`}>
                <label htmlFor="">Date Validation Range</label>
                <div className='col-sm'>
                <label htmlFor="minDate" className="form-label">Min Date</label>
                <input type="date" className="form-control w-20" id="minDate" />
                </div>
                <div className='col-sm'>
                <label htmlFor="maxDate" className="form-label">Max Date</label>
                <input type="date" className="form-control w-20" id="maxLength" />
                </div>

            </div>

            {/* Mandatory */}
            <div className='col-sm'>
            <label htmlFor="mand">Mandatory</label>
            <div className="dropdown my-2">
                <button className="btn btn-primary dropdown-toggle" id="mand" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {mandatory}
            </button>
            <ul className="dropdown-menu primary">
                <li><button className="dropdown-item" value={"No"} onClick={putMandatory}>No</button></li>
                <li><button className="dropdown-item" value={"Yes"} onClick={putMandatory} >Yes</button></li>
            </ul>
            </div>
            </div>
            {/* Field Data */}
            <div className={`col-sm ${field==="TextBox"?"d-block":"d-none"}`}>
                <label htmlFor="fieldData" className="form-label">Field Data</label>
                <input type="text" value={textData} className="form-control " id="fieldData" onChange={handleTextField}/>

            </div>
            <div className={`col-sm ${field==="Date Picker"?"d-block":"d-none"}`}>
                <label htmlFor="fieldData" className="form-label">Field Data</label>
                <input type="date" alue={dateData} className="form-control " id="fieldData" onChange={handleDateField} />

            </div>
            <div className={`col-sm ${field==="Dropdown"?"d-block":"d-none"}`}>
                <label htmlFor="fieldData" className="form-label">Field Data</label>
                <textarea
                    id="listInput"
                    value={listInput}
                    onChange={handleListInputChange}
                    placeholder='Enter values in new line'
                    rows={5} // You can adjust the number of rows based on your design
                />

            </div>
            {/* Confirm Button */}
            <div className="col-sm pt-4">
                <button type='submit' className="btn btn-secondary" onClick={handleSubmit}>Confirm</button>
            </div>
            <button type="reset" className='d-none'>Reset</button>
        </form>
            <Table rows={rows}/>


        
        <DisplayFields fields={fields} formData={formFields} />
        
            
    </div>
    
  )
}
