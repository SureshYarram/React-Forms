import axios from "axios";
import { useEffect, useState } from "react"
import { FormList } from "./FormsList";

export const Forms = ()=>{


      const [formData,setFormData]= useState({})
      const [data,setData] = useState([])

      const handlecahnge = (e)=>{
        
          const {id,value} = e.target;
         console.log(id,value)
          setFormData({...formData, 
               [id]:value});   
              
      }
         const GetData = ()=>{
           if(formData=="") return alert("enter")
           axios.get("http://localhost:8080/Employes").then((res)=>{
            setData(res.data);
            
           })
         }
         const HandleSubmit = (e)=>{
          e.preventDefault();
         // axios.post("http://localhost:8080/Employes",formData);
         if(formData.name === "" || formData.age === "" || formData.address === "" || formData.department === "" || formData.salary === ""){
          alert("Please enter details")
          return;
      }


         fetch("http://localhost:8080/Employes",{
          method:"POST",
          body:JSON.stringify({
            name:formData.name,
            age:formData.age,
            address:formData.address,
           department:formData.department,
          salary:formData.salary,
          martialstatus:formData.martialstatus
        }        
),
          headers:{
              "content-type":"application/json"
                                                     }
                  }).then(()=>{
                            GetData();
                     })

        }
            useEffect(()=>{
              GetData();
            },[])

         
      
     
    return(
    
      <div>

         <h1>Employee Details Form</h1>
      <div className="inputdiv">
        <form onSubmit={ HandleSubmit}>
          <input type="text" placeholder="Enter Emloyee name" id="name" onChange={handlecahnge}   />

          <input type="number" placeholder="Enter your age" id="age" onChange={handlecahnge} />

          <input type="text" placeholder="Enter your Address" id="address" onChange={handlecahnge} />

             <select name="department" id="department"  onChange={handlecahnge}>
               <option value="">select</option>
                <option value="civils">Civils</option>
                <option value="Electronics">Electronics</option>
            </select> 
                
           
       <input type="text"  placeholder="Enter your salary" id="salary"  onChange={handlecahnge}/>

       <input type="checkbox" name="married" id="martialstatus" value="married" onChange={handlecahnge} />:Married
       <input type="checkbox" name="married" id="martialstatus" value="unmarried"  onChange={handlecahnge}/>:Unmarried

           <input className="button" type="submit" value="submitData" />

        </form>
        </div>
         <FormList  data = {data}/>
        </div>

    )
}