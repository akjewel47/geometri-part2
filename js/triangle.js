

function calculteTriangleAria() {
 // triangle base
 const triangleBaseInput = document.getElementById('triangle-base');
 const triangleBaseText = triangleBaseInput.value;
 const base = parseFloat(triangleBaseText)
 console.log(base)

 // triangle height
 const triangleHeightInput = document.getElementById('triangle-height');
 const triangleHeightText = triangleHeightInput.value;
 const height = parseFloat(triangleHeightText);
 console.log(height);

 const area = 0.5 * base * height;
 console.log('area of triangle:', area);
 //display trangle area
 const triangleAreaspan = document.getElementById('triangle-area');
 triangleAreaspan.innerText = area;
}

// Ractangle card calculate

function calculateRactangleAria() {
 const widthInput = document.getElementById('width')
 const RactangleWidth = widthInput.value;
 const Width = parseFloat(RactangleWidth);
 console.log('Width:', Width);

 const lengthNumber = document.getElementById('length')
 const lengthInput = lengthNumber.value;
 const length = parseFloat(lengthInput);
 console.log('initialNumber:', length);
 const Ractangleformula = Width * length;
 console.log('ractangle formula Number is:', Ractangleformula);
 const RactangleAria = document.getElementById('ractangle-area');
 RactangleAria.innerText = Ractangleformula;
}
// parallelogram card calcutate

function calculateparallelogramAria() {
 const parallaBaselInput = document.getElementById('ParallelogramBase')
 const parallalBase = parallaBaselInput.value;
 const Base = parseFloat(parallalBase);
 console.log(Base);

 const parallalHeightInput = document.getElementById('ParallelogramHeight');
 const paralalHeight = parallalHeightInput.value;
 const Height = parseFloat(paralalHeight);
 console.log(Height);

 const parallelogram = Base * Height
 console.log('prallelogram:', parallelogram);

 const parallelogramAria = document.getElementById('parallelogram-aria');
 parallelogramAria.innerText = parallelogram;

}

// Rhombus card calculate
function calculateRhombusAria(){
const RhombusInputD1 = document.getElementById('Rhombus-d1')
const RhombusValueD1 = RhombusInputD1.value;
const RhombusD1 = parseFloat(RhombusValueD1);
console.log('d1:',RhombusD1)

const RhombusInputD2 = document.getElementById('Rhombus-d2');
const RhombusValueD2 = RhombusInputD2.value;
const RhombusD2 = parseFloat(RhombusValueD2);
console.log('d2:', RhombusD2)

const RhombusFormula = 0.5 * RhombusD1 * RhombusD2;
console.log('Rhombus:', RhombusFormula)

const RhombusAria = document.getElementById('Rhombus-aria')
RhombusAria.innerText = RhombusFormula;
}