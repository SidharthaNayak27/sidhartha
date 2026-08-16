/* =========================================================
   BIRTHDAY LOVE WEBSITE
========================================================= */


/* =========================================================
   MEMORIES
========================================================= */

const memories = [

    [
        "pic1.jpeg",
        "Your smile has a way of making ordinary moments beautiful."
    ],

    [
        "pic2.jpeg",
        "Some memories become precious simply because you are in them."
    ],

    [
        "pic3.jpeg",
        "If happiness had a face, I think it would look like you."
    ],

    [
        "pic4.jpeg",
        "I could look at this moment a thousand times and still smile."
    ],

    [
        "pic5.jpeg",
        "You quietly became one of the most beautiful parts of my life."
    ],

    [
        "pic6.jpeg",
        "Every little memory with you is worth keeping forever."
    ],

    [
        "pic7.jpeg",
        "I hope you always know how beautiful you are."
    ],

    [
        "pic8.jpg",
        "There are people we meet, and people we never want to lose."
    ],

    [
        "pic9.jpg",
        "This smile deserves to be remembered forever."
    ],

    [
        "pic10.jpg",
        "You make my world softer, brighter and more beautiful."
    ],

    [
        "pic11.jpg",
        "Some photographs capture a moment. This one captures a feeling."
    ],

    [
        "pic12.jpg",
        "I don't need perfect moments. I just need moments with you."
    ],

    [
        "pic13.jpg",
        "Your happiness will always be one of my favourite things to see."
    ],

    [
        "pic14.jpg",
        "Maybe the universe knew exactly what it was doing."
    ],

    [
        "pic15.jpg",
        "There is something about you that makes my heart feel at home."
    ],

    [
        "pic16.jpg",
        "I hope life gives you back all the happiness you give others."
    ],

    [
        "pic17.jpg",
        "If I could save moments in a bottle, I'd fill one with you."
    ],

    [
        "pic18.jpg",
        "Your presence turns simple days into beautiful memories."
    ],

    [
        "pic19.jpg",
        "I'll never get tired of seeing that beautiful smile."
    ],

    [
        "pic20.jpg",
        "You are one of those rare people who make life more beautiful."
    ],

    [
        "pic21.jpg",
        "Every chapter feels better when there is a little bit of you."
    ],

    [
        "pic22.jpg",
        "I hope this birthday reminds you how loved you are."
    ],

    [
        "pic23.jpg",
        "If I had to choose again, I'd still choose every memory with you."
    ]

];


/* =========================================================
   ELEMENTS
========================================================= */

const screenOne =
    document.getElementById("screenOne");

const screenTwo =
    document.getElementById("screenTwo");

const screenThree =
    document.getElementById("screenThree");

const gift =
    document.getElementById("gift");

const surpriseButton =
    document.getElementById("surpriseButton");

const transition =
    document.getElementById("transition");

const memoryWall =
    document.getElementById("memoryWall");

const finalMessage =
    document.getElementById("finalMessage");

const letterButton =
    document.getElementById("letterButton");

const backMemories =
    document.getElementById("backMemories");

const progressText =
    document.getElementById("progressText");

const progressFill =
    document.getElementById("progressFill");

const replay =
    document.getElementById("replay");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxQuote =
    document.getElementById("lightboxQuote");

const closeLightbox =
    document.getElementById("closeLightbox");


/* =========================================================
   CARD POSITIONS
========================================================= */

const positions = [

    /* TOP */

    [8, 20, -9],
    [17, 14, 6],
    [27, 20, -5],
    [37, 13, 8],
    [47, 19, -6],
    [57, 14, 5],
    [67, 20, -7],
    [77, 14, 6],
    [88, 20, -8],

    /* MIDDLE */

    [8, 45, 6],
    [18, 40, -7],
    [29, 47, 5],
    [40, 41, -6],
    [51, 46, 7],
    [62, 40, -5],
    [73, 47, 6],
    [84, 41, -7],

    /* BOTTOM */

    [13, 70, -6],
    [25, 76, 7],
    [38, 70, -5],
    [51, 77, 6],
    [64, 70, -7],
    [77, 76, 5]

];


/* =========================================================
   WAIT
========================================================= */

function wait(ms) {

    return new Promise(
        resolve =>
            setTimeout(
                resolve,
                ms
            )
    );

}


/* =========================================================
   STARS
========================================================= */

function createStars() {

    const containers = [

        document.getElementById("stars"),

        document.getElementById("memoryStars"),

        document.getElementById("letterStars")

    ];


    containers.forEach(
        container => {

            for (
                let i = 0;
                i < 65;
                i++
            ) {

                const star =
                    document.createElement("span");


                star.className =
                    container.id === "letterStars"
                        ? "letter-star"
                        : "star";


                const size =
                    Math.random() * 2.2 + 1;


                star.style.width =
                    `${size}px`;

                star.style.height =
                    `${size}px`;


                star.style.left =
                    `${Math.random() * 100}%`;


                star.style.top =
                    `${Math.random() * 100}%`;


                star.style.animationDelay =
                    `${Math.random() * 3}s`;


                container.appendChild(
                    star
                );

            }

        }
    );

}


