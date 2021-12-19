export type Suit = 'Rocket' | 'Triangle' | 'Square' | 'Circle' | 'Cross'

export type Value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type Card = {
    suit: Suit
    value: Value
}

export const getDeck = () =>
    range(1, 4).map((v) => ({ suit: 'Rocket', value: v } as Card))

const range = (start: number, end: number) =>
    new Array(end - start + 1).fill(true).map((_, i) => i + start)
