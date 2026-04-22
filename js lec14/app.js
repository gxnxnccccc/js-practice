let guess_number = prompt("What's your guess?")
let random_number = Math.floor(Math.random() * 100)

if (guess_number == random_number) {
    console.log(guess_number)
    console.log(random_number)
    console.log("Lucky")

    document.getElementById("guess").innerHTML = guess_number
    document.getElementById("random").innerHTML = random_number
    document.getElementById("word").innerText = "You are lucky!"
}

else {
    console.log(guess_number)
    console.log(random_number)
    console.log("Unlucky")

    document.getElementById("guess").innerHTML = guess_number
    document.getElementById("random").innerHTML = random_number
    document.getElementById("word").innerText = "You are unlucky."
}