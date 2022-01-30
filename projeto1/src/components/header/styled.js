import styled from "styled-components";

export const AreaHeader = styled.div`
    background-color: blueviolet;
    min-height: 10vh;   
    font-size: calc(3px + 2vmin);
    color: white;

    .container{
        padding: 20px 20px;
        display: flex;
        align-items: center;
        
    }

        .logo{
            flex: 1;
        }

        .navbar{
            ul{
                display: flex;
                justify-content: space-around;
            }

                li{
                    padding: 0px 15px 0px 15px;
                    list-style: none;
                }

                    a{
                        text-decoration: none;
                        color: white;                   
                    }

                    a:hover{
                             color: darkgrey; 
                    }    
        }
`;
