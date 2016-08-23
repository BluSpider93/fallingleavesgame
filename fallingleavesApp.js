app.controller(
    'fallingleavesController', [
    "leafStoryFactory", 'aboutFactory',
    
    function (leafStoryFactory, aboutFactory) {

        var _self = this;


        _self.background = "/img/alphaBackground.jpeg";
        
        _self.factory = leafStoryFactory;

        _self.menuConfig = {
            visible: false,
            statsVisible: false,
            equipmentVisible: false,
            inventoryVisible: false,
            weaponsVisible: false,
            armorVisible: false,
            accessoriesVisible: false
        };

        _self.player = {
            name: null,
            class: '',
            alignment: '',
            stats: [
                {
                    name: 'Strength',
                    value: 1
                },
                {
                    name: 'Vitality',
                    value: 1
                },
                {
                    name: 'Agility',
                    value: 1
                },
                {
                    name: 'Intellect',
                    value: 1
                },
                {
                    name: 'Charm',
                    value: 1
                }
            ],
            equipment: {
                weapon: {
                    name: 'None',
                    damage: '1',
                    description: "You're unarmed, idiot."
                },
                armor: {

                },
                accessory: {}
            },
            setPlayerName: function (username) {
                _self.player.name = username
            }
        };

        _self.playerEquipment = {};

        _self.playerInventory = {
            weapons: [],

            armor: [
                {
                    name: 'Street Clothes',
                    rating: 1,
                    value: 1,
                    description: "A hoodie and jeans.",
                    equipped: false
                }
            ],

            accessories: [
                {
                    name: 'Wristband',
                    value: '5',
                    effect: '',
                    description: 'An elastic wristband. It has your favorite games logo embroidered on it',
                    equipped: false
                }
            ],

            currency: [
                {
                    name: 'Dollars',
                    amount: 20
                }
            ]
        };

        _self.backImg = function(url) {

        };


        _self.submitUsernameForm = function (username) {
            _self.player.setPlayerName(username)
        };

        _self.changeBranch = function(option) {
            _self.story = option;
            if (option.background) {
                _self.background = option.background;
            }
        };



        _self.renderStoryText = function (story) {
            var newStory = story.replace('{{PLAYERNAME}}', _self.player.name);
            return newStory;
        };

        /*_self.story = _self.main.test; */
        _self.story = leafStoryFactory.main.intro;


        /*

         Strength
         A measure of how physically strong a character is. Strength controls the
         maximum weight the character can carry, melee damage. Some weapons also have a
         Strength requirement.

         Vitality
         A measure of how sturdy a character is. Vitality also influences hit points,
         resistances for special types of damage (poisons, illness, heat etc.) and fatigue.

         Agility
         A measure of how agile a character is. Agility controls attack, movement speed
         and accuracy, as well as evading an opponent's attack.

         Intellect
         A measure of a character's problem-solving ability. Intellect controls your
         character's ability to comprehend foreign languages and their skill in magic.

         Charm
         A measure of a character's social skills, and sometimes their physical appearance.
         Charisma generally influences prices while trading, and NPC reactions.

         Wisdom
         A measure of a character's common sense and/or spirituality. Wisdom controls your
         character's ability to cast certain spells, communicate to mystical entities, and
         discern other characters' motives or feelings.

         Luck
         A measure of a character's luck. Luck might influence anything, but mostly random
         items, encounters and critical hits.

         strength
         vitality
         agility
         intellect
         charm
         wisdom
         luck

         */

    }
]);