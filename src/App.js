import React, { useState } from "react";
import './App.css';
import { useEffect } from "react";
import axios from "axios";



function GetUsers() {

  const [gotResponse,setGotResponse] = useState(false);
  const [userInfoArray,setUserInfoArray] = useState();
  const [clickedOnBrand,setClickedOnBrand] = useState(false);

  useEffect(()=> {
    axios({
      method : 'get',
      url : 'https://reqres.in/api/users?page=1'
    }) 
    
    .then((response) => {
      if(gotResponse === false) {
        setUserInfoArray(response.data.data);
        setGotResponse(true); 
      }
      
    }) 
   })
   
  
  var imgArray = ['./Balenciaga-logo.png','./Bulgari-Logo.png','./Prada-Logo.png','./Givenchy-Logo.png','./Hugo-Boss-Logo-768x432.png'];
  console.log(gotResponse);
  console.log(userInfoArray);
  return(
  
    <div id='main'>
      <div id='navbar'>
        {imgArray.map((element,index)=> {
          return(
          <img id='brand-logo' src={element} onClick={clickFunc} alt={'brand logo'}></img>
          )
        })}
      </div>
     
      {
        clickedOnBrand ?
        <div id='cards-div'>
          {
            
            gotResponse ?
            userInfoArray.map((element,index) => {
              return(
              <div id='user-card'>
                  <img id='user-img' src={element.avatar} alt={'user-img'}></img>
                  <h5 id='user-name'>{element.first_name+" "+element.last_name}</h5>
                  <div id='user-email'>{element.email}</div>
              </div> 
            )
              }): <p>Loading...</p> 
          }
        </div> : null
      }
    </div>
  )

  function clickFunc() {
    setClickedOnBrand(true);
  }
}

export default GetUsers;