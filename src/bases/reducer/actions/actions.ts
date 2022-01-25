export type CounterAction =
    { type: 'increaseBy'; payload: { value: number; } } |
    { type: 'reset'; } |
    { type: 'decrement'; }

/*
export const doReset = (): CounterAction => {
    return {
        type: 'reset'
    }
}*/

export const doReset = (): CounterAction => ({
    type: 'reset'
})

export const doDecrement = (): CounterAction => ({
    type: 'decrement'
})

export const doIncreaseBy = (value: number): CounterAction => ({
    type: 'increaseBy',
    payload: {value}
})