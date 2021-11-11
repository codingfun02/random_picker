const pickerForm = document.querySelector(".js-pickerForm"),
    pickBtn = pickerForm.querySelector("button"),
    startNumberInput = document.querySelector(".js-startNumberInput"),
    endNumberInput = document.querySelector(".js-endNumberInput"),
    pickedNumber = document.querySelector(".js-pickedNumber"),
    remainingNumbers = document.querySelector(".js-remainingNumbers");

let startNumber, endNumber, randomNumbers = [];

const handlePickAgainFormSubmit = (event) => {
    event.preventDefault();
    if(randomNumbers.length === 0) {
        pickedNumber.innerText = "?";
        setTimeout(() => {
            alert("뽑을 숫자가 없습니다");
        }, 0);
        return;
    }
    const randomIndex = Math.floor(Math.random()* randomNumbers.length);
    const randomNumber = randomNumbers[randomIndex];
    pickedNumber.innerHTML = randomNumber;
    randomNumbers.splice(randomIndex, 1);
    remainingNumbers.innerText = `남은 숫자: ${randomNumbers.join(", ")}`;
};

const handlePickerFormSubmit = (event) => {
    event.preventDefault();
    const startNumberInputValue = startNumberInput.value,
        endNumberInputValue = endNumberInput.value;
    if (startNumberInputValue === "" || endNumberInputValue === "") {
        return alert("숫자가 입력되지 않았습니다");
    } else if (parseInt(startNumberInputValue) > parseInt(endNumberInputValue)) {
        return alert("시작 숫자가 끝 숫자보다 더 큽니다");
    }
    startNumber = parseInt(startNumberInputValue);
    endNumber = parseInt(endNumberInputValue);
    for (let i = startNumber; i <= endNumber; i++) {
        randomNumbers.push(i);
    }
    const randomIndex = Math.floor(Math.random() * randomNumbers.length);
    const randomNumber = randomNumbers[randomIndex];
    pickedNumber.innerText = randomNumber;
    randomNumbers.splice(randomIndex, 1);
    remainingNumbers.innerText = `남은 숫자: ${randomNumbers.join(", ")}`;
    pickBtn.innerText = "다시 뽑기";
    pickerForm.removeEventListener("submit",handlePickerFormSubmit);
    pickerForm.addEventListener("submit", handlePickAgainFormSubmit);
}

pickerForm.addEventListener("submit", handlePickerFormSubmit);