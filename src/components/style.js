import styled from 'styled-components'

export const FlexBox = styled.div`
display:flex;
flex-wrap:wrap;

height: 100vh;


.title{
    position:absolute;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background-color: white;
    padding: 10px 30px;
    text-transfrom: uppercase;  
    z-index:2;
}

.flex-1{
    flex:1;
    min-width: 500px;
    overflow:hidden;

    position:relative;
}
.food-img{
    width: 100%;
    height:100%;
    transition:0.5s;
}
.food-img:hover{
    transform:scale(1.1);
    opacity:0.8;
}

.name{
    position:absolute;
    left:50%;
    bottom:10%;
    background-color: black;
    color:white;
    font-size:100px;
    transform:translateX(-50%);

    z-index:3;
}
`;
