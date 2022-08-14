//PART 1

// Create an array called twitter_users with 1 user

let twitter_users = ["@vinay"];

// Add 3 usernames to the array using .push() (hint: make sure the usernames are strings)

twitter_users.push("@jason");
twitter_users.push("@arjun");
twitter_users.push("@sam");

//Create an arrow function called print_array that loops through every username in the array and prints out the username with a “!”At the end
//Example - print_array(["@obama", "@bill", "@vinay"]) should print @obama! @bill! and @vinay to the console
//Hint - no return statement necessary

const print_array = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + "!");
  }
};

print_array(twitter_users);

//Create an arrow function  that empties an array using pop and a while loop (hint: use the .length property of an array inside the while loop condition)

const empty_array = arr => {
  while (arr.length > 0) {
    arr.pop();
  }
};

empty_array(twitter_users);
console.log(twitter_users);
//Call this arrow function with the usernames array to empty the array

//----------------------------------------

//PART 2

//Create two tweet objects with text author and date fields
//Example {text: "First tweet", author: "Jack Dorsey", date: "September 20th"}
let tweets = [
  { text: "First Tweet", author: "Arjun", date: " September 20th" },
  { text: "second Tweet", author: "Vinay", date: " September 21th" }
];

//Create an array called tweets and add these two objects to the array

//Loop through the array and add a likes field to each tweet object with 0 likes

for (let i = 0; i < tweets.length; i++) {
  tweets[i].likes = 0;
}

console.log(tweets);

//Create an arrow function that takes in a tweet and adds 1 to the likes field of the tweet object
//Example add_like({text: "First tweet", author: "Jack Dorsey", date: "September 20th", likes: 0}) should edit the object to be {text: "First tweet", author: "Jack Dorsey", date: "September 20th", likes: 1}
//Hint - no return statement necessary

const add_like = tweet => {
  tweet.likes = tweet.likes + 1;
};

// Use a forEach to call this function on each tweet

tweets.forEach(tweet => {
  add_like(tweet);
});

console.log(tweets);
//Create an arrow function that takes in the array of tweets and returns the number of tweets there are with 0 likes
//ex zero_likes([{text: "First tweet", author: "Jack Dorsey", date: "September 20th", likes: 0}, {text: "Second tweet", author: "Jeff Bezos", date: "September 21th", likes: 1}]) should return 1

const get_zero_likes = arr => {
  let count = 0;
  arr.forEach(element => {
    if (element.likes === 0) {
      count++;
    }
  });

  return count;
};

tweets[0].likes = 0;
console.log(get_zero_likes(tweets));

const add = (a, b) => a + b;

const multiply = (a, b) => a * b;