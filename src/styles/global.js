import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus{
        outline: 0;
    }

    html , body , #root{
        height: 100%;
       
    }

    body{
        background: #7474BF;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #348AC7, #7474BF);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #348AC7, #7474BF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


        -webkit-font-smoothing: antialiased;
       
        
    }

    body , input , button{
        font: 14px 'Roboto', sans-serif;

    }

    a{
        text-decoration: none;
      
    }

    ul{
        list-style:none
    }

    button{
        cursor: pointer;
    }

    svg{
        cursor: pointer;
    }
`;
