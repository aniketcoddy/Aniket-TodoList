
'use client'
import { useEffect, useState } from "react"


const getLocalItems = ()=>{
  let list = localStorage.getItem("list")
  if(list){
    return JSON.parse(localStorage.getItem("list"))
  }else{
    return []
  }
}


export default function Todo() {

  const [value , setValue] = useState("")
  const [add , setAdd] = useState(getLocalItems())
  const [toggle , setToggle] = useState(true)
  const [editItem , setEdititem] = useState(null)

  const handleOnChange = (e) => {
    setValue(e.target.value)
  }
 
   const addData = ()=>{
    if(!value){
      alert("Please Enter the data")
    } else if(value && !toggle){
       setAdd(add.map((elem)=>{
        if(elem.id === editItem){
          return {...elem , name:value}
        }
        return elem;
       }))
       setValue("")
      setToggle(true)
      setEdititem(null)
    }else{
      const dataWithId = {id : new Date().getTime().toString() , name:value}
      setAdd([...add , dataWithId])
      setValue("")
    }
   }

   const deleteItem = (index)=>{
         const updateItems= add.filter((elem)=>{
          return index!=elem.id;
         })
         setAdd(updateItems)
   }

  const editItems = (ind)=>{
    const editItem = add.find((elem)=>{
      return elem.id === ind
    })
    setValue(editItem.name)
      setToggle(false)
      setEdititem(ind)
  }
   
   useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(add))
   },[add])



    
  return (
    <div className="flex flex-col bg-[#1A1A1A] h-screen relative justify-center items-center">
      <div className="flex flex-col -mt-24 sm:-mt-72 lg:-mt-72  ">
        <div className="flex gap-3 w-[330px] sm:w-[581px] md:w-[649px] lg:w-[749px]">
          <input className="border-solid pl-4 pr-4 shadow-md font-[Inter] font-medium text-base opacity-100 bg-[#262626d9] text-[#dedede] border-[#262626d9] border-2 w-96 sm:w-[478px] md:w-[541px] lg:w-[641px] rounded-md" value={value} onChange={handleOnChange}/>
          <a className="flex justify-center items-center p-2  px-5 sm:px-8 bg-[#3aa1ddd6] bg-opacity-100 rounded-md hover:cursor-pointer">
           {toggle ? ( 
            <h1 className="font-roboto font-medium text-560 text-[Inter] text-[#fffefe] text-20" onClick={addData} >
              Add
            </h1>
           ):(
            <h1 className="font-roboto font-medium text-560 text-[Inter] text-[#fffefe] text-20" onClick={addData}>
                  Edit
                </h1> 
                )} 
          </a>
        </div>
      </div>


      <div className="  flex flex-col gap-3 mt-14">
        {add.map((element)=>{
          return(
            <div className=" flex flex-col sm:flex-row sm:px-4 border-solid w-[330px] sm:w-[584px] md:w-[649px] lg:w-[748px] py-2 lg:p-4 gap-3 items-center shadow-md font-[Inter] font-medium text-base bg-[#262626d9] text-[#dedede]
             border-[#262626d9] border-2 rounded-md" key={element.id}  >
              <h1 className="break-all w-72 sm:w-[721px] xl:w-[897px] sm:text-lg ">{element.name}</h1>
              <div className="flex gap-2 py-2 sm:w-28">
                <a>
                  <img
                    src="..\img\delete.png"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                    onClick={()=>deleteItem(element.id)}
                  />
                </a>
                <a>
                  <img src="..\img\edit.png" className="w-7 h-7 sm:w-8 sm:h-8" onClick={()=>editItems(element.id)} />
                </a>
              </div>
            </div> 
           )})} 
      </div>
    </div>
  );
}
