import React, { FC } from 'react'
import { trialObject } from './trialObject'

type Props = {
    one: string,
    two: string,
    three: string,
    four: string,
    five: string,
    six: string,
}

const TrialOjectItem:FC<Props> = () => {
  return (
    <div>
        {trialObject.map(e => <div {...e}/>)}
    </div>
  )
}

export default TrialOjectItem
