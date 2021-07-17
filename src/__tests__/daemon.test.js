/* eslint-disable no-underscore-dangle */
import { Daemon } from '../js/classes/importAll';

let daemon;
beforeEach(() => {
    daemon = new Daemon('Zlo');
});

test('5 cells distance', () => {
    daemon.distance = 5;
    expect(daemon.attack).toBe(6);
});

test('10 cells distance', () => {
    daemon.distance = 15;
    expect(daemon.attack).toBe(0);
});

test('stoned char attack', () => {
    daemon.stoned = true;
    daemon.distance = 5;
    expect(daemon.attack.toFixed()).toBe('0');
});
