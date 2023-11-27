const getJokes = async () => {
  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    const myJoke = document.querySelector("#myjoke");
    myJoke.innerHTML = data.value;
  } catch (error) {}
};

window.addEventListener("load", () => {
  getJokes();
});
