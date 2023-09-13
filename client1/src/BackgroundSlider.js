
import './BackgroundSlider.css'
import imageSlide from './data'
import {useState} from 'react'

const BackgroundSlider = () => {

    const [currentState , setCurrentState] = useState (0)

    useEffect(()=>{
        const timer =setTimeout(()=>{
            if(currentState===2){
                setCurrentState(0)
            }else{
                setCurrentState(currentState+1)
            }
            
        },2000)
        return()=> clearTimeout(timer)

    },[currentState]  
    )
    const bgImageStyle = {
        BackgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%'
    }

    const goToNext = ()=>{
        setCurrentState(currentState)
    }
    return(
        <div className='continer-style'>

        <div style = {bgImageStyle} >  </div>
        <div className='description'>
            <div>
            <h1>{imageSlide[currentState].title}</h1>
            <p> {imageSlide[currentState].body}</p>
                </div>

        <div className='carousel-boult'>
            {
                imageSlide.map((imageSlide,currentState)=>{
                    <span key= {currentState} onClick={()=> goToNext(currentState)}></span>
                })
            } 

        </div>
        
        </div>
    </div>
    )
}


export default BackgroundSlider