/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'In what year did Norway gain independence from Sweden?',
      answers: [
        '1948',
        '1905',
        '1865',
        '1654'
      ],
      correctAnswer: '1905'
    },
    {
      question: "What is the date of Norway's Independence day?",
      answers: [
        'November 3rd',
        'July 4th',
        'May 17th',
        'December 25th'
      ],
      correctAnswer: 'May 17th'
    },
    {
      question: 'How many counties are there in Norway?',
      answers: [
        '5',
        '11',
        '18',
        '26'
      ],
      correctAnswer: '11'
    },
    {
      question: 'What is the population of Norway?'
      answers:  [
        '5 million',
        '7 million',
        '18 million',
        '90 million'
      ],
      correctAnswer: '5 million'
    },
    {
      question: 'What is the most populous city in Norway?'
      answers:  [
        'Bergen',
        'Trondheim',
        'Oslo',
        'Stavanger'
      ],
      correctAnswer: 'Oslo'
    },
    {
      question: 'How many political parties currently hold seats in Norwegian parliament?'
      answers:  [
        '2',
        '5',
        '9',
        '18'
      ],
      correctAnswer: '9'
    },
    {
      question: 'What is considered Norway’s national dish?'
      answers:  [
        'Fiskesuppe (fish soup)',
        'Tacoer (tacos)',
        'Fårikål (cabbage and lamb stew)',
        'Kjøttkaker og potetmos (meatballs and mashed potatoes)'
      ],
      correctAnswer: 'Fårikål (cabbage and lamb stew)'
    },
    {
      question: 'Who is the crown prince of Norway?'
      answers:  [
        'Prince Frederik and Princess Mary',
        'Prince Haakon and Princess Mette Marit',
        'Prince George and Princess Charlotte',
        'Prince Carl and Princess Sofia'
      ],
      correctAnswer: 'Prince Haakon and Princess Mette Marit'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)