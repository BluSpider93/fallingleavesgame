app.factory('leafStoryFactory', function() {

        var _self = this;

        _self.main = {

            test: {
                currentIndex: 0,
                lines: [
                    {
                        text: "This is a lot of words in an attempt to quickly and easily assess what the game will look"
                        +
                        "like when there is a lot of text on the screen. So yeah. This is more words. More words"
                        +
                        "go here. Even more words. Wow, that's a lot of words! The quick brown fox jumped over the "
                        +
                        "lazy dog."
                    },
                    {
                        text: "Short sentence."
                    },
                    {
                        id: 1,
                        text: "Options.",
                        options: [
                            {
                                value: "ab01100",
                                text: 'ab01100',
                                sentiment: 2
                            },
                            {
                                value: "ab011000",
                                text: 'ab011000',
                                sentiment: 2
                            },
                            {
                                value: "intro",
                                text: 'intro',
                                sentiment: 2
                            }
                        ]
                    }
                ]
            },

            /* Intro */

            intro: {
                background: "/img/alphaBackground.jpeg",
                currentIndex: 0,
                lines: [
                    {
                        text: "The world of Trii'el is not unlike Earth."
                    },
                    {
                        text: "The people live their lives mostly focused on themselves or their loved ones"
                    },
                    {
                        text: "In the Trii'ic year 4024, they have cars, smart phones, skyscrapers and trains that circle"
                        +
                        " the country."
                    },
                    {
                        text: "They have religion, of course. Churches to their gods can be found in all the cities in "
                        +
                        "Bae'el, the province you live in."
                    },
                    {
                        text: "These churches tell you about the father god, Intus, and his misadventures during the"
                        +
                        " early creation."
                    },
                    {
                        text: "They also tell you about Lecia, the goddess who followed him into your universe."
                    },
                    {
                        text: "Some churches will tell you about Onle, Lecia's husband who came looking for her one day..."
                    },
                    {
                        text: "But most churches consider it blasphemy to accuse Intus of having stolen another god's bride."
                    },
                    {
                        text: "Ironic, considering the heads of the church claim to be direct descendants of Intus himself."
                    },
                    {
                        text: "Implying Intus laid with Bellaeda, a human who was married to the anicent King of what is now Bae'el,"
                        + " the eastern region of Trii'el 4000 years ago."
                    },
                    {
                        text: "But that's none of my business."
                    },
                    {
                        text: 'Anyway, the real story, including Onle, begins before any of the real creation, when '
                        +
                        'Lecia showed up to Trii' + "'el" + 'and was all "You need to come back!" and ' +
                        'Intus was all "Nah, that' + "'s cool. But let me show you my creation!" + '"'
                    },
                    {
                        text: 'So Intus showed Lecia the rock he made. Well, that and the sun and stars and moons and shit.'
                    },
                    {
                        text: 'And Lecia loved that shit.'
                    },
                    {
                        text: 'She loved it so much, she wanted to stay for as long as she could.'
                    },
                    {
                        text: 'Long story short, they had a few daughters, then hubby showed up with his bodyguards.'
                    },
                    {
                        text: 'Onle wandered around Trii' + "'"
                        + 'el admiring his brothers crea- oh, did I mention that?'
                    },
                    {
                        text: 'Yeah, Onle and Intus are totally brothers.'
                    },
                    {
                        text: "Right, so Onle admired Intus' handiwork, but he wanted his wife back. He started"
                        + " arguing with Intus about taking his wife."
                    },
                    {
                        text: 'They flexed their muscles a little, and Lecia got really nervous and started '
                        + 'preparing to leave.'
                    },
                    {
                        text: 'but before she left, she left a gift.'
                    },
                    {
                        text: 'She made you.'
                    },
                    {
                        text: 'Well, your ancient ancestors, anyway.'
                    },
                    {
                        text: "Onle told his escorts to stay and watch over his wife's children"
                    },
                    {
                        text: 'Later on, their children married Onle' + "'"
                        + 's escorts, and had children of their own' +
                        ' and they made their own creations...'
                    },
                    {
                        text: '...that is... except for one of the children...'
                    },
                    {
                        text: "Fyroekra, the youngest daughter, was all alone."
                    },
                    {
                        text: "Feeling left out, she created her own creatures, and twisted the creations of her sisters"
                    },
                    {
                        text: 'Most of her creatures were wiped out in the ensuing wars, and Fyroekra was banished'
                    },
                    {
                        text: 'or so the story goes...'
                    },
                    {
                        id: 1,
                        text: "Enter the world of Trii'el",
                        options: [
                            {
                                value: 'i01',
                                text: 'Finally',
                                sentiment: 0,
                                stop: function(flCtrl) {
                                    
                                }
                            }
                        ]
                    }
                ]
            },

            i01: {
                currentIndex: 0,
                lines: [
                    {
                        text: "All around you are bright lights."
                    },
                    {
                        text: "You can feel the city pulsing around you."
                    },
                    {
                        text: "It’s a Saturday night"
                    },
                    {
                        text: "You check your watch."
                    },
                    {
                        text: "Well, Sunday morning now."
                    },
                    {
                        text: "It's 1 AM, and the parties are only just now slowing down."
                    },
                    {
                        text: "You might have had a bit too much to drink, but you’ll be alright."
                    },
                    {
                        text: "You just climbed out of the subway tunnel, and you’re a few blocks from home."
                    },
                    {
                        id: 1,
                        text: "So… where were you going again?",
                        options: [
                            {
                                value: 'ab0',
                                text: "Another Bar",
                                sentiment: -1
                            },
                            {
                                value: 'hm0',
                                text: "Home",
                                sentiment: 1
                            }
                        ]
                    }
                ]
            },

            /* Cadillac Lounge */

            ab0: {
                background: "/img/CadillacLounge.jpg",
                currentIndex: 0,
                lines: [
                    {
                        text: "You stumble your way to another bar."
                    },
                    {
                        text: "The Cadillac Lounge."
                    },
                    {
                        text: "You look around and see a lot of faces."
                    },
                    {
                        id: 1,
                        text: "Where were you going to sit?",
                        options: [
                            {
                                value: 'ab01',
                                text: "Bar",
                                sentiment: -1
                            },
                            {
                                value: 'ab02',
                                text: "Table",
                                sentiment: 0
                            },
                            {
                                value: 'ab03',
                                text: "Booth",
                                sentiment: 0
                            }
                        ]
                    }
                ]
            },
            /*Sit at a table*/

            ab02: {
                currentIndex: 0,
                lines: [
                    {
                        text: "You look for an empty table, and are sorely disappointed that none are available."
                    },
                    {
                        text: "You want to sit somewhere else?",
                        options: [
                            {
                                value: 'ab01',
                                text: "Bar",
                                sentiment: 0
                            },
                            {
                                value: 'ab03',
                                text: 'Booth',
                                sentiment: 0
                            }
                        ]
                    }
                ]

            },

            /*Booth*/

            ab03: {
                currentIndex: 0,
                lines: [
                    {
                        text: "You look for an empty booth. They seem to have hidden themselves."
                    },
                    {
                        text: "Now what?",
                        options: [
                            {
                                value: 'ab01',
                                text: 'Bar'
                            },
                            {
                                value: 'ab02',
                                text: 'Table'
                            }
                        ]
                    }
                ]
            },

            /*Sitting at the bar*/
            ab01: {
                currentIndex: 0,
                lines: [
                    {
                        text: "You sit at the bar."
                    },

                    {
                        text: "A large man sits to your left and starts talking loudly to the guy on his left about the"
                        +
                        " game on the television."
                    },
                    {
                        text: "A redhead girl sits to your right and is talking in a hushed voice to the girl on her right."
                    },

                    {
                        text: "You ask the bartender for a drink and stare at your phone."
                    },

                    {
                        text: "The redhead notices the article you’re reading and asks you something."
                    },

                    {
                        text: "You look at her in shock for a second."
                    },

                    {
                        text: "YOU: “Huh?”"
                    },

                    {
                        text: 'REDHEAD: “I asked why everyone’s so scared of West Angko. They obviously don’t have the'
                        +
                        ' technology to hit us with missiles”'
                    },

                    {
                        text: "You chat about politics and foreign policy, but you’re not as fluent in politispeak as you"
                        +
                        " normally would be due to the slight inebriation."
                    },

                    {
                        text: "The girl she was talking to gets up and they exchange farewells."
                    },

                    {
                        text: "She turns back to you."
                    },

                    {
                        text: 'CLARA: “My name’s Clara, by the way. It was a pleasure talking to you. Here’s my number.”'
                    },

                    {
                        text: 'YOU: “Thanks! It was nice talking to you, too.”'
                    },

                    {
                        text: 'Clara leaves and you finish your drink.'
                    },
                    {
                        text: "You're tired, and pretty drunk. You should probably head home.",
                        options: [
                            {
                                value: 'ab011',
                                text: 'Home',
                                sentiment: 0
                            }
                        ]
                    }
                ]
            },

            /*Bar02*/

            ab011: {
                currentIndex: 0,
                lines: [
                    {
                        text: "You wake up with a hangover from hell. You check your phone and see a missed call.",
                        options: [
                            {
                                value: 'ab0110',
                                text: "Check your phone",
                                sentiment: 0
                            }
                        ]
                    }
                ]
            },

            ab0110: {
                currentIndex: 0,
                lines: [
                    {
                        text: 'You see a missed call from Clara. When you check your messages you realize you had been'
                        +
                        'messaging back and forth for a few hours. You groan to yourself when you read some of the cheesy'
                        +
                        'messages you sent her. You can' + "'"
                        + 't believe she actually kept messaging you after that.'
                    }, {
                        text: 'You put your phone down and shuffle into the kitchen. You grab a pain killer from the medicine'
                        +
                        'cabinet and a glass of water. As you swallow the pill you flip on the TV.'
                    }, {
                        text: 'Your phone starts ringing as you see something on the TV about some corporate takeover.'
                    }, {
                        text: 'You glance at the phone screen and see that it' + "'s Clara calling.",
                        options: [
                            {
                                value: 'ab01100',
                                text: 'Answer',
                                sentiment: 0
                            }
                        ]
                    }
                ]
            },

            ab01100: {
                currentIndex: 0,
                lines: [
                    {
                        text: '"Hello?"'
                    }, {
                        text: 'CLARA: "{{PLAYERNAME}}? Hey! It' + "s Clara. You still remember me, right?"
                    }, {
                        text: 'YOU: "Yeah... I' + "'m sorry, just still waking up... but yeah, I remember."
                        + '"'
                    }, {
                        text: 'You definitely remember. Gods, she was beautiful... you think... she was beautiful, right?'
                        +
                        'Man, you can' + "'t remember what her face looks like now. How drunk were you?"
                    }, {
                        text: 'CLARA: "So... I was wondering if you wanted to maybe grab some lunch?"',
                        options: [
                            {
                                value: 'ab011000',
                                text: "I don't have a choice, do I?",
                                sentiment: 0
                            }

                        ]
                    }
                ]
            },

            ab011000: {
                currentIndex: 0,
                lines: [
                    {
                        text: 'YOU: "Yeah! How about at 12:30?" You really need to find out if she was actually beautiful.'
                    }, {
                        text: 'CLARA: "That sounds perfect. I'
                        + "'ll meet you at the Soreen Coffee Co. on 5th. " +
                        'See you later!"'
                    }, {
                        text: "You hang up the phone and notice something on the breakfast bar."
                    }, {
                        text: "It's a purple... rock? Crystal, you guess. How did that get there?"
                    }, {
                        text: 'You try not to think about it too hard. You throw some clothes on while you' +
                        ' run out the door.'
                    }, {
                        text: 'As you walk down the sidewalk, you swear you see a puddle of blood in the street out'
                        +
                        ' of the corner of your eye. You do a double take, but the street looks clean the second time '
                        +
                        'around. You tell yourself you need to cut back on the alcohol and keep walking.'
                    }, {
                        text: 'To be continued.',
                        options: [
                            {
                                value: 'intro',
                                text: 'END',
                                sentiment: 0
                            }
                        ]
                    }

                ]
            },

            /*Home*/
            hm0: {
                currentIndex: 0,
                lines: [
                    {
                        text: "You’re only a block away from home at this point."
                    },
                    {
                        text: "You notice something in the road…",
                        options: [
                            {
                                value: 'hm01',
                                text: "Check it out",
                                sentiment: 0
                            },
                            {
                                value: 'hm02',
                                text: "Go inside",
                                sentiment: 0
                            }
                        ]
                    }
                ]
            },

            /*Check it out*/
            hm01: {
                currentIndex: 0,
                lines: [
                    {
                        text: "Is that…?"
                    },
                    {
                        text: "You laugh to yourself."
                    },
                    {
                        text: "There must have been a costume party nearby."
                    },
                    {
                        text: "Someone dressed as an angel passed out in the middle of the road."
                    },
                    {
                        text: "You should probably help them out of the road before they…"
                    },
                    {
                        text: "Oh, shit..."
                    },
                    {
                        text: "That’s…"
                    },
                    {
                        text: "That’s blood."
                    },
                    {
                        text: "You’re on your knees in front of the ‘angel’."
                    },
                    {
                        text: "Her eyes open slowly."
                    },
                    {
                        text: 'ANGEL: "{{PLAYERNAME}}, please…"'
                    },
                    {
                        text: "She’s so beautiful…"
                    },
                    {
                        text: "You can’t help but notice her cleavage, " +
                        "and you almost forget she’s dying in your arms as your eyes wander."
                    },
                    {
                        text: "You didn’t notice before that her robe was translucent."
                    },
                    {
                        text: "Well, except where the blood stained it."
                    },
                    {
                        text: "Blood."
                    },
                    {
                        text: "She’s dying."
                    },
                    {
                        text: "And you’re sitting here ogling her fucking body."
                    },
                    {
                        text: "You can’t let her die."
                    },
                    {
                        text: "You start to pull out your cellphone."
                    },
                    {
                        text: 'ANGEL: "{{PLAYERNAME}}, listen to me."'
                    },
                    {
                        text: "Your eyes dart to hers."
                    },
                    {
                        text: "How does she know your name?"
                    },
                    {
                        text: 'ANGEL: "You need to take this, {{PLAYERNAME}}"'
                    },
                    {
                        text: "She’s holding something."
                    },
                    {
                        text: "She holds it out to you."
                    },
                    {
                        text: "It’s a stone."
                    },
                    {
                        text: "A pretty stone, but a stone nonetheless. What the hell are you supposed to do with this?"
                    },
                    {
                        text: 'ANGEL: "Please bring this to the Chamber of Corlaat in the city of'
                        + ' Behaal. The chaplain there will know what to do with it."'
                    },
                    {
                        text: 'ANGEL: "Please… do this… don’t… fail…"'
                    },
                    {
                        text: "The angel lies dead in front of you."
                    },
                    {
                        text: "...shit.",
                        options: [
                            {
                                value: 'PAD01',
                                text: "Ok.",
                                sentiment: 0
                            }

                        ]
                    }
                ]
            },

            /*Post Angel Death*/

            PAD01: {
                currentIndex: 0,
                lines: [
                    {
                        text: "Ok."
                    },
                    {
                        text: "Everything is fine."
                    },
                    {
                        text: "Well, this dead... angel? You guess?"
                    },
                    {
                        text: "She's not fine."
                    },
                    {
                        text: "She's kinda dead."
                    },
                    {
                        text: "Very... dead."
                    },
                    {
                        text: "You know she's actually an angel now."
                    },
                    {
                        text: "You flipped her over and saw that her wings are in fact wings."
                    },
                    {
                        text: "Like, attached and everything."
                    },
                    {
                        text: "By bone and muscle and skin."
                    },
                    {
                        text: "You always thought angels would be more... ethereal."
                    },
                    {
                        text: "But she has flesh and bone..."
                    },
                    {
                        text: "It makes sense though."
                    },
                    {
                        text: "The church always preached that angels were actually descendants of ancient elves and dwarves"
                    },
                    {
                        text: "They are loved by the goddesses and act as messengers between them."
                    },
                    {
                        text: "You look at the stone she gave you again."
                    },
                    {
                        text: "It's purple, and more of a crystal than a rock, really."
                    },
                    {
                        text: "It's got a strange glow."
                    },
                    {
                        text: "You shove it in your pocket and head up to your room."
                    },
                    {
                        text: "You realize you should probably call the police, but when you turn around..."
                    },
                    {
                        text: "She's gone.",
                        options: [
                            {
                                value: 'PAD02',
                                text: 'Go to bed.',
                                sentiment: 0
                            }
                        ]
                    }
                ]
            },

            /*PAD 02*/

            PAD02: {
                currentIndex: 0,
                lines: [
                    {
                        text: "You wake up with a hangover from hell."
                    },
                    {
                        text: "You look at your nightstand and see the contents of your pockets haphazardly "
                        + "strewn across it."
                    },
                    {
                        text: "You see the crystal the angel gave you last night."
                    },
                    {
                        text: "Shit... that actually happened?"
                    },
                    {
                        text: "You were really hoping it was just a dream."
                    },
                    {
                        text: "You remember what she said though"
                    },
                    {
                        text: "How important it was to bring that rock to Behaal."
                    },
                    {
                        text: "Maybe you should go to the chapel she was talking about. "
                        + "You just need to get to Behaal City."
                    },
                    {
                        text: "That's about 2 hours North of here on the train. Better get some stuff together and get going.",
                        options: [
                            {
                                value: 'intro',
                                text: 'To be Continued...',
                                sentiment: 0
                            }
                        ]
                    }
                ]
            },

            /*Go Inside*/
            hm02: {
                currentIndex: 0,
                lines: [
                    {
                        text: "You head up to your apartment."
                    },
                    {
                        text: "You feel pretty good about yourself."
                    },
                    {
                        text: "That is, until you realize just how much you spent tonight."
                    },
                    {
                        text: "You groan and collapse on your bed."
                    },
                    {
                        text: "You need to get another job soon."
                    },
                    {
                        text: "Your inheritance from your grandma is almost gone."
                    },
                    {
                        text: "You've spent most of it on booze, and too much of it on eating out at restaurants..."
                    },
                    {
                        text: "You notice the leaning tower of pizza boxes in the corner."
                    },
                    {
                        text: "...and pizza."
                    },
                    {
                        text: "Well, you'll check out some wanted ads in the morning."
                    },
                    {
                        text: "For now..."
                    },
                    {
                        text: "...sleep..."
                    },

                    {
                        text: "...to be continued...",
                        options: [
                            {
                                value: 'intro',
                                text: "END",
                                sentiment: 0
                            }
                        ]
                    }
                ]
            }
        };

        return _self;
});