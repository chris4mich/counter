// set intial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
      btn.addEventListener("click", function(e) {
          const styles = e.currentTarget.classList;
          if (styles.contains("decrease")) {
            count--;
          } else if (styles.contains("increase")) {
            count++;
          } else {
            count = 0;
          }
          if (count > 0) {
            value.style.color = "green";
          }
          if (count < 0) {
            value.style.color = "red";
          }
          if (count === 0) {
            value.style.color = "#222";
          }
              value.textContent = count;
      });
});

document.addEventListener("keydown", function (event){
  if (event.key === "-") {
    count--;
  } if (event.key === "+") {
    count = 2 * 1.5 + count++;

  } if (event.key === "0") {
    count = 0;
  }
  if (count > 0) {
    value.style.color = "green";
  }
  if (count < 0) {
    value.style.color = "red";
  }
  if (count === 0) {
    value.style.color = "#222";
  }
      value.textContent = count;
});
