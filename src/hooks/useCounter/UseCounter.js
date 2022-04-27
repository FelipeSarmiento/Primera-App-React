import React, { useState } from 'react'

export const UseCounter = (initialState ) => {

    const [state, setState] = useState(initialState);

    const ChangeState = (props) => {
        setState(props)
    }

    const ResetSta = () => {
        useState(initialState)
    }

    return ({
        state: state,
        setState: setState,
        changeState: ChangeState,
        resetState: ResetSta
    })
}