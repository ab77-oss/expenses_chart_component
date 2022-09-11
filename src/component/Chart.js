
import React, {useEffect} from 'react';
import data from '../data.json';


// Find the maximum amount in data.json
let p = -1000;
  // eslint-disable-next-line array-callback-return
  data.map(element => {
  if (element.amount > p){
      p=element.amount
      // Now p is the maximum amount in data.amount ( it's no longer equal to -1000)
  }
  })


const Chart = () => {

    // we use useEffect to differentiate the background of the div
    // with maximum amount from the other divs, 
    //it happens after the first display for one time => []: empty

        useEffect(() => {
            data.forEach(element => {
                var ele = document.getElementsByClassName(`day ${element.day}`)[0];
            if(p===element.amount){
                ele.classList.add('new')
            }else{
                ele.classList.remove('new');
            }
            })
        }, []);


    return (
        <div className="chart">

            {data.map((element) => {
            
                return (
                
                        // display the amount in the head of each div during hovering
                        // and hide it during leaving
                        <div key={element.day} className={`d ${element.day}`} >
                        
                            <div className={`amount ${element.day}`} >${element.amount}</div>
                            
                            <div 
                                className={`day ${element.day}`} 
                                // give each div the height compatible with the amount
                                style={{height:`${2.5*element.amount}px`}}
                                // the "2.5 coefficient" for enhancing the display of the div
                                onMouseOver={() => {
                                var ele = document.getElementsByClassName(`amount ${element.day}`)[0];
                                ele.style.visibility='visible';
                                }} 

                                onMouseLeave={() => {
                                var ele = document.getElementsByClassName(`amount ${element.day}`)[0];
                                ele.style.visibility='hidden';
                                }}></div>

                            <div className='da'>{element.day}</div>
      
                        </div> 
                       
                    )
                
             } )}
        </div>  
    )
}


export default Chart