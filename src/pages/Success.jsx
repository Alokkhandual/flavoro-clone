import { useEffect, useState } from "react";
import {PropagateLoader} from "react-spinners";

function Success() {
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false);
      },3000);
    },[]);
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            {
                loading ? <PropagateLoader color="#36d7b7" /> :
            <div>
                <h2 className="text-3xl font-semibold mb-4">Order Successful!</h2>
                <p>Yoyr order has been sucessfully placed</p>
            </div>
            }
         
        </div>
    )
}
export default Success;