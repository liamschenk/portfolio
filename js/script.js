function changeTheme() {
  var storedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  if (storedTheme)
    document.documentElement.setAttribute("data-theme", storedTheme);
}

setInterval(changeTheme, 1000);

const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

document.documentElement.style.setProperty("--vh", `${vh}px`);
