import React, { FC } from 'react'
import { trialObject } from './trialObject'
import './Trial.css'


type Props = {
  state: string
  setState: (str: string) => void
}

const TrialButton: FC<Props> = (props) => {
  const {state, setState} = props

  const handleClick = (value: string) => {
    setState(value)
  }
  return (
    <div>
        <button className={state === trialObject.one ? 'trial-blue' : ''}  onClick={() => handleClick(trialObject.one)}> one </button>{' '}
        <button className={state === trialObject.two ? 'trial-red' : ''}  onClick={() => handleClick(trialObject.two)}> two </button>{' '}
        <button className={state === trialObject.three ? 'trial-yellow' : ''}  onClick={() => handleClick(trialObject.three)}> three </button>{' '}
        <button className={state === trialObject.four ? 'trial-green' : ''}  onClick={() => handleClick(trialObject.four)}> four </button>{' '}
        <button className={state === trialObject.five ? 'trial-purple' : ''}  onClick={() => handleClick(trialObject.five)}> five </button>{' '}
        <button className={state === trialObject.six ? 'trial-skyBlue' : ''}  onClick={() => handleClick(trialObject.six)}> six </button>
    </div>
  )
}

export default TrialButton
