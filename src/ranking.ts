import { Card, Suit } from './deck'
import { isSameSuit } from './helpers/matching'

const firstCardIsTrump = (card1: Card, card2: Card) =>
    card1.suit === Suit.Rocket && card2.suit !== Suit.Rocket
const secondCardIsTrump = (card1: Card, card2: Card) =>
    firstCardIsTrump(card2, card1)
const areNotSameSuit = (card1: Card, card2: Card) => !isSameSuit(card1, card2)

const higherValueWins = (card1: Card, card2: Card) => card1.value > card2.value
const firstCardWins = (_?: Card, __?: Card) => true
const firstCardLoses = (_?: Card, __?: Card) => false

type Rule = {
    guard: (card1: Card, card2: Card) => boolean
    isFirstCardTheWinner: (card1: Card, card2: Card) => boolean
}

const sameSuitsAreRankedByValue: Rule = {
    guard: isSameSuit,
    isFirstCardTheWinner: higherValueWins,
}
const firstCardTrumpBeatsNoneTrumps: Rule = {
    guard: firstCardIsTrump,
    isFirstCardTheWinner: firstCardWins,
}
const firstCardNoneTrumpLosesToTrump: Rule = {
    guard: secondCardIsTrump,
    isFirstCardTheWinner: firstCardLoses,
}
const firstCardsSuitLeads: Rule = {
    guard: areNotSameSuit,
    isFirstCardTheWinner: firstCardWins,
}

const rules = [
    sameSuitsAreRankedByValue,
    firstCardTrumpBeatsNoneTrumps,
    firstCardNoneTrumpLosesToTrump,
    firstCardsSuitLeads,
]

export function fstWins(card1: Card, card2: Card) {
    const rule = rules.find((r) => r.guard(card1, card2))

    return rule?.isFirstCardTheWinner(card1, card2) ?? false
}
