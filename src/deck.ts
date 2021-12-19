export enum Suit {
    Rocket = 'Rocket',
    Square = 'Square',
    Triangle = 'Triangle',
    Circle = 'Circle',
    Cross = 'Cross',
}
export enum Value {
    One = '1',
    Two = '2',
    Three = '3',
    Four = '4',
    Five = '5',
    Six = '6',
    Seven = '7',
    Eight = '8',
    Nine = '9',
}

export type Card = {
    suit: Suit
    value: Value
}

export const getDeck = () => {
    const cards: Card[] = []
    for (const s in Suit) {
        for (const v in Value) {
            cards.push({ suit: (<any>Suit)[s], value: (<any>Value)[v] })
        }
    }
    return new Set([...cards.filter(isValidCard)])
}

function isValidCard(c: Card) {
    const isLessThanFive = c.value < Value.Five
    return c.suit !== Suit.Rocket || (c.suit === Suit.Rocket && isLessThanFive)
}
