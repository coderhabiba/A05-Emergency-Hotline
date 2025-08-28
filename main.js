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
// mobile menu
document.getElementById('menu-icon').addEventListener('click', function () {
  const mobileMenu = document.getElementById('mobile-menu-area');
  mobileMenu.classList.toggle('hidden');
  if (!mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('flex', 'flex-col', 'gap-2');
  }
});


// heart btns click count
let favouritCount = document.getElementById('nav-heart-count');
let mobileHeartCount = document.getElementById('mobile-heart-count');
let count = parseInt(favouritCount.innerText);

const heartBtns = document.querySelectorAll('.heart');

for (let btn of heartBtns) {
  btn.addEventListener('click', function () {
    count++;
    favouritCount.innerText = count;
    mobileHeartCount.innerText = count;
  });
}


// call btns click function
let coinDiv = document.getElementById('nav-coin-count');
let mobileCoinDiv = document.getElementById('mobile-coin-count');
let coins = parseInt(coinDiv.innerText);

const d = new Date();
const time = d.toLocaleTimeString();

const historyList = document.getElementById('history-list');

const callBtns = document.querySelectorAll('.call-btn');

for (let btn of callBtns){
  btn.addEventListener('click', function(e) {
    alert(
      `📞 Calling ${
        e.target.parentNode.parentNode.querySelector('h6').innerText
      } ${e.target.parentNode.parentNode.querySelector('p').innerText}...`
    );
    if (coins <= 0) {
      alert('❌আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
      return;
    }
    coins -= 20;
    coinDiv.innerText = coins;
    mobileCoinDiv.innerText = coins;
    
    historyList.innerHTML += `
    <div class="flex flex-col">
      <div class="flex items-center justify-between bg-[#fafafa] rounded-lg p-4 mb-2">
        <div class="flex flex-col gap-1">
          <p class="font-hind text-lg text-[#111111] font-extrabold">${
            e.target.parentNode.parentNode.querySelector('h3').innerText
          }</p>
          <p class="text-lg text-[#5c5c5c] font-hind">${
            e.target.parentNode.parentNode.querySelector('p').innerText
          }</p>
        </div>
        <div class="text-[#111111] font-hind text-lg">${time}</div>
      </div>
    </div>
`;
  })
}


// copy btn functionality
const copyBtns = document.querySelectorAll('.copy-btn');
const copyCount = document.getElementById('nav-copy-count');
const mobileCopyCount = document.getElementById('mobile-copy-count');
let parseCopyCount = parseInt(copyCount.innerText);

for (let btn of copyBtns) {
  btn.addEventListener('click', function () {
    parseCopyCount++;
    copyCount.innerText = parseCopyCount;
    mobileCopyCount.innerText = parseCopyCount;

    const card = btn.parentNode.parentNode;
    const textCopy = card.querySelector('.help-line-number').innerText;
    navigator.clipboard.writeText(textCopy);
    alert(`নাম্বার কপি হয়েছে : ${textCopy}`);
  })
}


// clear btn functionality 
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', function () {
  historyList.innerHTML = '';
});



