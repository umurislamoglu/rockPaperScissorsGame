import React from 'react'

const Choice = ({name , setChoice , setTrigger , setComputerChoice , options}) => {

    let randInt = Math.floor(Math.random() * 3);



    const handleChoice= (e) => {
        e.preventDefault();
        setChoice(name)
        setComputerChoice(options[randInt]);

        setTrigger(true)


    }


    return (
        <div className={`outercircle ${name}`} onClick={handleChoice}>
            <div className="innercircle" >
                <img src={`/images/${name}.svg`} alt="choice"/>
            </div>
        </div>
    )
}

export default Choice
