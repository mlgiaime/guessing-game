//undeclared variables because the values will not be determined until the user inputs their answers

var answer1, answer2, answer3, answer4;

//starting out with zero questions correct because the values are not yet determined

var total = 0;

var ans1 = document.getElementById('answer1');
var ans2 = document.getElementById('answer2');
var ans3 = document.getElementById('answer3');
var ans4 = document.getElementById('answer4');
var ans5 = document.getElementById('answer5');
var ans6 = document.getElementById('answer6');

//question1, question2, question3, question 5 are all y/n --
//make sure all potential correct answers are accepted using ||

function firstQuestion() {
var question1 = prompt('Have I ever broken a bone?').toLowerCase();
  if (question1 === 'yes' || question1 === 'y') {
    ans1.innerHTML = 'correctly. I have broken one bone.';
    total++;
    } else {
    ans1.innerHTML = 'wrong. I broke my coccyx jumping off a 30ft cliff into Whistle Lake in Anacortes.';
    }
} 

firstQuestion();

//along with the '||' operator, the user inputs are all converted to lower case
//to make sure that 'no' and 'NO' are both processed as the same response

function secondQuestion() {
var question2 = prompt('Have I ever been to Disneyland?').toLowerCase();
  if (question2 === 'no' || question2 ==='n') {
    ans2.innerHTML = 'correctly. I have never been to Disneyland.';
    total++;
    } else {
    ans2.innerHTML = 'wrong. I never went to Disneyland, but I am not a fan of children or slow walkers, so I am quite alright with that.';
    }
}

secondQuestion();

function thirdQuestion() {
var question3 = prompt('Have I ever lived in North Dakota?').toLowerCase();
    if (question3 === 'yes' || question3 === 'y') {
      ans3.innerHTML = 'correctly. I lived in North Dakota for 6 months.';
      total++;
    } else {
      ans3.innerHTML = 'wrong. I actually DID live in ND, but I only lasted 6 months.';
      }
}

thirdQuestion();

//question4 numerical answer with a do...while loop let's the user know
//if they need to guess higher or lower and the loop discontinues after 3 guesses.

var triesRemaining = 3;

function fourthQuestion() {
  var question4 = parseInt(prompt('How many years do you think I have lived in King county?'));
  if (question4 === 10) {
    answer4 = 'correctly. I have lived here since the day after I graduated high school.';
    total++;
  } else if (question4 <= 9) {
    answer4 = 'Wrong. Longer than that... guess again!';
  } else if (question4 >= 11) {
    answer4 = 'Wrong. Sadly, I have not been here quite that long. Guess again!';
  }

      if (question4 !== 10){
        triesRemaining--;
        alert(answer4);
  }
}

do {
  fourthQuestion();
} while (triesRemaining > 0)

if (triesRemaining <= 0){
    alert('Sorry, you\'re out of guesses.');
  }


//question 5 -- yes or no, if else statement with an 'or' operator to account
//for different ways the user might answer correctly

function fifthQuestion() {
var question5 = prompt('Did I meet my husband online?').toLowerCase();
  if (question5 === 'yes' || question5 === 'y') {
    ans5.innerHTML = 'correctly. Like many couples these days, we DID meet online.';
    total++;
  } else {
    ans5.innerHTML = 'wrong. We were both too busy all the time to try and meet people. Yay internet!';
  }
}

fifthQuestion();

//question 6 -- numeric, no wiggle room... they already had a
//question with multiple guesses allowed.

function sixthQuestion() {
var question6 = parseInt(prompt('How many volcanoes are there in Washington State?'));
  if (question6 === 5) {
    ans6.innerHTML = 'correctly. The last of our local volcanoes that erupted was Mount St. Helens in October of 2004.';
    total++;
  } else {
    ans6.innerHTML = 'wrong. We have 5! Mount Rainier, Mt. St Helens, Mount Adams, Mount Baker, and Glacier Peak.';
  }
}

sixthQuestion();


var user = prompt('What is your name?');
  alert('Welcome to my page ' + user + '. ' + 'You answered ' +  total + ' questions right!');
  console.log('The player is named: ' + user);

//these alerts appear after the questions are asked and the user is welcomed to the page
//the correct answers for each question are in these alerts
  alert('You answered question 1 ' + answer1);
  alert('You answered question 2 ' + answer2);
  alert('You answered question 3 ' + answer3);
  alert('You answered question 4 ' + answer4);
  alert('You answered question 5 ' + answer5);
  alert('You answered question 6 ' + answer6);
