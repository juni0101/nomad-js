const quotes = [
    {
        quote: "열정없이 사느니 차라리 죽는게 낫다.",
        author: "Kurt Cobain",
    },
    {
        quote: "차분함이 몸에 밴 사람이 하루아침에 열정에 빠지면 그 감정의 폭발은 가장 폭력적인 사람이 갑자기 폭발할 때보다도 더 인상깊다.",
        author: "Margery Allingham",
    },
    {
        quote: "도전을 받아들여라. 그러면 승리의 쾌감을 맛볼 지도 모른다.",
        author: "George S. Patton",
    },
    {
        quote: "아무런 위험없이 승리하는 것은 영광없는 승리에 다름 아니다. ",
        author: "Pierre Corneille",
    },
    {
        quote: "만약 당신이 한번도 두렵거나 굴욕적이거나 상처입은 적이 없다면, 그렇다면 당신은 아무런 위험도 감수하지 않은 것이다.",
        author: "Julia Sorel",
    },
    {
        quote: "난 위험에 대해 그리 많이 생각지 않는다. 난 그저 내가 하고 싶은 것을 할 뿐이다. 앞으로 나아가야한다면, 나아가면 된다.",
        author: "Lillian Carter",
    },
    {
        quote: "장애물을 만났다고 반드시 멈춰야 하는 것은 아니다. 벽에 부딪힌다면 돌아서서 포기하지 말라. 어떻게 벽에 오를지, 벽을 뚫고 나갈 수 있을지, 또는 돌아갈 방법은 없는지 생각하라.",
        author: "Michael Jordan",
    },
    {
        quote: "모든 사람은 경탄할만한 잠재력을 가지고 있다. 자신의 힘과 젊음을 믿어라. 모든 것이 내가 하기 나름이다라고 끊임없이 자신에게 말하는 법을 배우라.",
        author: "Andre Gide",
    },
    {
        quote: "자신을 믿어라. 자신의 능력을 신뢰하라. 겸손하지만 합리적인 자신감없이는 성공할 수도 행복할 수도 없다.",
        author: "Norman Vincent Peale",
    },
    {
        quote: "당신의 노력을 존중하라. 당신 자신을 존중하라. 자존감은 자제력을 낳는다. 이 둘을 모두 겸비하면, 진정한 힘을 갖게 된다.",
        author: "Clint Eastwood",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

