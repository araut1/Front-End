console.clear();

const mary = document.querySelector(".name span");
const num = document.querySelector("input[type=range]");

num.addEventListener("input", (e) => {
  let count = parseInt(e.target.value);
  let arr = Array(count).fill("o").join("");
  mary.innerHTML = arr;
  console.log(`%cOoo Run!`, 'background:#333;color:hotpink;padding:12px;font-size:13px;border-radius:5px;');
});