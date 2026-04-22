let age = prompt("Tell me your age")
if (age == 20) {
    // console.log("you are allowed to enter the website.")
    document.getElementById("content").innerHTML = age
    document.getElementById("permission").innerText = "you are allowed to enter the website."
    document.getElementById("vdo").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/U6BDbXIah-Y?si=0np-6I1kZjnkC5cd\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    document.getElementById("twenties").innerText = "Congratulations for your TWENTIES!!!"
}
else if (age > 13) {
    // console.log("you are allowed to enter the website.")
    document.getElementById("content").innerHTML = age
    document.getElementById("permission").innerText = "you are allowed to enter the website."
    document.getElementById("vdo").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/U6BDbXIah-Y?si=0np-6I1kZjnkC5cd\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    
}
else {
    // console.log("You are not allowed to enter the website.")
    document.getElementById("content").innerHTML = age
    document.getElementById("permission").innerText= "you are not allowed to enter the website."
    document.getElementById("vdo").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/SbdOIdg2McI?si=KyAyVfi6YRAEUMMa\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
}