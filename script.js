console.log(`Hello World`);

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const firstTerm = document.getElementById("A");
  const nthTerm = document.getElementById("N");
  const commonDifference = document.getElementById("D");
  const outputAP = document.getElementById("nthTerm");
  const sumAP = document.getElementById("sumAP");
  const AP = document.getElementById("AP");

  let a1 = firstTerm.value;
  let an = nthTerm.value;
  let d = commonDifference.value;

  let A1 = Number.parseInt(a1);
  let An = Number.parseInt(an);
  let D = Number.parseInt(d);

  let nth = A1 + (An - 1) * D;
  outputAP.innerHTML = `The ${An}th Term is: ${nth}`;

  let sum = (An / 2) * (2 * A1 + (An - 1) * D);
  sumAP.innerHTML = `The sum of ${An} Terms is: ${sum}`;

  for (i = 0; i < Array.from(an).length; i++) {
    let ap = a1 + i;
    AP.innerHTML = `The Arithmetic Progression is: ${ap}`;
  }

  event.preventDefault();
});
