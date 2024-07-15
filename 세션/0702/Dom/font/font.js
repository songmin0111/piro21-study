const slider = document.getElementById('slider');
const text = document.querySelector('.text'); /* element가져오기. class불러오기니까 .텍스트 */
const texts = text.children; /* 자식 요소 가져오기 */

slider.addEventListener('input', (event) => {
    console.log(event);
    for(let text of texts) {
        text.style.fontWeight = event.target.value * 10;
    }
})