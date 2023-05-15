import React from 'react';
import './recentwork.scss';

function Recentwork() {
  return (
    <div className='recentwork' id='recentwork'>
                    <div className="pgtittle">
                    <h2>My Recent Works</h2></div>
        <div className="wrapper">
            
            <div className="imagecontainer">
                <img src='./assets/work1.png' alt=''/>
                <h2>Plant world</h2>
            </div>
            <div className="imagecontainer">
                <img src='./assets/work2.png' alt=''/>
                <h2>Todolist</h2>
            </div>
            <div className="imagecontainer">
                <img src='./assets/work3.png' alt=''/>
                <h2>password Manager</h2>
            </div>
            <div className="imagecontainer">
                <img src='./assets/work4.png' alt=''/>
                <h2>Antdesign</h2>
            </div>
            <div className="imagecontainer">
                <img src='./assets/work5.png' alt=''/>
                <h2>Login page</h2>
            </div>
            
        </div>
      
    </div>
  )
}

export default Recentwork
