import React, { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { removeUser } from "../UserSlice";


const List = () => {

   // Fetching user data from Redux store
  const data = useSelector((state) => {
    return state.users;
  });

   // Redux dispatch function
 const dispatch = useDispatch();

 // Function to delete a user
  const deleteUser = (id) =>{
    dispatch(removeUser(id))
  }


  return (
    <div className="flex flex-col bg-[#1A1A1A] mt-14  justify-center items-center">
      <div className="flex flex-col gap-3 ">
         {/* Mapping through user data */}
        {data.map(( element , index ) => (
          <div
            className="flex flex-col sm:flex-row sm:px-4 border-solid w-[330px] sm:w-[584px] md:w-[649px] lg:w-[748px] py-2 lg:p-4 gap-3 items-center shadow-md font-[Inter] font-medium text-base bg-[#262626d9] text-[#dedede] border-[#262626d9] border-2 rounded-md"
            key={index}
          >
              {/* Displaying user information */}
            <h1 className="break-all w-72 sm:w-[721px] xl:w-[897px] sm:text-lg ">
              {element}
            </h1>
            <div className="flex gap-2 py-2 sm:w-28">
               {/* Delete button */}
              <a>
                <img
                  src="..\img\delete.png"
                  className="w-7 h-7 sm:w-8 sm:h-8"
                  onClick={() => deleteUser(index)}
                  alt="delete"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
