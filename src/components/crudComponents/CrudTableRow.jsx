import React from "react";
import Button from 'react-bootstrap/Button';

export default function CrudTableRow({id,name,song,remove}){
    
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{song}</td>
            <td>
                <Button variant="outline-danger" onClick={(e) => remove(e,id)}>Delete</Button>{' '}
            </td>
        </tr>
    ); 
}