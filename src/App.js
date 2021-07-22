import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Myform from "./Myform";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
const axios = require("axios");
function App() {
  const [create, setCreate] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [forms, setForms] = useState([]);
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const [type, setType] = useState("");
  const [length, setLength] = useState(50);
  const [attachHeader, setAttachHeader] = useState("");
  const [optionHeader, setOptionsHeader] = useState("");
  const [value, setValue] = useState("");
  const [values, setValues] = useState([]);

  useEffect(() => {
    setFormTitle(JSON.parse(localStorage.getItem("title")));
    console.log(formTitle);
  }, []);

  const handleAddInput = (e) => {
    e.preventDefault();
    const inp = { fieldName: `${text}`, type: "text", element: "input" };
    console.log(inp);
    setForms([...forms, inp]);
    // setText("")
  };

  const handleLongInput = (e) => {
    e.preventDefault();
    const inp = { fieldName: `${text}`, type: "text", element: "textarea" };
    console.log(inp);
    setForms([...forms, inp]);
    // setText("")
  };

  const handleAttach = (e) => {
    e.preventDefault();
    const inp = {
      type: "file",
      element: "input",
      header: attachHeader,
      maxLength: length,
    };
    setForms([...forms, inp]);
    // setText("")
  };

  const handleRemove = (e, index) => {
    e.preventDefault();
    setForms((prev) => prev.filter((item) => item !== prev[index]));
  };

  const handleChangeH = (e) => {
    e.preventDefault();
    setHeading(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formTitle);
    setFormTitle(heading);
    localStorage.setItem("title", JSON.stringify(heading));
    localStorage.setItem("form", JSON.stringify({ heading: heading, forms }));
  };

  const handleDropdown = (e) => {
    e.preventDefault();
    const inp = {
      element: "select",
      values: JSON.stringify(values),
      header: optionHeader,
    };
    console.log(inp);
    setForms([...forms, inp]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Form Builder</h1>
        <input
          type="button"
          value={!create ? "Create Form" : "Close Form"}
          onClick={() => setCreate(!create)}
        />
        {create && (
          <div>
            <div>
              <h1>{heading}</h1>
            </div>
            <form>
              <div>
                {forms.map((item, index) => (
                  <div key={index}>
                    <div key={index}>
                      {item.element !== "select" && (
                        <div className="preview">
                          <label>{item.attachHeader}</label>
                          <item.element
                            type={item.type}
                            placeholder={item.fieldName}
                            name={item.fieldName}
                          />
                        </div>
                      )}
                    </div>
                    <div key={index}>
                      {item.element === "select" && (
                        <div key={index} className="preview">
                          <item.element type={item.type}>
                            {values.map((item, index) => (
                              <option key={index} value={item.value}>
                                {item.value}
                              </option>
                            ))}
                          </item.element>
                        </div>
                      )}
                    </div>
                    <input
                      type="button"
                      value="Delete"
                      onClick={(e) => handleRemove(e, index)}
                    />
                  </div>
                ))}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Form Title"
                  name="heading"
                  onChange={(e) => handleChangeH(e)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Short answer"
                  onChange={(e) => setText(e.target.value)}
                />
                <input
                  type="button"
                  value="Add Input"
                  onClick={handleAddInput}
                />
              </div>
              <div>
                <textarea
                  type="text"
                  placeholder="Long answer"
                  onChange={(e) => setText(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Max Length"
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                />
                <input
                  type="button"
                  value="Add Input"
                  onClick={handleLongInput}
                />
              </div>
              <div>
                <label htmlFor="attachment">{attachHeader}</label>
                <input
                  type="text"
                  placeholder="Attachment title"
                  onChange={(e) => setAttachHeader(e.target.value)}
                />
                <input type="file" />
                <input
                  type="button"
                  value="Add Attach"
                  onClick={handleAttach}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Option header"
                  onChange={(e) => setOptionsHeader(e.target.value)}
                />
                <label htmlFor="selection">{optionHeader}</label>
                <select id="selection">
                  {values.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.value}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Options"
                  onChange={(e) => setValue(e.target.value)}
                />
                <input
                  type="button"
                  value="Add Options"
                  onClick={() => setValues([...values, { value: value }])}
                />
                <input
                  type="button"
                  value="Add Dropdown"
                  onClick={handleDropdown}
                />
              </div>
              <div>
                <input
                  type="button"
                  value="Submit Form"
                  onClick={handleSubmit}
                />
              </div>
            </form>
          </div>
        )}
      </header>
      <Myform heading={heading}/>
    </div>
  );
}

export default App;
