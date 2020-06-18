import React, {useEffect,useState} from 'react';



 const UserHeader = ({user,price})=>{
  const [name, setName] = useState('Guest')
  
    useEffect(() => {
  if( user !== null && user !== ''){
    
    let index = user.local.email.indexOf('@');
    setName(user.local.email.slice(0, index));
    
    if(name.length>19){
      setName(name.slice(0,16)+ '...') 
    } 
  }
  
  }, [user,name])

return(
  <div className="price-div">
   <span className="userName">Hello, {name}</span>
   <a href ="/cart" className="cart"><span className="price-href">{price !== undefined ? price : 0}$</span></a>
   <div className="logout-div">
     {name === 'Guest' ? (
       ''
     ) : (
       <form method='post' action='/logout'>
       <button className="logout-button" type="submit">Logout</button>
        </form>
     ) }
  </div>
</div>
)
}
export default UserHeader