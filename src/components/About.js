import React from 'react'

export default function About(props) {
    // const [btnName,setBtnName]=useState('DarkMode')
    // const [myStyle,setMyStyle]=useState({
    //     color: 'white',
    //     backgroundColor: 'black',
    // })
    let myStyle = {
      color: props.mode==='dark'?'white':'#042743',
      backgroundColor:props.mode === 'dark'?'#042743':'white',
      border: '1px solid',
      borderColor:props.mode === 'dark'?'white':'black'
    }
    // const toggleStyle = () =>{
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor:'white',
    //             border: '1px solid black'
            
    //         })
    //         setBtnName('LightMode')
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor:'black',
    //             border: '1px solid white'
    //         })
    //         setBtnName('DarkMode')
    //     }
    // }
  return (
    <div className='container' style={myStyle}>
    <h1 className='my-4 mt-5' >About Us</h1>
       <div className="accordion" id="accordionExample">
  <div style={myStyle} className="accordion-item">
    <h2 className="accordion-header">
      <button style={myStyle}  className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div style={myStyle} className="accordion-item">
    <h2 className="accordion-header">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div style={myStyle} className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div style={myStyle} className="accordion-item">
    <h2 className="accordion-header">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3">   
           <button onClick={toggleStyle} type="button" className="btn btn-primary mb-3">{btnName}</button>
</div> */}
<br />
<br />
    </div>
  )
}
