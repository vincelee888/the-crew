import { Card } from './deck'

const areSameSuit = (card1: Card, card2: Card) => {
    return card1.suit === card2.suit
}
const firstCardIsTrump = (card1: Card, card2: Card) => {
    return card1.suit === 'Rocket' && card2.suit !== 'Rocket'
}
const secondCardIsTrump = (card1: Card, card2: Card) => {
    return firstCardIsTrump(card2, card1)
}
const higherValueWins = (card1: Card, card2: Card) => {
    return card1.value > card2.value
}
const firstCardWins = (_?: Card, __?: Card) => {
    return true
}
const firstCardLoses = (_?: Card, __?: Card) => {
    return false
}
const areNotSameSuitAndNotTrump = (card1: Card, card2: Card) => {
    const sameSuit = areSameSuit(card1, card2)
    const firstCardTrump = firstCardIsTrump(card1, card2)
    return !sameSuit && !firstCardTrump
}

type Rule = {
    guard: (card1: Card, card2: Card) => boolean
    check: (card1: Card, card2: Card) => boolean
}

const sameSuitsAreRankedByValue: Rule = {
    guard: areSameSuit,
    check: higherValueWins,
}
const firstCardTrumpBeatsNoneTrumps: Rule = {
    guard: firstCardIsTrump,
    check: firstCardWins,
}
const firstCardNoneTrumpLosesToTrump: Rule = {
    guard: secondCardIsTrump,
    check: firstCardLoses,
}
const firstCardsSuitLeads: Rule = {
    guard: areNotSameSuitAndNotTrump,
    check: firstCardWins,
}

const rules = [
    sameSuitsAreRankedByValue,
    firstCardTrumpBeatsNoneTrumps,
    firstCardNoneTrumpLosesToTrump,
    firstCardsSuitLeads,
]

export function fstWins(card1: Card, card2: Card) {
    const rule = rules.find((r) => r.guard(card1, card2))

    if (rule) return rule.check(card1, card2)

    return false
}
