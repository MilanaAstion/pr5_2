
document.addEventListener('DOMContentLoaded', function () {
    const btnOpenModal = document.querySelector("#btnOpenModal");
    const modalBlock = document.querySelector("#modalBlock");
    const closeModal = document.querySelector("#closeModal");
    const questionTitle = document.querySelector("#question");
    const formAnswers = document.querySelector("#formAnswers");
    const nextButton = document.querySelector("#next");
    const prevButton = document.querySelector("#prev");

    const burgerName = "Стандарт";
    const burgerImageSrc = "./image/burger.png";

    const questions = [
        {
            question: "Какого цвета бургер?",
            answers: [
                {
                    title: 'Стандарт',
                    url: './image/burger.png'
                },
                {
                    title: 'Черный',
                    url: './image/burgerBlack.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Из какого мяса котлета?",
            answers: [
                {
                    title: 'Курица',
                    url: './image/chickenMeat.png'
                },
                {
                    title: 'Говядина',
                    url: './image/beefMeat.png'
                },
                {
                    title: 'Свинина',
                    url: './image/porkMeat.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Дополнительные ингредиенты?",
            answers: [
                {
                    title: 'Помидор',
                    url: './image/tomato.png'
                },
                {
                    title: 'Огурец',
                    url: './image/cucumber.png'
                },
                {
                    title: 'Салат',
                    url: './image/salad.png'
                },
                {
                    title: 'Лук',
                    url: './image/onion.png'
                }
            ],
            type: 'checkbox'
        },
        {
            question: "Добавить соус?",
            answers: [
                {
                    title: 'Чесночный',
                    url: './image/sauce1.png'
                },
                {
                    title: 'Томатный',
                    url: './image/sauce2.png'
                },
                {
                    title: 'Горчичный',
                    url: './image/sauce3.png'
                }
            ],
            type: 'radio'
        }
    ];

    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block');
        playTest();
    });

    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block');
    });

    const playTest = () => {
        let numberQuestion = 0;

        const renderAnswers = (index) => {
            questions[index].answers.forEach((answer, index, arr) => {
                const answerItem = document.createElement('div');

                answerItem.classList.add('answers-item', 'd-flex', 'flex-column');

                answerItem.innerHTML = `
                    <input type="${questions[index].type}" id="answerItem${index}" name="answer" class="d-none">
                    <label for="answerItem${index}" class="d-flex flex-column justify-content-between">
                        <img class="answerImg" src="${answer.url}" alt="burger">
                        <span>${answer.title}</span>
                    </label>
                `;
                formAnswers.appendChild(answerItem);
            });
        };

        const renderQuestions = (indexQuestion) => {
            formAnswers.innerHTML = ``;
            questionTitle.textContent = `${questions[indexQuestion].question}`;
            renderAnswers(indexQuestion);
        };

        const updateButtonsVisibility = () => {
            if (numberQuestion === 0) {
                prevButton.style.display = 'none';
            } else {
                prevButton.style.display = 'block';
            }

            if (numberQuestion === questions.length - 1) {
                nextButton.style.display = 'none';
            } else {
                nextButton.style.display = 'block';
            }
        };

        updateButtonsVisibility(); 
        renderQuestions(numberQuestion); 

        nextButton.onclick = () => {
            numberQuestion++;
            renderQuestions(numberQuestion);
            updateButtonsVisibility();
        };

        prevButton.onclick = () => {
            numberQuestion--;
            renderQuestions(numberQuestion);
            updateButtonsVisibility();
        };
    };
});
