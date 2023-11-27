"use strict";

async function getMatchdata() {
  return await fetch(
    "https://api.cricapi.com/v1/currentMatches?apikey=d5756a37-0bd2-45a2-8426-04a80436cd07&offset=0"
  )
    .then((data) => data.json())
    .then((data) => {
      if (data.status != "success") return;

      const matchesList = data.data;

      if (!matchesList) return [];

      const relevantData = matchesList
        .filter(
          (match) => match.series_id == "9cf8458f-f7ac-4f6e-91f5-85d33e31abaa"
        )
        .map((match) => `${match.name},${match.status}`);
      console.log({ relevantData });
      document.getElementById("matches").innerHTML = relevantData
        .map((match) => `<li>${match}</li>`)
        .join("");
      return relevantData;
    })
    .catch((e) => console.log(e));
}
getMatchdata();
