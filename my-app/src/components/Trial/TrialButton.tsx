import React, { FC } from 'react';
import './Trial.css';
import { trialObject } from './trialObject';


type Props = {
    state: string
    setState: (str: string) => void
}

const TrialButton: FC<Props> = (props) => {
    const {state, setState} = props

   const handlerButton = (value: string) => {
        setState(value)
   }
  return (
    <div>
        <button className={state === trialObject.one ? 'trial-active' : ''}   onClick={() => handlerButton(trialObject.one)}>1</button>{' '}
        <button className={state === trialObject.two ? 'trial-active' : ''}   onClick={() => handlerButton(trialObject.two)}>2</button>{' '}
        <button className={state === trialObject.three ? 'trial-green ' : ''}   onClick={() => handlerButton(trialObject.three)}>3</button>{' '}
        <button className={state === trialObject.four ? 'trial-green ' : ''}   onClick={() => handlerButton(trialObject.four)}>4</button>{' '}
        <button className={state === trialObject.five ? 'trial-yellow' : ''}   onClick={() => handlerButton(trialObject.five)}>5</button>{' '}
        <button className={state === trialObject.six ? 'trial-purple' : ''}   onClick={() => handlerButton(trialObject.six)}>6</button>
    </div>
  )
}

export default TrialButton
