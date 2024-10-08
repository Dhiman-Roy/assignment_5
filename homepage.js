//Noakhali donation
document
  .getElementById("donateNoakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    const grossAmount = getNumber("grossAmount");
    const totalDonation = getNumber("totalDonationNoakhali");
    const donationAmount = getInputValue("donateNoakhaliInput");
    if (donationAmount === null) {
      return;
    }
    if (donationAmount > grossAmount) {
      alert("No sufficient balance for donation!");
    } else {
      const newTotalDonation = totalDonation + donationAmount;
      const newGrossAmount = grossAmount - donationAmount;
      document.getElementById("grossAmount").innerText = newGrossAmount;
      document.getElementById("totalDonationNoakhali").innerText =
        newTotalDonation;

      document.getElementById("modalContainer").classList.remove("hidden");
      // create history
      historyCreator(
        donationAmount,
        "taka is donated for Flood Relief in Noakhali, Bangladesh"
      );
    }
  });

//Feni donation
document
  .getElementById("donateFeni")
  .addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    const grossAmount = getNumber("grossAmount");
    const totalDonation = getNumber("totalDonationFeni");
    const donationAmount = getInputValue("donateFeniInput");
    if (donationAmount === null) {
      return;
    }
    if (donationAmount > grossAmount) {
      alert("No sufficient balance for donation!");
    } else {
      const newTotalDonation = totalDonation + donationAmount;
      const newGrossAmount = grossAmount - donationAmount;
      document.getElementById("grossAmount").innerText = newGrossAmount;
      document.getElementById("totalDonationFeni").innerText = newTotalDonation;

      document.getElementById("modalContainer").classList.remove("hidden");
      // create history
      historyCreator(
        donationAmount,
        "taka is donated for Flood Relief in Feni, Bangladesh"
      );
    }
  });

//Quota movement donation
document
  .getElementById("donateQuota")
  .addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    const grossAmount = getNumber("grossAmount");
    const totalDonation = getNumber("totalDonationQuota");
    const donationAmount = getInputValue("donateQuotaInput");
    if (donationAmount === null) {
      return;
    }
    if (donationAmount > grossAmount) {
      alert("No sufficient balance for donation!");
    } else {
      console.log("hiii");
      const newTotalDonation = totalDonation + donationAmount;
      const newGrossAmount = grossAmount - donationAmount;
      document.getElementById("grossAmount").innerText = newGrossAmount;
      document.getElementById("totalDonationQuota").innerText =
        newTotalDonation;

      document.getElementById("modalContainer").classList.remove("hidden");
      // create history
      historyCreator(
        donationAmount,
        "taka is donated for Quota Movement in Bangladesh"
      );
    }
  });

//features

//donation button
document
  .getElementById("donationButton")
  .addEventListener("click", function (event) {
    event.target.classList.add("bg-[#B4F461]");

    document.getElementById("donationContainer").classList.remove("hidden");
    document.getElementById("historyContainer").classList.add("hidden");
    document.getElementById("historyButton").classList.remove("bg-[#B4F461]");
  });

//history button
document
  .getElementById("historyButton")
  .addEventListener("click", function (event) {
    event.target.classList.add("bg-[#B4F461]");

    document.getElementById("historyContainer").classList.remove("hidden");
    document.getElementById("donationContainer").classList.add("hidden");
    document.getElementById("donationButton").classList.remove("bg-[#B4F461]");
  });

//close modal button
document
  .getElementById("modalCloseButton")
  .addEventListener("click", function () {
    document.getElementById("modalContainer").classList.add("hidden");
  });

//redirect another page

function blogPage() {
  window.location.href = "./blog.html";
}
function home() {
  window.location.href = "./index.html";
}

//frquent ques ans

function question1() {
  document.getElementById("answer1").classList.remove("hidden");
}
function question2() {
  document.getElementById("answer2").classList.remove("hidden");
}
function question3() {
  document.getElementById("answer3").classList.remove("hidden");
}
function question4() {
  document.getElementById("answer4").classList.remove("hidden");
}
function question5() {
  document.getElementById("answer5").classList.remove("hidden");
}
