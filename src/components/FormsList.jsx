export const FormList = ({data})=>{

   return(


      <div className="showdiv">


         <table>
  <thead>
     <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Martial Status</th>
     </tr>
  </thead>
    {data.map((el)=>( 
     
      <tbody>
         <tr>
            <td>{el.name}</td>
            <td>{el.age}</td>
            <td>{el.address}</td>
            <td>{el.department}</td>
            <td>{el.salary}</td>
            <td>{el.martialstatus}</td>
         </tr>
      </tbody>
      ))}
         </table>
      </div>
   )
}