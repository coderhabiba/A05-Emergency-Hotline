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

const parentCards = document.getElementsByClassName('card');

for (let parent of parentCards) {
  // create parent container
  const parentDiv = document.createElement('div');
  parentDiv.classList.add('flex', 'items-center');

  // create img
  const img = document.createElement('img');
  img.classList.add('w-6');
  img.src = './assets/heart-outline.png';
  parentDiv.appendChild(img);
  parent.appendChild(parentDiv);
}

