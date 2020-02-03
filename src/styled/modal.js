import styled from "styled-components";

const Modal = styled.div`
     .modal{display: flex;
     flex-direction: column;
     height: 30vh;
     width: 50%;
     position: absolute;
     top: 35vh;
     left: 25%;
     background-color: black;
     align-items: center;
     justify-content: center;

     h1{
         color: white;
     }
     input{
         width: 50%;
         height: 50px;
         margin-bottom: 20px;
         opacity: 1;
     }
     button{
         width: 50%;
         height: 40px;
         background-color: white;
         font-size: 24px;
     }}
     .modalClosed{
         width: 0;
         height: 0;
         overflow: hidden;
     }
 
`;


export{Modal}