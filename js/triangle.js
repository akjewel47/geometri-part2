

function calculteTriangleAria(){
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
triangleAreaspan.innerText =area;
}

// Ractangle card calculate

function calculateRactangleAria(){
const RactangleInput = document.getElementById('width')
const RactangleWidth = RactangleInput.value;
const Width = parseFloat(RactangleWidth);
console.log('Width:', Width);

const lenthNumber = document.getElementById('lenth')
const RactangleNumber = lenthNumber.value;
const lenth = parseFloat(RactangleNumber);
console.log('initialNumber:', lenth);
const Ractangleformula = Width * lenth;
console.log('ractangle formula Number is:', Ractangleformula);
const RactangleAria = document.getElementById('ractangle-area');
RactangleAria.innerText = Ractangleformula;
}