function showMore(questionBox){
    // const clickQestion = questionBox.querySelector(".question");
    const showAnswer = questionBox.querySelector(".answer");
    const changeIcon = questionBox.querySelector(".icon");

    if(showAnswer.classList.contains("open")){
        showAnswer.classList.remove("open");
        changeIcon.src="assets/images/icon-plus.svg";
    }else{
        showAnswer.classList.add("open");
        changeIcon.src="assets/images/icon-minus.svg";
    }
}