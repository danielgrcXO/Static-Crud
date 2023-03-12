import React, {useState} from 'react';


function Option({value}){
    return(
        <option value={value}>{value}</option>
    );
}

export default function CrudFromUpdate({title,data,setDb}){
    //state
    const [newId, setNewId] = useState({id: 1875786568678})
    const [newForm, setNewForm] = useState({id: 1875786568678, name: '',song:''}); 

    //functions
    function handleFormUpdate(e) {
        const selectedId = e.target.value;
        setNewId({ id: selectedId, });
        setNewForm({ id: selectedId, name: '', song: '', });
    }

    const handleChange  = (e) => {
        setNewForm({ 
            ...newForm,[e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!newForm.name || !newForm.song){
            alert('Name and Songs Artist cant be empty');
        }else{
            let findId = data.filter(el => el.id == newForm.id);
            findId[0].name = newForm.name; 
            findId[0].song = newForm.song;

            let updatedData = [...data,newForm]
            updatedData.pop();
            setDb(updatedData);
        }
    }
       
    //html
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

