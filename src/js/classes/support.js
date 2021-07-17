/* eslint-disable no-underscore-dangle */
import Character from './main';

export default class Support extends Character {
    set attack(cells) {
        const k = 1 - (cells - 1) * 0.1;

        this._attack *= k;
        if (this.stoned) {
            const debuff = Math.log2(cells) * 5;
            this._attack -= debuff;
        }
        if (this._attack < 0) {
            this._attack = 0;
        }
    }

    get attack() {
        return this._attack;
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }
}
