import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="phone-bg">
    <div class="time" id="timeDisplay"></div>
    <div class="grid">
      <div class="icon">💬<br/>聊天</div>
      <div class="icon">📸<br/>朋友圈</div>
      <div class="icon">🎭<br/>逸辰们</div>
      <div class="icon">📖<br/>公众号</div>
    </div>
    <div class="footer">星月小手机 · by 柒柒 & Ethan</div>
  </div>
`;

function updateTime() {
  const now = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
  document.getElementById("timeDisplay").textContent = now;
}
setInterval(updateTime, 1000);
updateTime();
