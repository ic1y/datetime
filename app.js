function getTime() {
  document.getElementsByTagName("p")[0].innerText = new Intl.DateTimeFormat((navigator.language || "en-US"), {
    dateStyle: "full",
    timeStyle: "full",
  }).format(new Date());
}
getTime();
setInterval(getTime, 1000);