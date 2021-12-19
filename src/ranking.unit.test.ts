import { Card, Suit, Value } from './deck'
import { fstWins } from './ranking'

describe('ranking', () => {
    it('Rocket trumps non-Rockets', () => {
        const rocket: Card = {
            suit: Suit.Rocket,
            value: Value.One,
        }
        const other: Card = {
            suit: Suit.Cross,
            value: Value.Two,
        }

        expect(fstWins(rocket, other)).toBeTruthy()
        expect(fstWins(other, rocket)).toBeFalsy()
    })
    it('Rocket ranked by Value', () => {
        const rocket4: Card = {
            suit: Suit.Rocket,
            value: Value.Two,
        }
        const rocket3: Card = {
            suit: Suit.Rocket,
            value: Value.One,
        }

        expect(fstWins(rocket4, rocket3)).toBeTruthy()
        expect(fstWins(rocket3, rocket4)).toBeFalsy()
    })
    it('given second card not same suit as first, first wins', () => {
        const first: Card = {
            suit: Suit.Triangle,
            value: Value.One,
        }
        const second: Card = {
            suit: Suit.Circle,
            value: Value.Nine,
        }

        expect(fstWins(first, second)).toBeTruthy()
    })
    it('given cards are the same suit, highest rank wins', () => {
        const first: Card = {
            suit: Suit.Circle,
            value: Value.Nine,
        }
        const second: Card = {
            suit: Suit.Circle,
            value: Value.Eight,
        }

        expect(fstWins(first, second)).toBeTruthy()
        expect(fstWins(second, first)).toBeFalsy()
    })
})
