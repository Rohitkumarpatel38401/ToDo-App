import React,{useState} from 'react'
import "./ToDo.css";

function ToDo() {
    const [users,setUsers] =useState([]);
    const [name,setName]=useState("");
    const [editIndex,setEditIndex] = useState(-1);
    
    const addUser=()=>{
        if(name.trim().length ===0){
            return;
        }
        else if(editIndex !==-1){
            const userList=[...users];
            userList[editIndex]=name;
            setUsers(userList)
            setEditIndex(-1)
        }else{ 
            const newUsers=[...users,name];
            setUsers(newUsers);
        }
        setName("")
    }
    const editUser=(index)=>{
        setEditIndex(index);
        setName(users[index])
    }
    const deleteUser=(userIndex)=>{
        const updatedUsers = users.filter((user,index)=> index!==userIndex);
        setUsers(updatedUsers);
    }
    return (
        <div className="todo-app">
            
            <h2>ToDo App</h2>
            <div className="inputRow">
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
                <button onClick={addUser}>Add</button>
            </div>
            <div className="users">
                {
                    users?.map((user,index)=>(
                        <div className="user" key={index}>
                            <span style={{marginLeft:"10px"}}>{user}</span>
                            <div>
                                <button onClick={()=> editUser(index)}>Edit</button>
                                <button onClick={()=> deleteUser(index)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ToDo;
