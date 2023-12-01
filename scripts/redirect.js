chrome.storage.sync.get(["startTime", "endTime"], (result) => {
  if (result.startTime && result.endTime) {
    const now = new Date();
    const startTime = new Date();
    const endTime = new Date();

    startTime.setHours(
      result.startTime.split(":")[0],
      result.startTime.split(":")[1]
    );
    endTime.setHours(
      result.endTime.split(":")[0],
      result.endTime.split(":")[1]
    );

    if (now >= startTime && now <= endTime) {
      window.location.replace("https://get-back-to-work.netlify.app/");
    }
  }
});
