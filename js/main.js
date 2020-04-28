let el = document.getElementById("title-text");
el.addEventListener("mouseover", function() {
    el.style.color = 'blue';
});
el.addEventListener("mouseleave", function() {
    el.style.color = 'orange';
})