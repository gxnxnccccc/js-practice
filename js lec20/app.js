let round = Number(prompt("How many round you wanna play?"))
for (var i = 0; i < round; i++) {
    var guess = prompt("What's your guess?(Head/Toe)")
    var random_ans = ""
    
    if (Math.floor(Math.random() * 10) >= 5) {
        random_ans = "Head"
    }
    else {
        random_ans = "Toe"

    }

    if (guess === random_ans) {
        console.log("Your guess in round " + Number((i)+1) + " is right. Excellent!")
    }
    else {
        console.log("Your guess in round " + Number((i)+1) + " is not correct. Better luck next time!")
    }

    console.log("Your Guess is " + guess)
    console.log("The Answer is " + random_ans)
}