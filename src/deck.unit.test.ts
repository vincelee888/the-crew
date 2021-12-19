import { Card, getDeck, Suit } from './deck'
import { isSameCard, isSameSuit, totalMatchingCards } from './helpers/matching'

describe('deck', () => {
    it('should contain only Rockets 1-4', () => {
        const result: Set<Card> = getDeck()

        const rockets: Card[] = [
            { suit: Suit.Rocket, value: 1 },
            { suit: Suit.Rocket, value: 2 },
            { suit: Suit.Rocket, value: 3 },
            { suit: Suit.Rocket, value: 4 },
        ]

        rockets.forEach((r) => {
            expect(totalMatchingCards(result, r, isSameCard)).toBe(1)
        })
        expect(
            totalMatchingCards(
                result,
                { suit: Suit.Rocket, value: 1 },
                isSameSuit
            )
        ).toBe(4)
    })

    // it('should cartesian of standard suits and all values', () => {
    //     const result: Set<Card> = getDeck()
    //     expect(
    //         totalMatchingCards(
    //             result,
    //             { suit: Suit.Rocket, value: 1 },
    //             () => true
    //         )
    //     ).toBe(40)
    // })
})
