var sleepTime = "2000"
var CopiedMSG = "Copied!"


document.addEventListener("DOMContentLoaded", function(event) {

  const showNavbar = (toggleId, navId, bodyId, headerId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId),
  bodypd = document.getElementById(bodyId),
  headerpd = document.getElementById(headerId)
  
  // Validate that all variables exist
  if(toggle && nav && bodypd && headerpd){
  toggle.addEventListener('click', ()=>{
  // show navbar
  nav.classList.toggle('show')
  // change icon
  toggle.classList.toggle('bx-x')
  // add padding to body
  bodypd.classList.toggle('body-pd')
  // add padding to header
  headerpd.classList.toggle('body-pd')
  })
  }
  }
  
  showNavbar('header-toggle','nav-bar','body-pd','header')
  
  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll('.nav_link')
  
  function colorLink(){
  if(linkColor){
  linkColor.forEach(l=> l.classList.remove('active'))
  this.classList.add('active')
  }
  }
  linkColor.forEach(l=> l.addEventListener('click', colorLink))
});

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
async function CT(){ 
  document.getElementById("myInput").value = CopiedMSG
  await sleep(sleepTime) //wait 5 seconds
  document.getElementById("myInput").value = 'https://bit.ly/PPM3U'
}

async function CT1(){ 
  document.getElementById("myInput1").value = CopiedMSG
  await sleep(sleepTime) //wait 5 seconds
  document.getElementById("myInput1").value = 'https://bit.ly/PPM3U-E'
}

async function CT2(){ 
  document.getElementById("myInput2").value = CopiedMSG
  await sleep(sleepTime) //wait 5 seconds
  document.getElementById("myInput2").value = 'https://bit.ly/PPM3U-CS'
}

async function CT3(){ 
  document.getElementById("myInput3").value = CopiedMSG
  await sleep(sleepTime) //wait 5 seconds
  document.getElementById("myInput3").value = 'https://bit.ly/PPEPG3'
}

function CopyText() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  CT()
  
};

function CopyText1() {
  /* Get the text field */
  var copyText = document.getElementById("myInput1");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  CT1()

};

function CopyText2() {
  /* Get the text field */
  var copyText = document.getElementById("myInput2");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  CT2()
};

function CopyText3() {
  /* Get the text field */
  var copyText = document.getElementById("myInput3");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  CT3()
};

function animateBTN() {
  const element = document.getElementById("btn");
  element.classList.add('animate__animated', 'animate__fadeOutRightBig');

  element.addEventListener('animationend', () => {
    element.classList.remove('animate__animated', 'animate__fadeOutRightBig');
    element.classList.add('animate__animated', 'animate__fadeInRightBig');
  });

}

function animateBTN1() {
  const element = document.getElementById("btn1");
  element.classList.add('animate__animated', 'animate__fadeOutRightBig');

  element.addEventListener('animationend', () => {
    element.classList.remove('animate__animated', 'animate__fadeOutRightBig');
    element.classList.add('animate__animated', 'animate__fadeInRightBig');
  });

}

function animateBTN2() {
  const element = document.getElementById("btn2");
  element.classList.add('animate__animated', 'animate__fadeOutRightBig');

  element.addEventListener('animationend', () => {
    element.classList.remove('animate__animated', 'animate__fadeOutRightBig');
    element.classList.add('animate__animated', 'animate__fadeInRightBig');
  });

}

function animateBTN3() {
  const element = document.getElementById("btn3");
  element.classList.add('animate__animated', 'animate__fadeOutRightBig');

  element.addEventListener('animationend', () => {
    element.classList.remove('animate__animated', 'animate__fadeOutRightBig');
    element.classList.add('animate__animated', 'animate__fadeInRightBig');
  });

}