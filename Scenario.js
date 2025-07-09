class Choices { 
    constructor(direct, distract, delegate, delay, document, nothing) {
        this.direct = direct;
        this.distract = distract;
        this.delegate = delegate;
        this.delay = delay;
        this.document = document;
        this.nothing = nothing; 
    }
}

class Outcome_Effect { 
    constructor(text, impact, combine) {
        this.text = text;
        this.impact = impact;
        this.combine = combine;

    }   
}

class Outcome_Statement { 
    constructor (text, impact, sentence) {
        this.text = text;
        this.impact = impact;
        this.sentence = sentence;

    }
}

class Outcomes {
    constructor(direct, distract, delegate, delay, document, nothing) { 
        this.direct = direct;
        this.distract = distract;
        this.delegate = delegate;
        this.delay = delay;
        this.document = document;
        this.nothing = nothing; 
    }
}

class Scenario {
    constructor(type, title, description, choices, outcomes) {
        this.type = type;
        this.title = title;
        this.description = description;
        this.choices = choices;
        this.outcomes = outcomes;
    }
}

var tutorial1_choice = new Choices("Address Mark directly about his comment.",
                                   "Shift the conversation away from Mark's comment.",
                                    "Speak to the tutor after the session.",
                                    "Check in with Priya after the tutorial.",
                                    "Make a disclosure using the Harmful Disclosure Tool.",
                                    "Remain silent and observe."                                      
                                   )

var tutorial1_direct = new Outcome_Effect("You calmly but firmly interject, 'Mark, that comment isn't appropriate " + 
                                          "and it's based on a harmful stereotype. It makes the learning environment " + 
                                          "uncomfortable for others.' Mark looks embarrassed and mumbles an apology. " + 
                                          "Priya looks up, surprised and grateful. The tutor then addresses the class, " + 
                                          "reinforcing respectful discussion. Mark's behaviour is challenged, and Priya " + 
                                          "feels seen and supported, improving the tutorial environment.",
                                          "positive",
                                          this.combine = new Set(["delegate", "delay", "document"])
                                        )

                                     
var tutorial1_distract = new Outcome_Effect("You loudly 'realise' you've forgotten your textbook " + 
                                            "and ask the tutor a complex, off-topic question about " + 
                                            "the next week's reading, shifting the focus. The tutor " + 
                                            "is momentarily sidetracked, and the conversation moves away " +
                                            "from Mark's comment. Priya gets a moment to compose herself, " + 
                                            "and the immediate tension dissipates. While the comment wasn't " + 
                                            "directly addressed, the situation was defused.",
                                            "neutral",
                                            this.combine = new Set(["delegate", "delay", "document"]), 

                                        )
                    
var tutorial1_delegate = new Outcome_Effect("After the tutorial, you discreetly approach the tutor and explain what Mark " +
                                            "said and how it affected Priya. You suggest the tutor address it with Mark or " + 
                                            "the class. The tutor thanks you, acknowledging the importance of a safe space, " + 
                                            "and confirms they will follow up. This ensures the issue is handled by someone in " + 
                                            "authority, potentially leading to educational outcomes for Mark and systemic change.",
                                            "positive",
                                            this.combine = new Set (["direct", "distract", "delay", "document"])
                                        )
            
// if delay and delegate together, combine? 
var tutorial1_delay = new Outcome_Effect("After the tutorial ends, you approach Priya and say, 'I'm so sorry about what Mark said. " + 
                                        "That was completely out of line. Are you okay?' Priya expresses her frustration and hurt. " + 
                                        "You listen empathetically, validate her feelings, and offer to walk her to the student " + 
                                        "support services if she wants to report it. While the incident wasn't stopped, you provided " + 
                                        "crucial emotional support and a pathway for further action.",
                                        "positive",
                                        this.combine = new Set(["direct", "distract", "delegate", "document"])
                                        )

var tutorial1_document = new Outcome_Effect("You quickly open a note on your phone and jot down Mark's exact words, the time, " + 
                                            "date, and the context of the tutorial. You also note Priya's reaction and " + 
                                            "the tutor's inaction. The incident plays out as you record. You now have detailed " + 
                                            "evidence that could be used if Priya or someone else decides to make a formal complaint " + 
                                            "to the university's equity office. However, the immediate impact on Priya remains.",
                                            "neutral",
                                            this.combine = new Set (["direct", "distract", "delegate", "delay"])
                                        )

var tutorial1_nothing = new Outcome_Effect("You remain silent, feeling uncomfortable but unsure what to do. The tutorial continues " + 
                                            "as if nothing happened. Priya remains withdrawn and quiet. Mark's behaviour goes " + 
                                            "unchallenged, potentially reinforcing his belief that such comments are acceptable. " + 
                                            "Priya feels isolated and unsupported, and the learning environment is subtly diminished " + 
                                            "for students from diverse backgrounds.",
                                            "negative",
                                            this.combine = []
                                        )

var tutorial1_outcomes = new Outcomes(tutorial1_direct,
                                    tutorial1_distract,
                                    tutorial1_delegate,
                                    tutorial1_delay,
                                    tutorial1_document,
                                    tutorial1_nothing
)

var tutorial1 = new Scenario("Tutorial",
                            "The 'Joke' in the Tutorial", 
                            "During a lively tutorial discussion on Australian history, " + 
                            "a student named Mark makes a 'joke' about a particular cultural group's intelligence, " +
                            "implying they are less capable. Another student, Priya, who is from that cultural background, " +
                            "visibly flinches and looks down, becoming quiet for the rest of the session. " + 
                            "The tutor seems to ignore it, moving on quickly.",
                            tutorial1_choice,
                            tutorial1_outcomes
)

// user selects all their choices, and confirms 
function inputChoice(scenario, input) { 
    var choice_list = scenario.choices
}

