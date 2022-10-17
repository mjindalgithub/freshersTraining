import React, { useEffect, useState } from "react"
import "./View.css"
import axios from "axios"
import { Modal, Button } from 'react-bootstrap'

const View = () => {
    const [data,setData]=useState([{}]);
    const [formData,SetFromData]=useState({
            email:"",
            comment:"",
      });
      const handelformsubmit=async (e)=>
      {
          let response = await axios.post('http://localhost:5000/posts',formData);
        
          if(response){
            alert("data saved");
            window.location.reload();
          }
          else  
            alert("something went wrong");
    
          SetFromData({
            email: "",
            comment: "",
          });
      };
    useEffect(()=>{
        getUser();
        console.log(data);
    },);

    const getUser = async() => {
        await axios.get("http://localhost:5000/posts").then((res)=>setData(res.data));
    };

    const handeldelete=async(id)=>{
        await axios.delete('http://localhost:5000/posts/'+id).then((res)=>alert("record Deleted"));
        getUser();
    };
    const [isShow, invokeModal] = useState(false)
    const initModal = () => {
      return invokeModal(!isShow)
    };


    const [UpdateData,SetUpdateData]=useState({
        email:"",
        comment:"",
      });
      const handleUpdate=async()=>{
        await axios.put(`http://localhost:5000/posts/${UpdateData.id}`, UpdateData).then((res)=>alert("record Updated"));
        getUser();
        window.location.reload();
    };
    const [style, setStyle] = useState("cont");
  
    const changeStyle = () => {
      console.log("you just clicked");
    
      setStyle("modal-dialog");
    };


  return (
    <div>
      <h2>View Inserted Data</h2>
        <table>
            <thead>
                <th>Id</th>
                <th>email</th>
                <th>comment</th>
            </thead>

            <tbody>
                    {
                        data && data.map((user)=>(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.comment}</td>

                            <button variant="success" onClick={()=>{
                                    return SetUpdateData({
                                        email: user.email,
                                        comment: user.comment,
                                        id:user.id,
                                        return: invokeModal(!isShow)
                                    })
                                }}>Edit</button>
                            <button onClick={()=>handeldelete(user.id)}>delete</button>
                        </tr>
                        ))
                    }
            </tbody>
        </table>

        {/* model */}
        <Modal show={isShow} className={style}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>React Modal Popover Example</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
            <div className="col-md-7">
                <h1>Update User Form</h1>
                <div>
                    Now Email Is {UpdateData.email}
                <input type="email" name="name" className='form-control'  onChange={(e)=>SetUpdateData({...UpdateData,email:e.target.value})}/>
                  E-mail:<br/>
                  Now Password is {UpdateData.comment}
                  <input type="text" name="mail" className='form-control'  onChange={(e)=>SetUpdateData({...UpdateData,comment:e.target.value})}/>
                  Password:<br/>
                  {/* <button onClick={()=>handleUpdate()} type="submit" value="Send"> Ok</button> */}
                </div>
            </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=>invokeModal(!isShow)}>
            Close
          </Button>
          <Button variant="dark" onClick={()=>handleUpdate()}>
            Store
          </Button>
        </Modal.Footer>
      </Modal>
        
    </div>

  )
}

export default View