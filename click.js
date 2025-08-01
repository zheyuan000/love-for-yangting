
document.addEventListener('click', function(e) {
  const heart = document.createElement("div");
  heart.innerText = "💖";
  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = 1000;
  heart.style.transition = "transform 1s ease-out, opacity 1s";
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.style.transform = "translateY(-100px)";
    heart.style.opacity = 0;
  }, 0);
  setTimeout(() => {
    heart.remove();
  }, 1000);
});
