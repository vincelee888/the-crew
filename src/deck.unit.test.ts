import { Card, getDeck } from './deck'
import { isSameCard, isSameSuit, totalMatchingCards } from './helpers/matching'

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
