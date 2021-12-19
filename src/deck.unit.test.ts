import { Card, getDeck, Suit, Value } from './deck'
import { isSameCard, isSameSuit, totalMatchingCards } from './helpers/matching'

const rocket1 = { suit: Suit.Rocket, value: Value.One }

describe('deck', () => {
    it('should contain only Rockets 1-4', () => {
        const result: Set<Card> = getDeck()

        const rockets: Card[] = [
            rocket1,
            { suit: Suit.Rocket, value: Value.Two },
            { suit: Suit.Rocket, value: Value.Three },
            { suit: Suit.Rocket, value: Value.Four },
        ]

        rockets.forEach((r) => {
            expect(totalMatchingCards(result, r, isSameCard)).toBe(1)
        })
        expect(totalMatchingCards(result, rocket1, isSameSuit)).toBe(4)
    })

    it('should be the cartesian of standard suits and all values', () => {
        const result: Set<Card> = getDeck()
        expect(totalMatchingCards(result, {} as Card, () => true)).toBe(40)
    })
})
