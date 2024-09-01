import React,{useState} from 'react';



export default function Textform(props) {
    
    const handleUpclick=()=>{
        
        let newtext = text.toUpperCase();
        setText(newtext)
        
    }
    const handleLoclick=()=>{
        
        let newtext = text.toLowerCase();
        setText(newtext)
        
    }
    const handleclearclick=()=>{
        
        let newtext = "";
        setText(newtext)
    }
    const handleOnchange=(event)=>{
       
        setText(event.target.value)
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const[text, setText]= useState('');
    return (
        <>
        <div className="container" style={{ color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>

            <div className="mb-3">
                
                <textarea className="form-control" value={text}  onChange={handleOnchange}  style={{ backgroundColor: props.mode==='dark'?'#13466e':'white', color:  props.mode==='dark'?'white':'#042743'}} id="myBox" rows="3"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearclick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
        </div>
        <div className="container my-2" style={{ color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length}words, {text.length}characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.legth>0?text:"Nothing To Preview"}</p>
        </div>
        </>
    );
}
