import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addUser} from "../UserSlice"

const Todo = () => {
  
  // state to store the value from input bar
  const [value , setValue] = useState("")

   // Redux dispatch function
  const dispatch = useDispatch()  

  // Function to handle input change
  const handleOnChange = (e) => {
    setValue(e.target.value)
  }

   // Function to handle key press events
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Call addNewUser when Enter key is pressed
      addNewUser(value);
    }
  };

   // Function to add new user to Redux store
  const addNewUser=(payload)=>{
    console.log(payload,"check4")
      dispatch(addUser(payload))

      setValue("")
  }

  
  return (
    <div className="flex relative justify-center items-center">
      <div className="flex flex-col">
        <div className="flex gap-3 w-[330px] sm:w-[581px] md:w-[649px] -mt-4 lg:w-[749px]">
          {/* Input field */}
          <input
            className="border-solid pl-4 pr-4 shadow-md font-[Inter] font-medium text-base opacity-100 bg-[#262626d9] text-[#dedede] border-[#262626d9] border-2 w-96 sm:w-[478px] md:w-[541px] lg:w-[641px] rounded-md"
            value={value} onChange={handleOnChange} onKeyDown={handleKeyDown}
          />
          {/* Add button */}
          <a className="flex justify-center items-center p-2  px-5 sm:px-8 bg-[#3aa1ddd6] bg-opacity-100 rounded-md hover:cursor-pointer">
       
            <h1 className="font-roboto font-medium text-560 text-[Inter] text-[#fffefe] text-20" onClick={()=>addNewUser(value)} >
              Add
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Todo;
