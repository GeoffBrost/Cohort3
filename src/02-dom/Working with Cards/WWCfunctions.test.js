//PSC.Test 
import functions from "./WWCfunctions.js"

function createBigDiv() {
    let createDiv = document.createElement("div");
    createDiv.className = "BigDiv";
    createDiv.setAttribute("bigDiv", true);
    return createDiv;
};


test("Hello World ", () => {
    expect(functions.helloWorld()).toBe(0);
});

test("Create Div for card can", () => {
    let div = createBigDiv();
    expect(div.getAttribute("bigDiv")).toBe("true");
});

test("Create cards", () => {
    functions.resetCounter();
    let div = createBigDiv();
    let card = functions.createCard(div);

    expect(Number(card.id)).toBe(1);

    card = functions.createCard(div);
    expect(Number(card.getAttribute("key"))).toBe(2);

    card = functions.createCard(div);
    expect(Number(card.getAttribute("key"))).toBe(3);

    expect(Number(div.childNodes[0].id)).toBe(1);

    let cardDiv = div.childNodes[1];

    card = functions.createCard(div);

    expect(Number(div.childNodes[3].getAttribute("key"))).toBe(4);
    let cardbefore2 = functions.createCardBefore(cardDiv, card, div);

    expect(Number(div.childNodes[0].getAttribute("key"))).toBe(1);
    expect(Number(div.childNodes[1].getAttribute("key"))).toBe(4);
    expect(Number(div.childNodes[2].getAttribute("key"))).toBe(2);
    expect(Number(div.childNodes[3].getAttribute("key"))).toBe(3);
});

test("Add Before test", () => {
    functions.resetCounter();
    let div = createBigDiv();

    let card = functions.createCard(div);

    expect(Number(card.id)).toBe(1);

    card = functions.createCard(div);
    expect(Number(card.getAttribute("key"))).toBe(2);

    card = functions.createCard(div);
    expect(Number(card.getAttribute("key"))).toBe(3);

    expect(Number(div.childNodes[0].id)).toBe(1);

    let cardDiv = div.childNodes[2];

    card = functions.createCard(div);

    expect(Number(div.childNodes[3].getAttribute("key"))).toBe(4);
    let cardbefore2 = functions.createCardAfter(cardDiv, card, div);

    expect(Number(div.childNodes[0].getAttribute("key"))).toBe(1);
    expect(Number(div.childNodes[1].getAttribute("key"))).toBe(2);
    expect(Number(div.childNodes[2].getAttribute("key"))).toBe(4);
    expect(Number(div.childNodes[3].getAttribute("key"))).toBe(3);
    
   
});
test ("remove card",()=>{
    functions.resetCounter();
    let div = createBigDiv();
    functions.createCard(div);
    functions.createCard(div);
    functions.createCard(div);
    
    expect(Number(div.childNodes[0].getAttribute("key"))).toBe(1);
    expect(Number(div.childNodes[1].getAttribute("key"))).toBe(2);
    expect(Number(div.childNodes[2].getAttribute("key"))).toBe(3);
    functions.deleteCard(div.childNodes[1]);
    expect(Number(div.childNodes[0].getAttribute("key"))).toBe(1);
    expect(Number(div.childNodes[1].getAttribute("key"))).toBe(3);
}); 
