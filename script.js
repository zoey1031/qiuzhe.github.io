let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "我想看男大", 
	"我想看卤蛋",
    "可以叫麻麻吗",
	"不叫不看",
    "不许选这个！",
	"不许选这个！"
];
const questions = [
    "来看我直播吧", 
	"这不简简单单",
    "这对吗", 
    "叫不了",
	"麻麻~",
	"来看我直播吧(╯︵╰)"
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 0.8);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 17; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 6) {
        noButton.innerText = noTexts[clickCount - 1];
		questionText.innerText=questions[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "lai.gif"; // 震惊
    if (clickCount === 2) mainImage.src = "男大.gif";   // 生气
    if (clickCount === 3) mainImage.src = "卤蛋.gif";   // 男大
    if (clickCount === 4) mainImage.src = "我不叫.gif";  // 卤蛋
    if (clickCount === 5) mainImage.src = "哭哭.gif";  // 之后一直是哭
	if (clickCount > 5) mainImage.src = "伤心.gif"; 
});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">嘿嘿 ( >᎑<)♡︎ᐝ</h1>
            <img src="嘿嘿.gif" alt="嘿嘿" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});