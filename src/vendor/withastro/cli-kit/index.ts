import { nouns, adjectives } from './words.ts'

export function generateProjectName() {
    const adjective = random(adjectives);
    const validNouns = nouns.filter(n => n[0] === adjective[0]);
    if (validNouns.length < 2) {
        return `${random(adjectives)}-${random(nouns)}`;
    }
    const noun = random(validNouns);
    return `${adjective}-${noun}`;
}

const random = (...arr: unknown[]) => {
    arr = arr.flat(1);
    return arr[Math.floor(arr.length * Math.random())];
}