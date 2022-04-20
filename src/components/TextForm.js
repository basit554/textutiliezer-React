import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLoClick = ()=>{
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }
  const handleClearText = ()=>{
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }
  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  const handleCopy = () =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to clipboard!", "success");

  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed!", "success");
  }
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#05335c'}}>
    <div className="form-group">
    <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#05335c':'white' , color: props.mode==='dark'?'white':'#05335c'}}></textarea>
  </div>
  <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleClearText}>Clear Text</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>
  <div className="container" style={{color: props.mode==='dark'?'white':'#05335c'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the Textbox above to preview it here."}</p>
  </div>

    </>
  )
}