/* =========================================================
   FLOATING HEARTS
========================================================= */

function createFloatingHearts() {

    const containers = [

        {
            element:
                document.getElementById(
                    "memoryHearts"
                ),

            className:
                "floating-heart"
        },

        {
            element:
                document.getElementById(
                    "letterHearts"
                ),

            className:
                "letter-floating-heart"
        }

    ];


    containers.forEach(
        item => {

            for (
                let i = 0;
                i < 18;
                i++
            ) {

                const heart =
                    document.createElement(
                        "span"
                    );


                heart.className =
                    item.className;


                heart.textContent =
                    i % 2
                        ? "♡"
                        : "♥";


                heart.style.left =
                    `${Math.random() * 100}%`;


                heart.style.top =
                    `${Math.random() * 100}%`;


                heart.style.animationDelay =
                    `${Math.random() * 6}s`;


                heart.style.animationDuration =
                    `${6 + Math.random() * 5}s`;


                item.element.appendChild(
                    heart
                );

            }

        }
    );

}


/* =========================================================
   CREATE MEMORY CARDS
========================================================= */

function createCards() {

    memoryWall.innerHTML = "";


    memories.forEach(
        (memory, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "memory-card";


            const image =
                memory[0];

            const quote =
                memory[1];


            const position =
                positions[index];


            /*
                Final position.
            */

            card.style.setProperty(
                "--left",
                `${position[0]}%`
            );


            card.style.setProperty(
                "--top",
                `${position[1]}%`
            );


            card.style.setProperty(
                "--rotation",
                `${position[2]}deg`
            );


            /*
                Random stack position.
            */

            card.style.setProperty(
                "--stack-x",
                `${Math.random() * 28 - 14}px`
            );


            card.style.setProperty(
                "--stack-y",
                `${Math.random() * 28 - 14}px`
            );


            card.style.setProperty(
                "--stack-r",
                `${Math.random() * 20 - 10}deg`
            );


            card.innerHTML = `

                <div class="memory-card-inner">


                    <div
                        class="card-ribbon-v"
                    ></div>


                    <div
                        class="card-ribbon-h"
                    ></div>


                    <div class="card-bow">

                        <span
                            class="card-bow-left"
                        ></span>

                        <span
                            class="card-bow-right"
                        ></span>

                        <span
                            class="card-bow-center"
                        ></span>

                    </div>


                    <div class="photo-frame">

                        <img
                            class="photo-blur"
                            src="assets/${image}"
                            alt=""
                        >


                        <img
                            class="photo"
                            src="assets/${image}"
                            alt="Memory ${index + 1}"
                        >

                    </div>


                    <div class="card-quote">

                        ${quote}

                    </div>


                </div>

            `;


            memoryWall.appendChild(
                card
            );


            /*
                Open large image
                when clicked.
            */

            card.addEventListener(
                "click",
                () => {

                    if (
                        card.classList.contains(
                            "opened"
                        )
                    ) {

                        openLightbox(
                            image,
                            quote
                        );

                    }

                }
            );

        }
    );

}


/* =========================================================
   TRANSITION PARTICLES
========================================================= */

