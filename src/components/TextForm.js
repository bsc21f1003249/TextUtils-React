import React,{useState} from "react";


export default function TextForm(props) {
   const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
   }
   const handleLowClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);    
    props.showAlert("Converted to Lowercase","success");
   }
   const handleClrClick = () =>{
    let newText = "";
    setText(newText);    
    props.showAlert("Text cleared","success");
   }
   const removeExtraSpaces = () =>{
    let newText = text.replace(/\s+/g,' ').trim();
    setText(newText);    
    props.showAlert("Extra spaces removed","success");
   }
   const handleCopyTextClick = () =>{
        var copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);        
        props.showAlert("Text copied successfully","success");
   }
   const handleOnChange= (event) =>{
    setText(event.target.value)
   } 
  const [text,setText]= useState("");
  //setText("Set New Text");
  return (
    <>
    <div className="container"> 
      <div className="mb-3" id="idTextArea">
        <label htmlFor="myBox" className="form-label">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'grey':'light'}}
        ></textarea>
        
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upper Case</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To Lower Case</button>
      <button className="btn btn-primary mx-2" onClick={handleClrClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopyTextClick}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{text.split("").length==0?0:text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text in box to preview"}</p>
    </div>
    </>
  );
}
