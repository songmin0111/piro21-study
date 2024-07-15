const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const countText = document.getElementById('cnt');

minusBtn.addEventListener('click', () => {
 countText.innerText = Number(countText.innerText) -1;
}) 
/* click이 나오면 화살표 실행시겨라 */
plusBtn.addEventListener('click', () => {
    countText.innerText = Number(countText.innerText) +1;
})