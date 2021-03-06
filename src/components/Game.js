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

    const [Winners, setWinners] = useState([]);   {/* 3) */}

    useEffect(() => {
        /*  2번째 방법 : {}, return빼고 사용        
        items.sort(()=>Math.random()-0.5); */

        items.sort(()=>{return Math.random()-0.5});

        setFoods(items);    {/* 3) */}

        setDisplay([items[0],items[1]]); 
    }, [])

    {/* 3) click event : */}

    const clickHandler =(a) =>{        {/* ? */}   {/* 결승전 */}
        if (Foods.length<2) {
            if (Winners.length===0) {
                setDisplay([a]);
                
            }else{
                let updateFood = [...Winners,a];
                setFoods(updateFood);
                setDisplay([updateFood[0],updateFood[1]]);
                setWinners([]);
            }
            
        } else if(Foods.length>2) {         {/* 결승전 이전까지... 3개이상 아이템인때의 코드 */}
            setWinners([...Winners,Foods])
            setDisplay([Foods[2],Foods[3]])
            setFoods(Foods.slice(2))
        }
    };

    return (
        <div>
            <FlexBox>
                <h1 className="title">favorite olymphics</h1>

                {/*  2)  */}
                {
                    Display.map((a)=>{
                        return(
                          <div className="flex-1"
                          onClick={()=>{clickHandler(a)}}>          {/* 3) */}
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
