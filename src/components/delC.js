import { useEffect } from "react";
import { useParams } from "react-router-dom";
const DeleteC = () => {
    
    const { id } = useParams();

    useEffect(()=>{
        fetch(`http://localhost:9000/candidates/${id}`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(res => {
            if(res.message === 'candidate Deleted successfully'){
                alert(res.message);
                window.location.href = '/home';
            }
        }).catch(()=>{
            alert('Try again');
             window.location.href = '/home';
        })
    },[]);

    return ( 
        <div className="">
            wait a bit....
        </div>
     );
}
 
export default DeleteC;