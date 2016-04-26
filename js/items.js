/**
 * Created by dustinbaird on 4/18/16.
 */


app.module('fallingleavesItems', [function () {
    var _self = this;


    _self.weapons = [
        {
        name: "Pocket Knife",
        damage: 5,
        value: 5,
        range: "short",
        speed: 10,
        description: "A simple flip open pocket knife. It's kind of dull."
    },
    {
        name: "Baseball Bat",
        damage: 5,
        value: 10,
        range: "short-medium",
        description: "Your trusty old baseball bat."
    },
    {
        name: "Pistol",
        damage: 25,
        value: 300,
        range: "medium-long",
        description: "A simple handgun",
        equipped: false
    }
    ];
    
    _self.armor = [];
    _self.accessories = [];
    _self.items = [];
    _self.keyItems = [];
    _self.questItems = [];
};