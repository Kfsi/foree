const rainButton = document.getElementById('rainButton');
const stopButton = document.getElementById('stopButton');
const rain = document.getElementById('rain');
const image = document.getElementById('image');

function startRain() {
    stopButton.style.display = 'inline-block';
    rain.innerHTML = '';
    const numDrops = 150; // عدد قطرات المطر
    for (let i = 0; i < numDrops; i++) {
        const drop = document.createElement('div');
        drop.className = 'drop';
        drop.textContent = 'نسوان نسوان';
        
        // تخصيص مظهر القطرات
        const colorArray = ['#ffffff', '#ffcc00', '#ff66cc', '#33ccff']; // مجموعة من الألوان المختلفة
        drop.style.color = colorArray[Math.floor(Math.random() * colorArray.length)];
        drop.style.left = Math.random() * 100 + '%';
        drop.style.fontSize = Math.random() * 10 + 15 + 'px'; 
        drop.style.animationDuration = Math.random() * 1 + 0.5 + 's'; // مدة الحركة بين 0.5 و 1.5 ثانية لتسريع القطرات
        drop.style.animationDelay = Math.random() * 0.5 + 's'; // تأخير عشوائي أصغر

        rain.appendChild(drop);
    }
}

function stopRain() {
    stopButton.style.display = 'none';
    rain.innerHTML = '';
    image.style.display = 'block';
}

rainButton.addEventListener('click', startRain);
stopButton.addEventListener('click', stopRain);
