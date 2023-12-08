function changeTheme() {
  var storedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  if (storedTheme)
    document.documentElement.setAttribute("data-theme", storedTheme);
}

setInterval(changeTheme, 1000);
