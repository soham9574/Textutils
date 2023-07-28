import React , {useState} from 'react'
export default function TextForm(props) {
const [text,setText]=useState('Enter text here');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase ","success")
    }
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extraspace removed","success")
    }
    const handleCopy = () =>{
      var text = document.getElementById("myBox");
      text.select()
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges()
      props.showAlert("Copied to Clipboard","success")

    }
    const handleLoClick = () => {
      // console.log("hi")
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase","success")
  }
    const handleOnChange=(e)=>{
         setText(e.target.value)
    }
    const handleClear=(e)=>{
        setText("")
        props.showAlert("Text cleared","success")
    }


  return (
    <>
<div className='container' style={{color:props.mode==='dark'?'white':'black'}} >
    <h1>{props.heading}</h1>
    <div className="mb-3">
         {/* <label for="exampleFormControlInput1" className="form-label">Example Textarea</label> */}
         <textarea  style={{backgroundColor:props.mode==='dark'?'white':'white', color:props.mode==='dark'?'':'black'}} value={text} className="form-control" id="myBox" rows="8" onChange={handleOnChange} ></textarea>
   </div>  
   <button disabled={text.length===0} style={{backgroundColor:props.mode==='dark'?'green':'blue', color:props.mode==='dark'?'white':'white'}} className="btn btn-primary mx-1 my-2e" onClick={handleUpClick} > Convert to UpperCase </button> 
   <button disabled={text.length===0} style={{backgroundColor:props.mode==='dark'?'green':'blue', color:props.mode==='dark'?'white':'white'}} className="btn btn-primary mx-1 my-2" onClick={handleLoClick} >Convert to LowerCase</button>  
   <button disabled={text.length===0} style={{backgroundColor:props.mode==='dark'?'green':'blue', color:props.mode==='dark'?'white':'white'}} className="btn btn-primary mx-1 my-2" onClick={handleClear} >Clear Text</button>
   <button disabled={text.length===0} style={{backgroundColor:props.mode==='dark'?'green':'blue', color:props.mode==='dark'?'white':'white'}} className="btn btn-primary mx-1 my-2 " onClick={handleCopy} >Copy Text</button> 
   <button disabled={text.length===0} style={{backgroundColor:props.mode==='dark'?'green':'blue', color:props.mode==='dark'?'white':'white'}} className="btn btn-primary  mx-1 my-2" onClick={handleExtraSpaces} >Remove Extra Space</button>       
</div>
    <div style={{color:props.mode==='dark'?'white':'black'}} className="container my-3">
             <h1>Your text Summary</h1>
             <p className='my-3'>{text.split(" ").filter((e)=>{ return e.length!==0}).length} words,and {text.length} characters</p>   
             {/* <p>{0.008*text.split(" ").length} Minutes read</p>   */}
             <h2>Preview</h2> 
             <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
