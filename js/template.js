/**
 * Created by dustinbaird on 6/1/16.
 */
var app = angular.module("leafEngineApp", []);

app.factory('leafEngineFactory', [
    function () {

        var _self = this;
        
        _self.main = {

            /*
             Below is one "branch" of the story, you might call this one the "Trunk"
             as it's the first part of the story that everyone sees.
             You can make it so that no option or "branch" will see anything from another
             branch if you so choose.
             */

            templateIntro: {
                currentIndex: 0,
                lines: [
                    {
                        text: "Welcome to the Leaf Engine."
                    },
                    {
                        text: "Thus far, the Leaf Engine is capable of very little. We're working our way into"
                        + "being able to include stats and monsters, but so far it can only handle basic choice"
                        + "based stories."
                    },
                    {
                        text: "Please feel free to email me any questions or even requests! Maybe we can work"
                        + "something out if you have a specific idea in mind."
                    },
                    {
                        /*
                        This is the Options portion.
                        The "text" here is what displays in the dialogue box.
                        The options display as buttons below the dialogue box
                        instead of the normal navigation buttons.

                        The "value" of each option is not displayed, and is used
                        by the engine to navigate to the next branch of the story.
                        the "text" under each value is what is displayed on the
                        button.

                        You can have as many or as little options as your little heart
                        desires, just be aware that it may get messy or confusing for
                        your players if you have too many options!
                         */

                        text: "Options.",
                        options: [
                            {
                                value: "option1",
                                text: 'Option One'
                            },
                            {
                                value: "option2",
                                text: 'Option Two'
                            },
                            {
                                value: "option3",
                                text: 'Option 3'
                            }
                        ]
                    }
                ]
            },

            /*
            Below is our first branch off the trunk!
            Notice it's named after the value of the first option.
            I mean, that's pretty much all that's unique about it.
            */

            option1: {
                currentIndex: 0,
                lines: [
                    {
                        text: "This is displayed in the dialogue box."
                    },
                    {
                        text: "Options 2.0",
                        options: [
                            {
                                /*
                                Notice below that I'm using different options
                                than option1 or option2 etc here.
                                This is because each branch exists outside of
                                the other branches, and they are completely accessible
                                from any other branch.
                                option323449 could have an option with a value of
                                "option1" and we'd end up back here again.
                                You could use this to your advantage, but in the current
                                state of the engine it isn't recommended as it could cause
                                loops and whatever that just wouldn't be fun.
                                 */
                                value: "option11",
                                text: "Option 11"
                            },
                            {
                                value: "option12",
                                text: "Option 12"
                            }
                        ]
                    }
                ]
            },

            /*
            If the player decided to select "Option Two" or "Option Three",
            they will skip over option1 and continue on option2 or option3
            depending on their selection.
             */

            option2: {
                currentIndex: 0,
                lines: [
                    {
                        text: "Text"
                    },
                    {
                        text: "Texxxt"
                    },
                    {
                        text: "Words and stuff",
                        options: [
                            {
                                value: "option21",
                                text: "Option Two One"
                            }
                        ]
                    }
                ]
            },

            option3: {
                currentIndex: 0,
                lines: [
                    {
                        text: "You died.",
                        options: [
                            {
                                value: "templateIntro",
                                text: "END"
                            }
                        ]
                    }
                ]
            },

            option11: {
                /*
                This would be the first branch of the first branch from
                the "Trunk" of the story.
                 */
                currentIndex: 0,
                lines: [
                    {
                        text: "text",
                        options: [
                            {
                                value: 'templateIntro',
                                text: "End"
                            }
                        ]
                    }
                ]
            },

            option21: {
                currentIndex: 0,
                lines: [
                    {
                        text: ""
                    },
                    {
                        text: ""
                    },
                    {
                        text: "",
                        options: [
                            {
                                value: "",
                                text: ""

                            }
                        ]
                    }
                ]
            }
        };
        
        return _self;
    }
]);