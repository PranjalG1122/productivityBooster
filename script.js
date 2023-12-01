const buttonElement = document.getElementById("saveButton");
const resetButtonElement = document.getElementById("resetButton");
const startTimeElement = document.getElementById("startTime");
const endTimeElement = document.getElementById("endTime");

let startTime = "";
let endTime = "";

chrome.storage.sync.get(["startTime", "endTime"], (result) => {
  if (result.startTime && result.endTime) {
    startTime = result.startTime;
    endTime = result.endTime;
    startTimeElement.value = startTime;
    endTimeElement.value = endTime;
  }
});

startTimeElement.addEventListener("change", (e) => {
  startTime = e.target.value;
});

endTimeElement.addEventListener("change", (e) => {
  endTime = e.target.value;
});

buttonElement.addEventListener("click", () => {
  chrome.storage.sync.set({ startTime: startTime });
  chrome.storage.sync.set({ endTime: endTime });
});

resetButtonElement.addEventListener("click", () => {
  chrome.storage.sync.set({ startTime: "" });
  chrome.storage.sync.set({ endTime: "" });
  startTime = "";
  endTime = "";
  startTimeElement.value = "";
  endTimeElement.value = "";
});
