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
        document.getSelection().removeAllRanges();      
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
          <h2 className="mb-2">{props.heading}</h2>
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
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Upper Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert To Lower Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyTextClick}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
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
