import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({good,neutral,bad}) => {
    if(!(good || bad || neutral)){
        return (
        <>
            <h1>statistics</h1>    
            <div>No feedback given</div>
        </>
        )
}
    else 
        return (
            <>
                <h1>statistics</h1>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={good+neutral+bad} />
                <StatisticLine text="average" value={(good+neutral+bad)/3} />
                <StatisticLine text="positive" value={(((good+neutral)/(good+neutral+bad))*100) + "%"} />
            </>
        )
}

export default Statistics
