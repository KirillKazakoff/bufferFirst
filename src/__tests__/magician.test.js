/* eslint-disable no-underscore-dangle */
import { Magician } from '../js/classes/importAll';

let magician;
beforeEach(() => {
    magician = new Magician('Mag');
});

test('5 cells distance', () => {
    magician.distance = 5;
    expect(magician.attack).toBe(24);
});

test('10 cells distance', () => {
    magician.distance = 15;
    expect(magician.attack).toBe(0);
});

test('stoned char attack', () => {
    magician.stoned = true;
    magician.distance = 5;
    expect(magician.attack.toFixed()).toBe('12');
});

test('get attack', () => {
    magician.distance = 5;
    expect(magician.attack).toBe(24);
});
