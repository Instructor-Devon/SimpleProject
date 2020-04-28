let el = document.getElementById("title-text");
el.addEventListener("mouseover", function() {
    el.style.color = 'green';
});
el.addEventListener("mouseleave", function() {
    el.style.color = 'orange';
})