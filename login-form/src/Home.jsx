import React, { useState } from 'react'
import states from './assets/Form';

export default function Home() {
    const [select,setSelect] = useState([]);
    const [finalData,setUserData] = useState( JSON.parse(localStorage.getItem("states")) || [])

    const changeStates = (event)=>{
        // console.log(event.target.value);
        const filterStates = states.filter((v,i) =>{
            if(v.country_name == event.target.value){
                return v;
            }
        })
        setSelect(filterStates);

        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            mobile_number: event.target.mobile.value,
            country_name: event.target.country.value,
            states_name: event.target.states.value,
        }

        console.log(data)

        const newData = [data,...finalData];
        // setUserData(finalData);

        localStorage.setItem('states',JSON.stringify(newData));
    }
  return (
    <>
    
      <div class="form_section">
            <h2>BASIC FORM</h2>
            <form action="">
                <div class="outer_section">
                <div class="entry">
                    <h5>NAME</h5>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div class="entry">
                    <h5>EMAIL</h5>
                    <input type="text" id="emil" name="name" required/>
                </div>
                <div class="entry">
                    <h5>MOBILE NUMBER</h5>
                    <input type="text" id="mobile_number" name="name" required/>
                </div>
                <div class="entry">
                    <h5>COUNTRY</h5>
                     {/* <input type="text" id="country" name="name" required/>  */}
                        <select id="country" name="country" required onChange={changeStates}>
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="Canada">Canada</option>
                            <option value="Austraila">Austraila</option>
                       </select>
                </div>
                <div class="entry">
                    <h5>STATE</h5>
                    <select id="state" name="state" required>
                        
                        {
                            select.map((item,index)=>{
                                return(
                                    <option value={item.name} key={index}>{item.name}</option>
                                )

                            })
                        }
                    </select>
                </div>
                <button class="res">Submit</button>
            </div>
            </form>
        </div>
    </>
  )
}
