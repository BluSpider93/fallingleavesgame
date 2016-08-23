/**
 * Created by dustinbaird on 6/13/16.
 */
app.factory('aboutFactory', [
    function() {
        var _self = this;

        _self.aboutConfig = {
            lines: [
                {
                    text: 'Falling Leaves is a game I started to get some experience coding. The game is driven by choices'
                    +
                    '. Each choice you make "branches" you further and further from the "trunk" of the story, so you could end'
                    +
                    ' up anywhere in the in game world, just as a leaf falling from a tree could.'
                },
                {
                    text: "My name is Dustin Baird, I'm the Primary developer on this project, as well as the owner of "
                    +
                    "Baird Bros Game Studios. I would like to thank Gabriel Doty for his guidance and critiques throughout"
                    +
                    " development. I'd also like to thank Lauren Hawkins (AKA Riot-Hawk) and Cody Badders for letting me"
                    +
                    " bounce ideas off of them."
                },
                {
                    text: 'This game is dedicated to Elijah "Stormy" Baird. Even though he never really liked video games,'
                    +
                    ' he sure as hell liked trains. And I made sure to have some of those in here.'
                }
            ]
        };

        return _self;
    }
]);