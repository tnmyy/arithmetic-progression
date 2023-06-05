console.log(`Hello World`);

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const firstTerm = document.getElementById("A");
  const nthTerm = document.getElementById("N");
  const commonDifference = document.getElementById("D");
  const outputAP = document.getElementById("nthTerm");
  const sumAP = document.getElementById("sumAP");
  const AP = document.getElementById("AP");
  const outputTerm = document.getElementById("term1");
  const outputTerm2 = document.getElementById("term2");

  let a1 = firstTerm.value;
  let an = nthTerm.value;
  let d = commonDifference.value;

  let A1 = Number.parseInt(a1);
  let An = Number.parseInt(an);
  let D = Number.parseInt(d);

  let nth = A1 + (An - 1) * D;
  outputAP.innerHTML = ` ${nth}`;

  let sum = (An / 2) * (2 * A1 + (An - 1) * D);
  sumAP.innerHTML = ` ${sum}`;

  let apSequence = [];
  for (let i = 0; i < An; i++) {
    let ap = A1 + i * D;
    console.log(i);
    apSequence.push(ap);
  }
  AP.innerHTML = ` ${apSequence.join(", ")}`;

  // Color

  outputAP.style.color = "#6a6d76";
  sumAP.style.color = "#6a6d76";
  AP.style.color = "#6a6d76";

  // Output nth Term
  outputTerm.innerHTML = `${An}th`;
  outputTerm2.innerHTML = `${An}th`;
  event.preventDefault();
});
