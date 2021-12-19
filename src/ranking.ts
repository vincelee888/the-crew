import { Card } from './deck'

const areSameSuit = (card1: Card, card2: Card) => card1.suit === card2.suit
const firstCardIsTrump = (card1: Card, card2: Card) =>
    card1.suit === 'Rocket' && card2.suit !== 'Rocket'
const secondCardIsTrump = (card1: Card, card2: Card) =>
    firstCardIsTrump(card2, card1)
const areNotSameSuit = (card1: Card, card2: Card) => !areSameSuit(card1, card2)

const higherValueWins = (card1: Card, card2: Card) => card1.value > card2.value
const firstCardWins = (_?: Card, __?: Card) => true
const firstCardLoses = (_?: Card, __?: Card) => false

type Rule = {
    guard: (card1: Card, card2: Card) => boolean
    isFirstCardTheWinner: (card1: Card, card2: Card) => boolean
}

const sameSuitsAreRankedByValue: Rule = {
    guard: areSameSuit,
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

    if (rule) return rule?.isFirstCardTheWinner(card1, card2) ?? false
}
