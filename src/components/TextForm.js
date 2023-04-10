import React,{useState} from 'react' //rfc-react function component to get boiler plate code

export default function TextForm(props) {

  

const handleUpClick=()=>{
  
  //console.log("UpperCase was clicked! " + text);
  let newText=text.toUpperCase();
  setText(newText)
  props.showAlert("Converted to Uppercase!","success")
}


const handleLoClick=()=>{
  //console.log("LowerCase was clicked! " + text);
  let newText=text.toLowerCase();
  setText(newText)
  props.showAlert("Converted to Lowercase!","success")
}

const handleToClear=()=>{
  let newText=''
  setText(newText)
  props.showAlert("Text Field Cleared!","success")
}


const handleOnChange=(event)=>{
  //console.log("On change!");
  setText(event.target.value);
}

const handleToCopy=()=>
{
  navigator.clipboard.writeText(text);
  props.showAlert("Text copied!","success")
}

const handleExtraSpaces=()=>
{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra Spaces Handled!","success")
  
}

const handlereverse = () => {
  let splitWord = text.split("");

  let reverseWord = splitWord.reverse("");
  let joinedWords = reverseWord.join("");
  let newText = joinedWords

  setText(newText);
};



 // const[text,setText]=useState('Enter text here'); //whatever value comes in setText it gets stored in text. text is default value which has 'enter tetx here' value
  //text="new text"; //wrong way to change state
  // setText("new text"); // correct way
  const[text,setText]=useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1 className="mb-2"> {props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}
         id="myBox" rows="8"></textarea>
        </div>
        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleToClear}>Clear Text</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleToCopy}>Copy Text</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlereverse}>Reverse Text</button>
        
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary : </h2>
      <p>{text.split(/\s+/).filter((element=>{return element.length!==0})).length} word and {text.length} characters</p> {/* text.split.length tells number of words separated by spaces. text.length tells the total characters*/}
      <p>{0.008* text.split(" ").filter((element=>{return element.length!==0})).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    </>
  )
}
