const { createElement } = require("react");

const titleInput = document.querySelector(".titleInput");
const plus = document.querySelector("#plus");
const main = document.querySelector("main");

plus.addEventListener("click", () => {
    let noteCard = document.createElement(`div`);
        noteCard.classList.add("note");

    let noteTitle = document.createElement(`p`);
        noteTitle.classList.add(`title`);
        noteTitle.textContent = titleInput.value;

    let hRule = document.createElement(`hr`);


    // middle section where user will write their text for note card
    // __________________________________________________
    let contentOfCard = document.createElement(`p`);
        contentOfCard.classList.add(`noteContent`);

    let span = document.createElement(`span`);
        span.contentEditable = true;
    // _________________________________________________



    // bottom section with save and delete buttons
    // ________________________________________________________________
    let bottomContainer = document.createElement(`div`);
        bottomContainer.classList.add(`bottomContainer`);

    let bottomBtnsContainers = document.createElement(`div`);
        bottomBtnsContainers.classList.add(`bottomBtnsContainers`);
    let bottomBtnsContainers2 = document.createElement(`div`);
        bottomBtnsContainers2.classList.add(`bottomBtnsContainers2`)

    let saveBtn = document.createElement(`button`);
        saveBtn.classList.add(`saveBtn`);
        saveBtn.textContent = `Save`;

    let closeBtn = document.createElement(`button`);
        closeBtn.classList.add(`delContBtn`);
        closeBtn.textContent = `Delete`;
        closeBtn.addEventListener("click", () => {
        noteCard.remove();
    });
    // ________________________________________________________________


    // append function
    bottomBtnsContainers.appendChild(saveBtn);
    bottomBtnsContainers2.appendChild(closeBtn);
    bottomContainer.appendChild(bottomBtnsContainers);
    bottomContainer.appendChild(bottomBtnsContainers2);
    contentOfCard.appendChild(span);
    noteCard.appendChild(noteTitle);
    noteCard.appendChild(hRule);
    noteCard.appendChild(contentOfCard);
    noteCard.appendChild(bottomContainer);

    main.appendChild(noteCard);
});

