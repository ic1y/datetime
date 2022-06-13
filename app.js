if("serviceWorker" in navigator && location.protocol == "https:") {
  navigator.serviceWorker.register("./sw.js", {scope: "/"});
}
function getTime() {
  document.getElementsByTagName("p")[0].innerText = new Intl.DateTimeFormat((navigator.language || "en-US"), {
    dateStyle: "full",
    timeStyle: "medium",
  }).format(new Date());
}
getTime();
setInterval(getTime, 1000);