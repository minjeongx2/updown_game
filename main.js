let computerNumber = 0
let chance = 7
let userNumberList = []
let gameOver = false
let gameRightOver = false

let userNumber = document.getElementById('user_number')
let resultArea = document.getElementById('result_area')
let chanceArea = document.getElementById('chance_area')
let goButton = document.getElementById('go_btn')
let resetButton = document.getElementById('reset_btn')
// 변수 선언


goButton.addEventListener('click', go)
resetButton.addEventListener('click', reset)
userNumber.addEventListener('focus', function(){
    userNumber.value = ''
})
// addEventListener 적용


function pickRandomNumber(){
    computerNumber = Math.floor(Math.random() * 100 + 1) 
    console.log(computerNumber)
}
pickRandomNumber()
// 컴퓨터 랜덤 번호 반환


function go(){
    const USER_NUMBER = userNumber.value 
    userNumber.value = ''

    if(USER_NUMBER < 1 || USER_NUMBER > 100){
        resultArea.textContent = "1과100 사이의 숫자를 입력해주세요"
        return
    }

    if(USER_NUMBER < computerNumber){
        resultArea.textContent = "Up ↑"
    } else if(USER_NUMBER > computerNumber){
        resultArea.textContent = "Down ↓"
    } else {
        resultArea.textContent = "That's right!"
        gameRightOver = true
    }

    if(gameRightOver == true){
        goButton.disabled = true
        chanceArea.textContent = `남은 기회 : ${--chance}번째에 맞추었어요!`
        return
    }

    if(userNumberList.includes(USER_NUMBER)){
        resultArea.textContent = "같은 숫자를 입력했어요~"
        return
    }

    chance--
    userNumberList.push(USER_NUMBER)
    chanceArea.textContent = `남은 기회 : ${chance}번`

    if(chance == 0){
        gameOver = true
    }
    if(gameOver == true){
        goButton.disabled = true
        resultArea.textContent = "실패...!"
        return
    }
}
// Go 버튼 함수


function reset(){
    pickRandomNumber()
    resultArea.textContent = "시작해봅시다~!"
    chance = 7
    chanceArea.textContent = `남은 기회 : ${chance}번`
    userNumber.value = ""
    goButton.disabled = false
    gameOver = false
    gameRightOver = false
    userNumberList = []
}
// Reset 버튼 함수