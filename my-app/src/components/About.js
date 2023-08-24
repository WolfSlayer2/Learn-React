import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    const [btnText,setBtnText] = useState('Dark');

    const btnSwitch = () => {
        if(myStyle.color==='white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });
            setBtnText('Dark');
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            });
            setBtnText('Light');
        }
        
        // if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
        //     document.documentElement.setAttribute('data-bs-theme','light')
        // }
        // else {
        //     document.documentElement.setAttribute('data-bs-theme','dark')
        // }
    }
    return (
        <>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end my-2">
                <button className="btn btn-dark shadow me-md-2" type="button" onClick={btnSwitch}>{btnText}</button>
            </div>
            <div className='container border border-dark-subtle' style={myStyle}>
                <h2 className='my-3'>About Us</h2>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item border-bottom border-danger-subtle">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed " style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div class="accordion-item border-bottom border-danger-subtle">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>
                    <div class="accordion-item border-bottom border-danger-subtle">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        </>
    )
}
