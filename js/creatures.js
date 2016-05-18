/**
 * Created by dustinbaird on 5/17/16.
 */


app.module('fallingleavesCreatures', [function () {
    var _self = this;

    _self.playableCharacters = [
        {
            name: 'Player'

        },
        {
            name: 'Clara'
        }
    ];

    _self.enemies = [
        {
            name: "Angel",
            health: 10,
            mana: null,
            str: 7,
            vit: 1,
            agi: 1,
            int: 5,
            cha: 1,
            wis: 1,
            lck: 1
        },
        {
            name: "Demon",
            health: 10,
            mana: null,
            str: 7,
            vit: 1,
            agi: 1,
            int: 5,
            cha: 1,
            wis: 1,
            lck: 1
        },
        {
            name: 'Something',
            health: 1,
            mana: 1,
            str: 1,
            vit: 1,
            agi: 1,
            int: 1,
            cha: 1,
            wis: 1,
            lck: 1
        }
    ];

    _self.armor = [];
    _self.accessories = [];
    _self.items = [];
    _self.keyItems = [];
    _self.questItems = [];
}]);