import React from 'react';
import "./topbar.scss";
import{Person,Mail} from "@mui/icons-material";
const Topbar: React.FC=()=>
{

  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
            <a href='#intro' className='logo'>gine.</a>
                <div className="itemcontainer">
                <Person className='icon' />
                <span>+44 12345 67890</span>
                </div>
                <div className='itemcontainer'>
                <Mail className='icon'/>
                <span> abcd@gine.com</span>
                </div>
        </div>
       <div className='center'> 
       <a href='#intro' className='navbar'>Home</a>
       <a href='#portfolio'className='navbar'>Portfolio</a>
       <a href='#features'className='navbar'>Features</a>

       <a href='#contact'className='navbar'>Contact</a>
      </div>

        
      </div>
    </div>
  )
}

export default Topbar;
