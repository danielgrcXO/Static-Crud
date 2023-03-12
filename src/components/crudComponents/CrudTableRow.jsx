import React, { useState} from "react";

export default function CrudTableRow({id,name,song,remove,edit}){
    
   
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{song}</td>
            <td>
            <button onClick={(e) => edit(e,id)}>Edit</button>
            <button onClick={(e) => remove(e,id)}>Delete</button>
            </td>
        </tr>
    ); 
}