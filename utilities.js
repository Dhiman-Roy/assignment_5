function getNumber(id) {
  const num = document.getElementById(id).innerText;
  if (isNaN(num)) {
    alert("Please insert valid number!");
    return;
  } else {
    return parseFloat(num);
  }
}

function getInputValue(id) {
  const elemnt = document.getElementById(id);
  const num = elemnt.value;

  if (isNaN(num)) {
    alert("Please insert valid number!");
    return null;
  } else {
    let amount = parseFloat(num);
    elemnt.value = "";
    return amount;
  }
}

// history creator function
function historyCreator(amount, message) {
  console.log(amount);
  const card = document.createElement("div");
  const cardHeader = document.createElement("h2");
  const cardPara = document.createElement("p");
  card.classList.add(
    "p-5",
    "rounded-lg",
    "border",
    "mb-4",
    "max-w-[1140px]",
    "mx-auto"
  );
  cardHeader.classList.add("font-bold", "text-xl");
  cardPara.classList.add("font-medium", "text-base", "text-black-rgba");
  cardHeader.innerText = `${amount} ${message}`;
  console.log(cardHeader);
  cardPara.innerText = new Date().toDateString();
  card.appendChild(cardHeader);
  card.appendChild(cardPara);
  const historyContainer = document.getElementById("historyContainer");
  historyContainer.appendChild(card);
}
