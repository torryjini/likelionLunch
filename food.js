food = [
    {
        name : "에머이 삼성점",
        category : "아시안",
        menu : "베트남쌀국수",
        rating : "4",
        map : "http://naver.me/F2vY2XVJ"
    },
    {
        name : "아부리",
        category : "일식",
        menu : "라멘, 오차즈케",
        rating : "4",
        map : "http://naver.me/FBws2N5j"
    },
    {
        name : "카토멘",
        category : "일식",
        menu : "토마토라멘, 교자",
        rating : "3",
        map : "http://naver.me/GbEoniQA"
    },
    {
        name : "농민백암순대",
        category : "한식",
        menu : "순대국밥",
        rating : "5",
        map : "http://naver.me/xGOiXFfS"
    },
    {
        name : "블루라팽",
        category : "양식",
        menu : "비프부르기뇽, 파스타",
        rating : "4",
        map : "http://naver.me/FNmlldcO"
    },
    {
        name : "시추안하우스",
        category : "중식",
        menu : "중식요리",
        rating : "4",
        map : "http://naver.me/G8UttgfL"
    },
    {
        name : "지구당",
        category : "일식",
        menu : "규동, 텐동",
        rating : "4",
        map : "http://naver.me/5PS21QUi"
    },
    {
        name : "네모오징어 포스",
        category : "한식",
        menu : "오삼불고기",
        rating : "3",
        map : "http://naver.me/xL1Epm2K"
    },
    {
        name : "뽕나무쟁이 선릉",
        category : "한식",
        menu : "족발",
        rating : "4",
        map : "http://naver.me/F4NteBAT"
    },
    {
        name : "아리스타 선릉점",
        category : "카페",
        menu : "샌드위치, 생과일주스",
        rating : "4",
        map : "http://naver.me/xw6WK9eu"
    },
    {
        name : "고래떡볶이",
        category : "분식",
        menu : "즉석떡볶이",
        rating : "4",
        map : "http://naver.me/x4bucizX"
    },
    {
        name : "마담밍",
        category : "중식",
        menu : "짜장면, 짬뽕, 냉짬뽕",
        rating : "3",
        map : "http://naver.me/x01egbr1"
    },
    {
        name : "피양콩할마니",
        category : "한식",
        menu : "콩비지, 들깨수제비",
        rating : "3",
        map : "http://naver.me/G6DyD9tg"
    },
    {
        name : "커리146",
        category : "아시안",
        menu : "마크니커리, 마샬라커리",
        rating : "5",
        map : "http://naver.me/FOvhiXfJ"
    },
    {
        name : "바스버거",
        category : "양식",
        menu : "수제버거",
        rating : "5",
        map : "http://naver.me/x50lKFGv"
    },
    {
        name : "떡판왕",
        category : "분식",
        menu : "차돌즉석떡볶이",
        rating : "4",
        map : "http://naver.me/FZJ37ahU"
    },
    {
        name : "SNOWFOX",
        category : "아시안",
        menu : "스시도시락, 롤, 샐러드",
        rating : "4",
        map : "http://naver.me/FBwDQjCk"
    },
    {
        name : "하동관",
        category : "한식",
        menu : "곰탕",
        rating : "5",
        map : "http://naver.me/xXQ5N5f7"
    },
    {
        name : "리칭",
        category : "중식",
        menu : "짜장면, 짬뽕 등",
        rating : "4",
        map : "http://naver.me/5vIc8BY9"
    },
    {
        name : "평가옥",
        category : "한식",
        menu : "평양냉면",
        rating : "4",
        map : "http://naver.me/Fk5dj2WI"
    },
    {
        name : "김밥천국",
        category : "분식",
        menu : "김밥, 라면 등",
        rating : "4",
        map : "http://naver.me/5MUeBqqm"
    },
    {
        name : "육칼",
        category : "한식",
        menu : "육개장칼국수",
        rating : "4",
        map : "http://naver.me/5ncPKUAC"
    },
    {
        name : "소곱창과 순대국",
        category : "한식",
        menu : "돼지불백, 제육볶음 등",
        rating : "4",
        map : "http://naver.me/GVAN4tce"
    }
]

const restaurant = document.querySelector("#restaurant");
const btnResult = document.querySelector("#btn");
const btnMap = document.querySelector("#maphref")

function menuRecommend() {
    const restaurantName = food[Math.floor(Math.random() * food.length)];
    restaurant.innerHTML = `<h1>${restaurantName.name}</h1>
    <h3><i>${restaurantName.category}</i></h3>
    <h2>${restaurantName.menu}</h2>
    <h2>★ ${restaurantName.rating}</h2>`;
    btnMap.target = "_blank"
    btnMap.href = restaurantName.map;
}

btnResult.addEventListener("click", menuRecommend);