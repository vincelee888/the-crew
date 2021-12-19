import { Card, getDeck } from './deck'

describe('deck', () => {
    it('should contain only Rockets 1-4', () => {
        const result: Card[] = getDeck()

        const rockets: Card[] = [
            { suit: 'Rocket', value: 1 },
            { suit: 'Rocket', value: 2 },
            { suit: 'Rocket', value: 3 },
            { suit: 'Rocket', value: 4 },
        ]

        rockets.forEach((r) => {
            expect(totalMatchingCards(result, r, isSameCard)).toBe(1)
        })
        expect(
            totalMatchingCards(result, { suit: 'Rocket', value: 1 }, isSameSuit)
        ).toBe(4)
    })
})
function totalMatchingCards(
    haystack: Card[],
    needle: Card,
    matchPredicate: (a: Card, b: Card) => boolean
): number {
    return matchingCards(haystack, needle, matchPredicate).length
}

function matchingCards(
    haystack: Card[],
    needle: Card,
    matchPredicate: (a: Card, b: Card) => boolean
) {
    return haystack.filter((c) => matchPredicate(c, needle))
}

function isSameCard(c1: Card, c2: Card): boolean {
    return c1.suit === c2.suit && c1.value === c2.value
}

function isSameSuit(c1: Card, c2: Card): boolean {
    return c1.suit === c2.suit
}
