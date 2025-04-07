import React, { Children, createContext, useState } from 'react'


export const addProjectContext=createContext()
export const editProjectContext=createContext()

const ProjectContext = ({children}) => {
    const[addProjectResponse,setProjectResponse]=useState([])
    const[editProjectResponse,setEditProjectResponse]=useState([])
    //to store apiResponse from allProducts
  return (
    <div>
        <addProjectContext.Provider
        value={{addProjectResponse,setProjectResponse}}>

          <editProjectContext.Provider value={{editProjectResponse,setEditProjectResponse}}>
            
          {children}

          </editProjectContext.Provider>
             
      

        </addProjectContext.Provider>
    
    </div>
  )
}

export default ProjectContext
