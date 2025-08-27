// copy btns hover styles
for (let i = 1; i <= 9; i++) {
  const btn = document.getElementById(`copy-btn-${i}`);
  const grayIcon = document.getElementById(`gray-icon-${i}`);
  const whiteIcon = document.getElementById(`white-icon-${i}`);

  if (btn && grayIcon && whiteIcon) {
    btn.addEventListener('mouseenter', function () {
      grayIcon.style.display = 'none';
      whiteIcon.style.display = 'block';
    });

    btn.addEventListener('mouseleave', function () {
      grayIcon.style.display = 'block';
      whiteIcon.style.display = 'none';
    });
  }
}

// heart btns click count
let favouritCount = document.getElementById('nav-heart-count');
let count = parseInt(favouritCount.innerText);

const heartBtns = document.querySelectorAll('.heart');

for (let btn of heartBtns) {
  btn.addEventListener('click', function () {
    count++;
    favouritCount.innerText = count;
  });
}

// call btns click function






