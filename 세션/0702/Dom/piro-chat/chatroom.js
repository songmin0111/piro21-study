const chatInput = document.getElementById('chat-input');
const hashtagBtn = document.getElementById('hashtag');
const sendBtn = document.getElementById('btn-send');

chatInput.focus();

chatInput.addEventListener('input', (event) => {
    if(event.target.value !== '') {
        hashtagBtn.style.display = 'none';
        sendBtn.style.display = 'block';
    } else {
        hashtagBtn.style.display = 'block';
        sendBtn.style.display = 'none';
    }
});

chatInput.addEventListener('keypress', (event) => {
    if(event.code === 'Enter') {
        sendBtn.click();
    }
})

let flag = true;
const chatBubbleContainer = document.getElementById('chat-bubble');

sendBtn.addEventListener('click', () => {

    if(chatInput.value === '') return;

    const contentDiv = document.createElement('div'); /* div태그를 html안에 넣음 */

    if(flag) {
    // 나
    contentDiv.className = 'my-bubble-content';

    const bubble = document.createElement('div');
    bubble.className = 'my-bubble';

    bubble.innerText = chatInput.value;
    contentDiv.appendChild(bubble); /* 안에 택스트 넣음 */

    flag = false;

} else {
    // 교육팀장님
    contentDiv.className = 'your-bubble';
    const profileDiv = document.createElement('div');
    profileDiv.className = 'profile';

    const profileImg = document.createElement('img');
    profileImg.src = './profile.png';

    profileDiv.appendChild(profileImg);
    contentDiv.appendChild(profileDiv);

    const bubbleContent = document.createElement('div');
    bubbleContent.className = 'bubble-content';

    const name = document.createElement('div');
    name.className = 'name';
    name.innerText = '교육팀장님';

    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.innerText = chatInput.value;

    bubbleContent.appendChild(name);
    bubbleContent.appendChild(bubble);

    contentDiv.appendChild(bubbleContent);

    flag = true;
 }
 // 실제로 화면에 출력
chatBubbleContainer.appendChild(contentDiv);

// 스크롤 제어
chatBubbleContainer.scrollTop = chatBubbleContainer.scrollHeight; /* 스크롤이 가장 아래로 내려감 */

hashtagBtn.style.display = 'block';
sendBtn.style.display = 'none';

chatInput.value = ''; /* 보내고 빈칸 채우기 */
})

