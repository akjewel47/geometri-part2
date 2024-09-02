

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