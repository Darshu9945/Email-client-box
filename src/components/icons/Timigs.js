import React from 'react'

const Timigs = (props) => {
    const date=new Date(props.date)
    const todaydate=new Date()
    let ele;
    if(todaydate.toLocaleString("en-US", { day: "2-digit" })!==date.toLocaleString("en-US", { day: "2-digit" })){
         
         ele=(
            <>
            <div>
                {date.toLocaleString("en-US", { month: "long" }).slice(0,3)+' '+ date.toLocaleString("en-US", { day: "2-digit" })}</div>
            
            </>
        )
    }
    else{
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds()
        let gp
        if(hours>12){
            hours=hours-12
            gp="PM"
            if(minutes<=new Date().getMinutes() && hours===new Date().getHours() ){
                const kb=59-minutes
                ele=(
                    <div>
                    {kb+"minutes ago"}
                    </div>
                ) 
                
            }
            else{
                ele=(
                    <div>
                    {hours+":"+minutes+gp}
                    </div>
                )     
            }
        }
        else{
            hours=hours
            gp="AM"
            
        }
       
    }
    
  return (
    <div>
      {ele}
    </div>
  )
}

export default Timigs
