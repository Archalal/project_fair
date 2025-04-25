import React, { Children, createContext, useState } from 'react'


export const addProjectContext=createContext()

const projectContext = ({children}) => {
    const[addProjectResponse,setProjectResponse]=useState([])
    //to store apiResponse from allProducts
  return (
    <div>
        <addProjectContext.Provider
        value={(addProjectResponse,setProjectResponse)}>
               {children}
      

        </addProjectContext.Provider>
    
    </div>
  )
}

export default projectContext
