import React,{useState} from 'react'

export default function Textbox() {
    const Upclick =()=>{
        let newtext=text.toUpperCase()
        setText(newtext)

    }
    const Doclick =()=>{
      let newtext=text.toLowerCase()
      setText(newtext)

  }

    const change=(event)=>{
        setText(event.target.value)
    }
    const[text, setText]=useState("");
  return (
    <>
    
    
<div className="mb-3">
<label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={change}></textarea>
  <button type="button" className="btn btn-primary my-3"  onClick={Upclick}>Convert to Uppercase</button>
  <button type="button" className="btn btn-primary my-3 mx-2"  onClick={Doclick}>Convert to Lowercase</button>
  <h2>Text Details</h2>
  <p>you have{text.length}characters and {text.split(" ").length}</p>
  <p>{0.008*text.split(" ").length} minutes required to read this words</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>
  );
}
