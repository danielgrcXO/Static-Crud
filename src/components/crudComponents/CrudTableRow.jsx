import React from "react";

export default function CrudTableRow({id,name,song,remove}){
    
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{song}</td>
            <td>
            <button onClick={(e) => remove(e,id)}>Delete</button>
            </td>
        </tr>
    ); 
}