import React ,{ useState,useEffect } from 'react'

import {FlexBox} from './style'

import burger from '../img/burger.jpg'
import ramen from '../img/ramen.jpg'
import pasta from '../img/pasta.jpg'
import fried_rice from '../img/fried-rice.jpg'


//B:  requeire is not working.... <img className="food-img" src={require("../img/burger.jpg")}></img>


const items =[
    {
        name:'burger',
        src: {burger}
    },
    {
        name:'ramen',
        src: {ramen}
    },
    {
        name:'pasta',
        src: {pasta}
    },
    {
        name:'fried_rice',
        src: {fried_rice}
    },
]

function Game() {

    const [Foods, setFoods] = useState([])
    useEffect(() => {
 
    }, [])

    return (
        <div>
            <FlexBox>    
                <h1 className="title">favorite olymphics</h1>        
                <div className="flex-1">
                    <img className="food-img" src={burger}></img>   
                    <div className="name">burger</div>     
                </div>

                <div className="flex-1">
                    <img className="food-img" src={ramen}></img> 
                    <div className="name">ramen</div>                
                </div>
            
            </FlexBox>                    
        </div>
    )
}

export default Game
