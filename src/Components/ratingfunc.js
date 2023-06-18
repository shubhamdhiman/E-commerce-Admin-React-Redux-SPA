export function callRating(value){
    if(value===0 || value<0){
      
      return <i
     className="fa-solid fa-star fa-lg"
     style={{ color: "#00ffef" }}
   ></i>
    }else{
      return <i
      className="fa-regular fa-star fa-lg"
      style={{ color: "#00ffef" }}
    ></i>
    }
    
  }