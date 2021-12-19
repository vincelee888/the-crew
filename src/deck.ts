export enum Suit {
    Rocket,
    Square,
    Triangle,
    Circle,
    Cross,
}
export enum Value {
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
}

export type Card = {
    suit: Suit
    value: Value
}

export const getDeck = () => {
    const rockets = range(1, 4).map(
        (v) => ({ suit: Suit.Rocket, value: v } as Card)
    )
    const others: Card[] = []

    return new Set([...rockets, ...others])
}

const range = (start: number, end: number) =>
    new Array(end - start + 1).fill(true).map((_, i) => i + start)
