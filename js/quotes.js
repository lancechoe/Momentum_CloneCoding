const quotes = [
  {
    quote:
      "자신이 어떻게 변해왔는지 알려면 변하지 않은 곳으로 돌아가는 것보다 더 좋은 방법은 없다.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "게으름은 즐겁지만 괴로운 상태다. 우리는 행복해지기 위해서 무엇인가 하고 있어야 한다.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "작은 성실함은 위험한 것이며, 과도한 성실함은 치명적이리만큼 위험하다.",
    author: "Oscar Wilde",
  },
  {
    quote: "작은 기회로부터 종종 위대한 업적이 시작된다.",
    author: "Demosthenes",
  },
  {
    quote:
      "낱말 하나가 삶의 모든 무게와 고통에서 우리를 해방시킨다. 그 말은 사랑이다.",
    author: "Sophocles",
  },
  {
    quote:
      "미래가 그대를 불안하게 하지 말라. 해야만 한다면 맞게 될 것이니, 오늘 현재로부터 그대를 지키는 이성이라는 동일한 무기가 함께 할 것이다.",
    author: "Marcus Aurelius Antoninus",
  },
  {
    quote:
      "아무 하는 일 없이 시간을 허비하지 않겠다고 맹세하라. 우리가 항상 뭔가를 한다면 놀라우리만치 많은 일을 해낼 수 있다.",
    author: "Thomas Jefferson",
  },
  {
    quote: "이른 아침은 입에 황금을 물고 있다.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "당신이 사람들을 좋아한다는 점을 분명히 한다면, 그들도 당신을 좋아하지 않고는 못 베길 것이다.",
    author: "Lois McMaster Bujold",
  },
  {
    quote: "승리는 가장 끈기있는 자에게 돌아간다.",
    author: "Napoleon Bonaparte",
  },
];

const quote = document.querySelector("div#quote p:first-child");
const author = document.querySelector("div#quote p:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
