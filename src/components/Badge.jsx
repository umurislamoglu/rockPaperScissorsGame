import React from 'react'

const Badge = ({name , win}) => {
    return (
        <div className={`badge ${name} ${win?"ripple":""} `}>
        <div className="innercircle" >
            <img src={`/images/${name}.svg`} alt="badge"/>
        </div>
    </div>
    )
}

export default React.memo(Badge) 
