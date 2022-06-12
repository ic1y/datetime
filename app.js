function getTime() {
  document.getElementsByTagName("p")[0].innerText = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "medium",
  }).format(new Date());
}
getTime();
setInterval(getTime, 1000);