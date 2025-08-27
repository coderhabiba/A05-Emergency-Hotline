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
let coinDiv = document.getElementById('nav-coin-count');
let coins = parseInt(coinDiv.innerText);

const d = new Date();
const time = d.toLocaleTimeString();

let historyArea = document.getElementById('right-area');

const callBtns = document.querySelectorAll('.call-btn');

for (let btn of callBtns){
  btn.addEventListener('click', function(e) {
    alert(
      `📞 Calling ${
        e.target.parentNode.parentNode.querySelector('h6').innerText
      } ${e.target.parentNode.parentNode.querySelector('p').innerText}...`
    );
    coins -= 20;
    coinDiv.innerText = coins;
    
    historyArea.innerHTML += `
  
  <div>
    <div class="flex items-center justify-between">
      <div class="flex flex-col gap-1">
        <p>${e.target.closest('.card').querySelector('h6').innerText}</p>
        <p>${e.target.closest('.card').querySelector('p').innerText}</p>
      </div>
      <div>${time}</div>
    </div>
  </div>
`;
  })
}




