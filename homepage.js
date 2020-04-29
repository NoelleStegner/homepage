imgArray=[
  ['slide1.jpg'],
  ['slide2.jpg'],
  ['slide3.jpg'],
  ['slide4.jpg']
]
function slideshowUp(){
  num++;
  num= num % imgArray.length;
  document.getElementById('design').src imgArray[num];

}

function slideshowBack(){
  num--;
  if (num < 0) {num= imgArray.length -1;}
  num= num % imgArray.length;
  document.getElementById('design').src imgArray[num];
}
