import React,{ useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const Myform = () => {
  const [heading, setHeading] = useState("");
  const [form, setForm] = useState([]);


  useEffect(()=>{
    const formData = JSON.parse(localStorage.getItem("form"))
    if(formData){
    setHeading(formData.heading);
    setForm(formData.forms);
    console.log(formData);
  }
  },[]);


  const handleChange = (index, e) => {
  e.preventDefault();

  setForm((prev) => {
    return prev.map((item, i) => {
      if (i !== index) {
        return item;
      }

      return {
        ...item,
        [e.target.name]: e.target.value,


      };
    });
  });
};

  return (

    <div className="myform">
    <h1>{heading}</h1>
    <form>
    {form && form.map((item, index)=>(
      <div key="index">
      <div key="index" className="myform-item" >
      {item.element !=="select" &&
      <div  className="preview">
      <label>{item.header || item.fieldName} : </label>
      <item.element type={item.type} placeholder={item.fieldName} name={item.fieldName} onChange={(e)=>handleChange(index,e)} />
      </div>
      }
      </div>
      <div key="index" className="myform-item" >
      {item.element ==="select" &&
        <div className="preview">
        <label >{item.header}</label>
        <select>
          {JSON.parse(item.values).map((item,index)=>(
            <option key= {index} value={item.value}>{item.value}</option>
          ))}
        </select>
        </div>
      }
      </div>

      </div>
    ))}
    <input type="submit" value="Submit"/>
    </form>
    </div>
  )
}

export default Myform
