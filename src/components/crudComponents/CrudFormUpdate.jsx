import React, {useState} from 'react';


export default function CrudFromUpdate({title,data,setDb}){

    
    const [newId, setNewId] = useState({id: data[0].id})
    const [newForm, setNewForm] = useState({id: data[0].id, name: '',song:''}); 

    function handleFormUpdate(e) {
        const selectedId = e.target.value;
        setNewId({ 
          id: selectedId,
        });
        setNewForm({ 
          id: selectedId,
          name: '',
          song: '',
        });
      }

    const handleChange  = (e) => {
        setNewForm({ 
            ...newForm,[e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //console.log(newForm.id + ' ' + newForm.name + ' ' + newForm.song);
        
    }
       
    

    return(
        <div>
            <h3>{title}</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID:</label>
                <select id="id" name="id" onChange={handleFormUpdate}>
                    {data.map((el) => <Option key={el.id} value={el.id}>{el.id} </Option>)}  
                </select>

                <input type="text" name='name' placeholder="Write a new name" value={newForm.name} onChange={handleChange}></input>
                <input type="text" name='song' placeholder="Write a new song" value={newForm.song} onChange={handleChange}></input>
                <input type='submit' value='Update'></input>
            </form>
        </div>
    );
}

CrudFromUpdate.defaultProps = {
    title : 'Update the register'
} 

function Option({value}){
    return(
        <option value={value}>{value}</option>
    );
}