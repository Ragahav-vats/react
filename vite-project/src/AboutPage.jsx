import React from 'react'

export default function AboutPage() {
    var userName = "John Doe";
    console.log(userName);

    var Email = "raghav@gmail.com";

    var status = 1;
    var check = 'active';
    // var status = 0;

    // if( check == 'active'){
    //     // return<h1>{userName}</h1>
    //     return<h1>{Email}</h1>
    // }else{
    // //    return<h1>error</h1>
    //    return<h1>error</h1>
        
    // }
  return (
    <>
      {
        status ==1
        ?
        <h1>{userName}</h1>
        :
        ''
      }
    <h1 className= "row" style={{backgroundColor:'black', color:'white'}}>{userName}</h1>
        
    </>
  )
}
