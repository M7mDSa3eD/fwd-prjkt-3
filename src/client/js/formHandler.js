import { isURL } from "./isURL";

function handleSubmit(event) {
  event.preventDefault();

  const input = document.querySelector("#url-input");
  const URL = input.value;

  if (isURL(URL)) {
    event.target.classList.add("loading");
    input.classList.remove("has-error");

    fetch("http://localhost:3000/evaluate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: URL,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          document.querySelector("#subjectivity").innerText = res.subjectivity;
          document.querySelector("#score_tag").innerText = res.score_tag;
          document.querySelector("#model").innerText = res.model;
          document.querySelector("#irony").innerText = res.irony;
          document.querySelector("#confidence").innerText = res.confidence;
          document.querySelector("#agreement").innerText = res.agreement;

          document.querySelector("#results").classList.add("has-results");
        }
      })
      .finally(() => {
        event.target.classList.remove("loading");
      });
  } else {
    input.classList.add("has-error");
  }
}

export { handleSubmit };
