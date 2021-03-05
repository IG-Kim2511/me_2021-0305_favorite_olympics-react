import React from 'react'

import {FlexBox} from './style'

import burger from '../img/burger.jpg'
import ramen from '../img/ramen.jpg'

//B:  requeire is not working.... <img className="food-img" src={require("../img/burger.jpg")}></img>


function Game() {
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
