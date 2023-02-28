import React, {useState} from 'react';

const Forms = () => {
 const [user, setUser] = useState({
     uname:"",
     pass:"",
 });
// const [ values , setValues] = useState();
 const handleChange = e => {
    const {name,value} = e.target;
    setUser({...user, [name]:value})
    console.log(name,value);
 }

 const handleSubmit = e =>{

//    console.log(setUser({...user})); 
}

    return ( <>
    <h1>Form {user}</h1>
    <form onSubmit={handleSubmit}>
    <input type="text" value={user.uname} name='uname' onChange={handleChange} />
    <input type="password" value={user.pass} name='pass' onChange={handleChange} />
    <button type="submit">Submit</button>
    </form>
    </> );
}
 
export default Forms;



// import React,{useState} from 'react';

// const Button = () => {
//   const [counter,setCounter] = useState(1);
//   const increament = () => setCounter(counter+1);
//   const decreament = () => setCounter(counter-1);

//   return ( <>

//    <h1>{counter}</h1>
//   <button  onClick={increament}>increase</button>
//   <button onClick={decreament}>decrease</button>
  
//   </> );
// }
 
// export default Button;






















