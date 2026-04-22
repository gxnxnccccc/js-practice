let name 
do {
    name = prompt("What's your name?")
} while (name === "" || name === "null")

let score
do {
    score = Number(prompt("What's your score?"))
} while (score === "" || score === "null" || isNaN(score))

document.getElementById("name").innerHTML = name
document.getElementById("score").innerHTML = score

if (score >= 90) {
    document.getElementById("grade").innerHTML = "A"
    document.getElementById("nice").innerText = "Congratulations!"
}
else if (score >= 85) {
    document.getElementById("grade").innerHTML = "B+"
}
else if (score >= 80) {
    document.getElementById("grade").innerHTML = "B"
}
else if (score >= 75) {
    document.getElementById("grade").innerHTML = "C+"
}
else if (score >= 70) {
    document.getElementById("grade").innerHTML = "C"
}
else if (score >= 65) {
    document.getElementById("grade").innerHTML = "D+"
}
else if (score >= 60) {
    document.getElementById("grade").innerHTML = "D"
}
else {
    document.getElementById("grade").innerHTML = "F"
}