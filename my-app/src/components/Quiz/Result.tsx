import React, { FC } from 'react'
import questionObject from './questionObject'

type ResultProps = {
    correct: number
}

const Result:FC<ResultProps> = ({correct}) => {
  return (
    <div>
        <h3>Ви набрали {correct} з {questionObject.length} Варіантів</h3>
        <div>
        <a href="/quiz">Грати ще?</a>
        </div>
    </div>
   
  )
}

export default Result
