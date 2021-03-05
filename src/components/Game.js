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
        src: burger
    },
    {
        name:'ramen',
        src: ramen
    },
    {
        name:'pasta',
        src: pasta
    },
    {
        name:'fried_rice',
        src: fried_rice
    },
]

function Game() {

    {/* 2) choose 2 of random items and show */}

    const [Foods, setFoods] = useState([]);
    const [Display, setDisplay] = useState([]);

    useEffect(() => {

        items.sort(()=>{Math.random()});
        setFoods(items);
        setDisplay([items[0],items[1]]);
        
 
    }, [])

    return (
        <div>
            <FlexBox>    
                <h1 className="title">favorite olymphics</h1>    
                
                {
                    Display.map((a)=>{
                        return(
                          <div className="flex-1">
                            <img className="food-img" src={a.src}></img>   
                            <div className="name">{a.name}</div>     
                          </div>
                        )
                    })
                }
            {/* 
                <div className="flex-1">
                    <img className="food-img" src={burger}></img>   
                    <div className="name">burger</div>     
                </div>

                <div className="flex-1">
                    <img className="food-img" src={ramen}></img> 
                    <div className="name">ramen</div>                
                </div>
             */}
            </FlexBox>                    
        </div>
    )
}

export default Game
