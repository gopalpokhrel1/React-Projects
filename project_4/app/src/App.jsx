
import './App.css'
import Food from './Components/FoodZone/Food'
import Navbar from './Components/Navbar/Navbar'
import { useState, useEffect } from 'react';


 export const BACKEND_URL = 'http://localhost:9000';


function App() {

  
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] =useState(null);
  const [filter, setFilter]= useState(null);



 
 useEffect(()=>{
  const fetchData= async ()=>{

    setLoading(true);

    try {
        const response = await fetch(BACKEND_URL);
        
        const data = await response.json()

         
        

        setFilter(data)
        setValue(data);

        setLoading(false);
        


    }
    catch(error){
         setErr('unable to fetch data')
    }
   


   

  
}

fetchData();

 }, [])

 const Filterdata = (val)=>{

  if(val==='All'){
     

    setFilter(value);

     
  }

  



  else if(val==='Breakfast'){
    const select = value ?.filter((value)=> value.type.toLowerCase().includes(val.toLowerCase()));

    setFilter(select)

    
  }
  else if(val==='Lunch'){
    const select = value ?.filter((value)=> value.type.toLowerCase().includes(val.toLowerCase()));

    setFilter(select)
    
  }
  else if(val==='Dinner'){
    const select = value ?.filter((value)=> value.type.toLowerCase().includes(val.toLowerCase()));

    setFilter(select)

  
  }

  

  

 }
 

 const showData = (e)=>{

   const search = e.target.value;


  


   if(search===""){
     setFilter('');
   }

   const select = value ?.filter((value)=> value.name.toLowerCase().includes(search.toLowerCase()));

  

   setFilter(select);


 }



 

 if(err) return <div>{err}</div>
 if(loading)  return <div>loading....</div>

 


  
  return (
    <>
       <Navbar  data={showData}  item={Filterdata} />


       <Food  data_item={filter}/>
    </>
  )
}

export default App
