import React from 'react'

export default function About(props) {

    // const [myStyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white',
       
    // })

    let myStyle={
      color: props.mode==='dark'?'white':'#042743',
      backgroundColor :props.mode==='dark'?'rgb(36 74 104)':'white'
      

    }
    
  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong>Analyze Your Text</strong> 
                        </button>
                    </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
             Text Manipulator is used to manipulate with the text given by user in efficient way. It can count words,characters,minutes to read,reverse text and much more.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free To Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Text Manipulator is a tool that gives instant character count and word count statistics for given text. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      This tool works on any web browser such as Chrome,Fireforx,Safari,Opera.It suits to count characters in Facebook,Blog,Books,PDF,Essays,etc.
      </div>
    </div>
  </div>
</div>
</div>
  )
}
