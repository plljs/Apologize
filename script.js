let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// 所有可用的图片数组
const allImages = [
    "heart.png",      // 爱心
    "shocked.png",    // 震惊
    "think.png",      // 思考
    "crying.png",     // 哭
    "hug.png",        // 拥抱
    "1.png",          // 新增图片
    "2.jpg",          // 新增图片
    "3.jpg",          // 新增图片
    "4.png",          // 新增图片
    "5.jpg",          // 新增图片
    "6.jpg"           // 新增图片
];

// 初始随机标题文字（表白类）
const initialTitles = [
    "原谅我好不好", 
    "原谅我吧", 
    "原谅我好吗", 
    "美丽可爱的姐姐", 
    "对不起姐姐"
];

// 道歉标题文字（点击No后显示）
const apologyTitles = [
    "原谅我好不好", 
    "原谅我吧", 
    "原谅我好吗", 
    "美丽可爱的姐姐", 
    "对不起姐姐"
];

// No 按钮保持固定文字"不要"

// 随机选择图片的函数
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * allImages.length);
    return allImages[randomIndex];
}

// 随机选择初始标题文字的函数
function getRandomInitialTitle() {
    const randomIndex = Math.floor(Math.random() * initialTitles.length);
    return initialTitles[randomIndex];
}

// 随机选择道歉标题文字的函数
function getRandomApologyTitle() {
    const randomIndex = Math.floor(Math.random() * apologyTitles.length);
    return apologyTitles[randomIndex];
}

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // 改变问题标题为道歉文字（前 5 次变化）
    if (clickCount <= 5) {
        questionText.innerText = apologyTitles[clickCount - 1];
    }

    // 随机选择图片（每次点击都随机）
    mainImage.src = getRandomImage();

});

// Yes 按钮点击后，进入成功页面
yesButton.addEventListener("click", function() {
    // 随机选择hug.png或6.jpg
    const successImages = ["hug.png", "6.jpg"];
    const randomSuccessImage = successImages[Math.floor(Math.random() * successImages.length)];
    
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!我爱你亲爱的姐姐!! ( >᎑<)♡︎ᐝ</h1>
            <img src="${randomSuccessImage}" alt="成功" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});

// 立即设置随机初始标题文字（替换HTML中的固定文字）
function initializeRandomTitle() {
    const questionElement = document.getElementById("question");
    if (questionElement) {
        questionElement.innerText = getRandomInitialTitle();
    }
}

// 页面加载时设置随机标题文字
window.addEventListener("DOMContentLoaded", initializeRandomTitle);

// 如果DOM已经加载完成，立即执行
if (document.readyState === 'loading') {
    // DOM还在加载中，等待DOMContentLoaded事件
} else {
    // DOM已经加载完成，立即执行
    initializeRandomTitle();
}