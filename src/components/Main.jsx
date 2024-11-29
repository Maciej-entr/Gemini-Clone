import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
    const {onSent,recentPrompt, showResult, loading, resultData,setInput, input} = useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini-Clone</p>
            <img src={assets.user_icon} alt="" />

        </div>
        <div className="main-container">
            {!showResult
            ? <>
            <div className="grid">
                <p><span>Hello, Developer.</span></p>
                <p>What shall we program today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Code html template for your new website</p>
                    <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                    <p>Should we style html template</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card">
                    <p>Code a simple snake game</p>
                    <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                    <p>Code a blog post card in jsx</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
            </div>
            </>
            : <div className="result">
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                     <p>{recentPrompt}</p>
                </div>
            </div> }
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading
                ? <div className="loader"> 
                <hr />
                <hr />
                <hr />
                </div>
                :  <p dangerouslySetInnerHTML={{__html:resultData}}></p> }
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter your prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">Gemini may display innacurate information</p>
            </div>
        </div>
    </div>
  )
}

export default Main