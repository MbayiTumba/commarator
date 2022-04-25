let text1 = document.querySelector(".text-1"),
  text2 = document.querySelector(".text-2"),
  btn = document.querySelector("button"),
  sectionTxt = document.querySelector(".text");

sectionTxt.innerHTML = sectionTxt.textContent.replace(/\S/g, "<a>$&</a>");

btn.addEventListener("click", function (e) {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;
  let ripples = document.createElement("span");

  ripples.style.left = `${x}px`;
  ripples.style.top = `${y}px`;
  this.appendChild(ripples);

  // setTimeout(() => {
  //   ripples.remove();
  // }, 1000);

  if (text1.value.indexOf("\n") || text1.value.indexOf(" ")) {
    let newline = text1.value.split(/[\n, " "]/);
    let trim = newline.filter((e) => {
      return String(e).trim();
    });
    let seperator = trim.join(",");
    text2.textContent = seperator;
    text2.select();
    navigator.clipboard.writeText(text2.value);
  }
});
