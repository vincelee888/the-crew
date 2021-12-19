import { Card, Suit } from './deck'
import { fstWins } from './ranking'

describe('ranking', () => {
    it('Rocket trumps non-Rockets', () => {
        const rocket: Card = {
            suit: Suit.Rocket,
            value: 1,
        }
        const other: Card = {
            suit: Suit.Cross,
            value: 9,
        }

        expect(fstWins(rocket, other)).toBeTruthy()
        expect(fstWins(other, rocket)).toBeFalsy()
    })
    it('Rocket ranked by Value', () => {
        const rocket4: Card = {
            suit: Suit.Rocket,
            value: 4,
        }
        const rocket3: Card = {
            suit: Suit.Rocket,
            value: 3,
        }

        expect(fstWins(rocket4, rocket3)).toBeTruthy()
        expect(fstWins(rocket3, rocket4)).toBeFalsy()
    })
    it('given second card not same suit as first, first wins', () => {
        const first: Card = {
            suit: Suit.Triangle,
            value: 1,
        }
        const second: Card = {
            suit: Suit.Circle,
            value: 9,
        }

        expect(fstWins(first, second)).toBeTruthy()
    })
    it('given cards are the same suit, highest rank wins', () => {
        const first: Card = {
            suit: Suit.Circle,
            value: 9,
        }
        const second: Card = {
            suit: Suit.Circle,
            value: 8,
        }

        expect(fstWins(first, second)).toBeTruthy()
        expect(fstWins(second, first)).toBeFalsy()
    })
})
