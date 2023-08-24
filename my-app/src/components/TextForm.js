import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('Uppercase');
        setText(text.toUpperCase());
        props.alertchange('Converted to Uppercase', 'success');
    }
    const handleLowClick = () => {
        console.log('Lowercase');
        setText(text.toLowerCase());
        props.alertchange('Converted to Lowercase', 'success');
    }
    const handleClear = () => {
        console.log('Cleared');
        setText('');
        props.alertchange('Cleared all text', 'success');
    }
    const handlePlay = () => {
        const msg = new SpeechSynthesisUtterance();
        msg.lang = 'en-GB';
        msg.text = text;
        speechSynthesis.speak(msg);
    }
    const handleCopy = () => {
        // const val = document.getElementById("exampleFormControlTextarea1");
        // val.focus();
        // val.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.alertchange('Copied to Clipboard!', 'success');
    }
    // without onchage we can't type in textarea
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('Type here: ');

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? '#eee' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea
                        className="form-control border border-primary"
                        id="exampleFormControlTextarea1"
                        rows={8}
                        defaultValue={""}
                        value={text}
                        onChange={handleOnChange}
                    />
                </div>
                <button disabled={text.length===0} className={`btn btn-${props.Color.val} mx-2 my-1`} onClick={handleUpClick}>Uppercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.Color.val} mx-2 my-1`} onClick={handleLowClick}>Lowercase</button>
                <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleClear}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handlePlay}>Read Aloud</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? '#eee' : 'black' }}>
                <h3>Text Summary:</h3>
                {/* text.split(' ').filter((element)=>{return element.length!==0}).length */}
                <p><b>{text.split(/\s+/).filter(String).length} words, {text.length} characters</b></p>
                <h4>Preview:</h4>
                <p>{text.length>0?text:'Nothing to preview here'}</p>
            </div>
        </>
    )
}
