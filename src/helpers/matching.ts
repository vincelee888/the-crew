import { Card } from '../deck'

export function totalMatchingCards(
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

export function isSameCard(c1: Card, c2: Card): boolean {
    return c1.suit === c2.suit && c1.value === c2.value
}

export function isSameSuit(c1: Card, c2: Card): boolean {
    return c1.suit === c2.suit
}
