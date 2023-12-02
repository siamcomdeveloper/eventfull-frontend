import axios from 'axios';
import {useEffect, useState} from "react";

function User()
{
  const [_id, setId] = useState('');
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

useEffect(() => {
  (async () => await Load())();
  }, []);

    async function  Load(){
        const result = await axios.get("http://localhost:8081/api/v1/user/getall");
        setUsers(result.data);
        console.log(result.data);
    }
 
    async function save(event){
        event.preventDefault();

        try{
            await axios.post("http://localhost:8081/api/v1/user/save",
            {
                username: username,
                password: password,
                email: email
            });
            
            alert("User Save Successfully");
            setId("");
            setName("");
            setPassword("");
            setEmail("");
            Load();
        }
        catch(err){
            alert("User Save Failed");
        }
    }   

    async function editUser(users){
        setName(users.username);
        setPassword(users.password);
        setEmail(users.email); 
        setId(users._id);
    }

    async function deleteUser(_id){
        await axios.delete("http://localhost:8081/api/v1/user/delete/" + _id); 
        alert("User deleted Successfully");
        Load();
    }

    async function update(event){
        event.preventDefault();

        try{
            await axios.put("http://localhost:8081/api/v1/user/edit/" + _id,{
                username: username,
                password: password,
                email: email
            });
            
            alert("User Updated!");
            setId("");
            setName("");
            setPassword("");
            setEmail("");
            Load();
        }
        catch(err){
            alert("User Update Failed");
        }
    }

    return (
    <div>
       <h1>User Details</h1>
       <div class="container mt-4" >
            <form>
                <div class="form-group">
                {/* <input  type="text" class="form-control" id="_id" hidden
                value={_id}
                onChange={(event) =>
                    {
                    setId(event.target.value);      
                    }} 
                /> */}
                    
                    <label>Username</label>
                    <input  type="text" class="form-control" id="username"
                        value={username}
                        onChange={(event)=>{
                            setName(event.target.value);      
                        }}
                    />

                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input  type="text" class="form-control" id="password" 
                        value={password}
                        onChange={(event)=>{
                        setPassword(event.target.value);      
                        }}
                    />
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" id="email" 
                        value={email}
                        onChange={(event)=>{
                            setEmail(event.target.value);      
                        }}
                    />
                </div>
                <div>
                <button class="btn btn-primary mt-4"  onClick={save}>Save</button>
                <button class="btn btn-warning mt-4"  onClick={update}>Update</button>
                </div>   
            </form>
        </div>

        <br/>

        <table class="table table-dark" align="center">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
                <th scope="col">Email</th>
                <th scope="col">Option</th>
                </tr>
            </thead>
            {users.map(function fn(user){
                return(
                <tbody>
                    <tr>
                    <th scope="row">{user._id} </th>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td>{user.email}</td>        
                    <td>
                        <button type="button" class="btn btn-warning"  onClick={() => editUser(user)} >Edit</button>  
                        <button type="button" class="btn btn-danger" onClick={() => deleteUser(user._id)}>Delete</button>
                    </td>
                    </tr>
                </tbody>
                );
            })}
        </table>
    </div>
    );
}

export default User;