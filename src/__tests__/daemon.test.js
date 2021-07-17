/* eslint-disable no-underscore-dangle */
import { Daemon } from '../js/classes/importAll';

let daemon;
beforeEach(() => {
    daemon = new Daemon('Mag');
});

test('5 cells distance', () => {
    daemon.attack = 2;
    expect(daemon._attack).toBe(9);
});

test('10 cells distance', () => {
    daemon.attack = 15;
    expect(daemon._attack).toBe(0);
});

test('stoned char attack', () => {
    daemon.stoned = true;
    daemon.attack = 2;
    expect(daemon._attack.toFixed()).toBe('4');
});

test('get attack', () => {
    daemon.attack = 2;
    expect(daemon.attack).toBe(9);
});
