const quotes = [
    {
        quote: "인생에는 서두르는 것 말고도 더 많은 것이 있다.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "인생은 겸손에 대한 오랜 수업이다.",
        author: "James M.barrie",
    },
    {
        quote: "어떤 것이 당신의 계획대로 되지 않는다고 해서 그것이 불필요한 것은 아니다.",
        author: "Thomas A. Edison",
    },
    {
        quote: "성공한 사람이 아니라 가치있는 사람이 되기 위해 힘쓰라.",
        author: "Albert Einstein",
    },
    {
        quote: "미래를 결정짓고 싶다면 과거를 공부하라.",
        author: "Confucius",
    },
    {
        quote: "조금도 위험을 감수하지 않는 것이 인생에서 가장 위험한 일일 것이라 믿는다.",
        author: "Oprah Winfrey",
    },
    {
        quote: "오늘 할 수 있는 일을 내일로 미루지 마라.",
        author: "Benjamin Franklin",
    },
    {
        quote: "덜 약속하고 더 해주어라.",
        author: "Tom Peters",
    },
    {
        quote: "계획 없는 목표는 한낱 꿈에 불과하다.",
        author: "Antoine de Saint-Exupery"
    },
    {
        quote: "사랑은 자신 이외에 다른 것도 존재한다는 사실을 어렵사리 깨닫는 것이다.",
        author: "Iris Murdoch",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child")

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;