function transitionParticles() {

    const symbols = [
        "♥",
        "♡",
        "✦",
        "✧"
    ];


    for (
        let i = 0;
        i < 55;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.style.position =
            "fixed";


        particle.style.left =
            "50%";


        particle.style.top =
            "50%";


        particle.style.zIndex =
            "50001";


        particle.style.pointerEvents =
            "none";


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.color =
            i % 2
                ? "#f1789c"
                : "#ffd2df";


        particle.style.fontSize =
            `${8 + Math.random() * 14}px`;


        const x =
            Math.random() * 700 - 350;


        const y =
            Math.random() * 600 - 300;


        particle.animate(

            [

                {
                    transform:
                        "translate(-50%,-50%) scale(.2)",

                    opacity: 1

                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(1.1)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    1000 +
                    Math.random() * 700,

                easing:
                    "cubic-bezier(.16,.84,.24,1)",

                fill:
                    "forwards"

            }

        );


        document.body.appendChild(
            particle
        );


        setTimeout(
            () => particle.remove(),
            1900
        );

    }

}


/* =========================================================
   OPEN GIFT
========================================================= */

async function openGift() {

    surpriseButton.disabled =
        true;


    gift.classList.add(
        "open"
    );


    await wait(650);


    transition.classList.add(
        "active"
    );


    transitionParticles();


    await wait(850);


    screenOne.classList.add(
        "exit"
    );


    screenTwo.classList.add(
        "visible"
    );


    window.scrollTo(
        0,
        0
    );


    await wait(650);


    transition.classList.remove(
        "active"
    );


    await wait(350);


    spreadCards();

}


/* =========================================================
   SPREAD CARDS
========================================================= */

function spreadCards() {

    const cards =
        document.querySelectorAll(
            ".memory-card"
        );


    /*
        Render stack first.
    */

    void memoryWall.offsetHeight;


    requestAnimationFrame(
        () => {

            cards.forEach(
                (card, index) => {

                    setTimeout(
                        () => {

                            card.classList.add(
                                "spread"
                            );

                        },
                        index * 50
                    );

                }
            );

        }
    );


    setTimeout(
        openCards,
        1850
    );

}


/* =========================================================
   OPEN ALL CARDS
========================================================= */

function openCards() {

    const cards =
        document.querySelectorAll(
            ".memory-card"
        );


    cards.forEach(
        (card, index) => {

            setTimeout(
                () => {

                    card.classList.add(
                        "opening"
                    );


                    createCardBurst(
                        card
                    );

                },
                index * 48
            );


            setTimeout(
                () => {

                    card.classList.add(
                        "opened"
                    );


                    updateProgress(
                        index + 1
                    );

                },
                480 + index * 48
            );

        }
    );


    /*
        Final message and letter button.
    */

    setTimeout(
        () => {

            finalMessage.classList.add(
                "visible"
            );


            letterButton.classList.add(
                "visible"
            );

        },

        500 +
        memories.length * 48 +
        850
    );

}


/* =========================================================
   CARD PARTICLES
========================================================= */

function createCardBurst(card) {

    const rect =
        card.getBoundingClientRect();


    for (
        let i = 0;
        i < 7;
        i++
    ) {

        const heart =
            document.createElement(
                "span"
            );


        heart.textContent =
            i % 2
                ? "♡"
                : "♥";


        heart.style.position =
            "fixed";


        heart.style.left =
            `${rect.left + rect.width / 2}px`;


        heart.style.top =
            `${rect.top + rect.height / 2}px`;


        heart.style.zIndex =
            "30000";


        heart.style.pointerEvents =
            "none";


        heart.style.color =
            "#ed7197";


        heart.style.fontSize =
            `${8 + Math.random() * 9}px`;


        const x =
            Math.random() * 100 - 50;


        const y =
            Math.random() * -90 - 20;


        heart.animate(

            [

                {
                    transform:
                        "translate(-50%,-50%) scale(.3)",

                    opacity: 1

                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(1)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    900 +
                    Math.random() * 400,

                easing:
                    "ease-out",

                fill:
                    "forwards"

            }

        );


        document.body.appendChild(
            heart
        );


        setTimeout(
            () => heart.remove(),
            1500
        );

    }

}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress(
    count
) {

    progressText.textContent =
        `${count} / ${memories.length}`;


    progressFill.style.width =
        `${count / memories.length * 100}%`;

}


/* =========================================================
   LIGHTBOX
========================================================= */

function openLightbox(
    image,
    quote
) {

    lightboxImage.src =
        `assets/${image}`;


    lightboxQuote.textContent =
        quote;


    lightbox.classList.add(
        "show"
    );

}


function closePhoto() {

    lightbox.classList.remove(
        "show"
    );

}


closeLightbox.addEventListener(
    "click",
    closePhoto
);


lightbox.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            lightbox
        ) {

            closePhoto();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closePhoto();

        }

    }
);


/* =========================================================
   OPEN LETTER
========================================================= */

async function openLetter() {

    letterButton.classList.remove(
        "visible"
    );


    transition.classList.add(
        "active"
    );


    transitionParticles();


    await wait(900);


    screenTwo.classList.remove(
        "visible"
    );


    screenThree.classList.add(
        "visible"
    );


    window.scrollTo(
        0,
        0
    );


    await wait(700);


    transition.classList.remove(
        "active"
    );


    await wait(200);


    const letter =
        document.querySelector(
            ".love-letter"
        );


    letter.classList.add(
        "open"
    );

}


/* =========================================================
   LETTER BUTTON
========================================================= */

letterButton.addEventListener(
    "click",
    openLetter
);


/* =========================================================
   BACK TO MEMORIES
========================================================= */

backMemories.addEventListener(
    "click",
    async () => {

        transition.classList.add(
            "active"
        );


        await wait(650);


        screenThree.classList.remove(
            "visible"
        );


        screenTwo.classList.add(
            "visible"
        );


        window.scrollTo(
            0,
            0
        );


        await wait(550);


        transition.classList.remove(
            "active"
        );


        letterButton.classList.add(
            "visible"
        );

    }
);


/* =========================================================
   REPLAY
========================================================= */

replay.addEventListener(
    "click",
    () => {

        screenTwo.classList.remove(
            "visible"
        );


        screenThree.classList.remove(
            "visible"
        );


        finalMessage.classList.remove(
            "visible"
        );


        letterButton.classList.remove(
            "visible"
        );


        const letter =
            document.querySelector(
                ".love-letter"
            );


        letter.classList.remove(
            "open"
        );


        createCards();


        updateProgress(
            0
        );


        gift.classList.remove(
            "open"
        );


        screenOne.classList.remove(
            "exit"
        );


        surpriseButton.disabled =
            false;


        window.scrollTo(
            0,
            0
        );

    }
);


/* =========================================================
   BUTTON
========================================================= */

surpriseButton.addEventListener(
    "click",
    openGift
);


/* =========================================================
   INITIALIZATION
========================================================= */

createStars();

createFloatingHearts();

createCards();

updateProgress(0);