var answer1, answer2, answer3, answer4;
var total = 0;
var question1 = prompt('Have I ever broken a bone?').toLowerCase();
  if (question1 === 'yes' || question1 === 'y') {
    answer1 = 'correctly. I have broken one bone.';
    total++;
    console.log('The user answered: ' + answer1);
    } else {
    answer1 = 'wrong. I broke my coccyx jumping off a 30ft cliff into Whistle Lake in Anacortes.';
    console.log('The user answered: ' + answer1);
    }

var question2 = prompt('Have I ever been to Disneyland?').toLowerCase();
  if (question2 === 'no' || question2 ==='n') {
    answer2 = 'correctly. I have never been to Disneyland.';
    total++;
    console.log('The user answered: ' + answer2);
    } else {
    answer2 = 'wrong. I never went to Disneyland, but I am not a fan of children or slow walkers, so I am quite alright with that.';
    console.log('The user answered: ' + answer2);
    }

var question3 = prompt('Have I ever lived in North Dakota?').toLowerCase();
    if (question3 === 'yes' || question3 === 'y') {
      answer3 = 'correctly. I lived in North Dakota for 6 months.';
      total++;
      console.log('The user answered: ' + answer3);
      } else {
      answer3 = 'wrong. I actually DID live in ND, but I only lasted 6 months before the excruciatingly boring geology sent me fleeing back to the PNW.';
       console.log('The user answered: ' + answer3);
      }

var question4 = parseInt(prompt('How many years do you think I have lived in King county?'));
  if (question4 === 10) {
    answer4 = 'correctly. I have lived here since the day after I graduated high school.';
    total++;
    console.log('The user answered: ' + answer4);
    } else if (question4 <= 9) {
      answer4 = 'wrong. You\'re a little low.';
      console.log('The user answered: ' + answer4);
      } else if (question4 >= 11) {
          answer4 = 'wrong. You\'re a bit over.';
          console.log('The user answered: ' + answer4);
        }
  console.log(total);

var user = prompt('What is your name?');
  alert('Welcome to my page ' + user + '. ' + 'You answered ' +  total + ' questions right!');
  console.log('The player is named: ' + user);

  alert('You answered question 1 ' + answer1);
  alert('You answered question 2 ' + answer2);
  alert('You answered question 3 ' + answer3);
  alert('You answered question 4 ' + answer4);
