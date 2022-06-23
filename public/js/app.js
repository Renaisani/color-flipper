const colors = ["#92A8D1", "#F7CAC9", "#88B04B", "#6B5B95", "#FF6F61", "#34568B", "#D65076", "#45B8AC", "#EFC050", "#5B5EA6"]

const btn = document.getElementById("btn");
const headText = document.getElementById("head-text");

function getRandomNum() {

    return Math.floor(Math.random()*colors.length);
}

btn.addEventListener("click", function() {
    const randomNum = getRandomNum();
    // document.body.style.backgroundColor = colors[randomNum];
    document.body.style.backgroundColor = colors[randomNum];
    headText.style.color = colors[randomNum];

})