import React, { useState } from 'react'
import Game from './Game'
import questionObject from './questionObject'
import Result from './Result'

const Quiz = () => {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)

    const onClickVariants = (index: number) => {
        setStep(step + 1)

        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }

    const question = questionObject[step]


  return (
    <div>
        {step !== questionObject.length ? <Game question={question} onClickVariants={onClickVariants}/> : <Result correct={correct}/>}
    </div>
  )
}

export default Quiz
