import React from 'react';
import { Image } from 'react-bootstrap';
import { IoIosAddCircle } from "react-icons/io";

const Sonda = () => {
    return ( 
        <div style={{justifyContent:'center',}}> 
            <Image src='../public/assets/satelite.png' className='sonda-foto'/>
            <IoIosAddCircle style={{width:'2%', height:'2%', left: "12%", top: "12%"}} className='iconos'/>
        </div>
     );
}
 
export default Sonda;