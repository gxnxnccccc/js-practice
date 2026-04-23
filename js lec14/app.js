let first_guess_number = prompt("What's your guess(0-99)?")
let random_number = Math.floor(Math.random() * 100)

if (first_guess_number == random_number) {
    console.log(first_guess_number)
    console.log(random_number)
    console.log("Lucky")

    document.getElementById("1stguess").innerHTML = first_guess_number
    // document.getElementById("random").innerHTML = random_number
    document.getElementById("1stword").innerText = "You are lucky!"
}

else if (first_guess_number < random_number) {
    console.log(first_guess_number)
    console.log(random_number)
    console.log("Too low")

    document.getElementById("1stguess").innerHTML = first_guess_number
    // document.getElementById("random").innerHTML = random_number
    document.getElementById("1stword").innerText = "Too low. Try again."
}

else if (first_guess_number > random_number) {
    console.log(first_guess_number)
    console.log(random_number)
    console.log("Too high")

    document.getElementById("1stguess").innerHTML = first_guess_number
    // document.getElementById("random").innerHTML = random_number
    document.getElementById("1stword").innerText = "Too high. Try again."
}

// else {
//     console.log(guess_number)
//     console.log(random_number)
//     console.log("Unlucky")

//     document.getElementById("guess").innerHTML = guess_number
//     document.getElementById("random").innerHTML = random_number
//     document.getElementById("word").innerText = "You are unlucky."
// }

function second_guess() {

    let second_guess_number = prompt("What's your second guess(0-99)?")

    if (second_guess_number == random_number) {
        console.log(second_guess_number)
        console.log(random_number)
        // console.log("You win!")

        document.getElementById("2ndguess").innerHTML = second_guess_number
        // document.getElementById("random").innerHTML = random_number
        document.getElementById("2ndword").innerText = "You are lucky!"
    }

    else if (second_guess_number < random_number) {
        console.log(second_guess_number)
        console.log(random_number)
        // console.log("Too low")

        document.getElementById("2ndguess").innerHTML = second_guess_number
        // document.getElementById("random").innerHTML = random_number
        document.getElementById("2ndword").innerText = "Too low. Try again."
    }

    else if (second_guess_number > random_number) {
        console.log(second_guess_number)
        console.log(random_number)
        // console.log("Too high")

        document.getElementById("2ndguess").innerHTML = second_guess_number
        // document.getElementById("random").innerHTML = random_number
        document.getElementById("2ndword").innerText = "Too high. Try again."
    }
}

function third_guess() {

    let third_guess_number = prompt("What's your last guess(0-99)?")

    if (third_guess_number == random_number) {
        console.log(third_guess_number)
        console.log(random_number)
        // console.log("You win!")
        
        document.getElementById("3rdguess").innerHTML = third_guess_number
        document.getElementById("random").innerHTML = random_number
        document.getElementById("word").innerText = "You win!"
    }

    else if (third_guess_number < random_number) {
        console.log(third_guess_number)
        console.log(random_number)
        // console.log("Too low")

        document.getElementById("3rdguess").innerHTML = third_guess_number
        document.getElementById("random").innerHTML = random_number
        document.getElementById("3rdword").innerText = "You lose."
    }

    else if (third_guess_number > random_number) {
        console.log(third_guess_number)
        console.log(random_number)
        // console.log("Too high")

        document.getElementById("3rdguess").innerHTML = third_guess_number
        document.getElementById("random").innerHTML = random_number
        document.getElementById("3rdword").innerText = "You lose."
    }
}