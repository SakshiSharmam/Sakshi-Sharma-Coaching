const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='76px';nav.style.right='0';nav.style.left='0';nav.style.padding='20px';nav.style.background='#fbfaf5';nav.style.flexDirection='column';nav.style.textAlign='center';});
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const course = document.getElementById("course").value;
  const message = document.getElementById("message").value;

  const text =
    "Hello Sakshi Ma'am,%0A%0A" +
    "New Course Enquiry%0A%0A" +
    "Name: " + encodeURIComponent(name) + "%0A" +
    "Email: " + encodeURIComponent(email) + "%0A" +
    "Phone: " + encodeURIComponent(phone) + "%0A" +
    "Course: " + encodeURIComponent(course) + "%0A" +
    "Message: " + encodeURIComponent(message);

  window.open(
    "https://wa.me/918219370122?text=" + text,
    "_blank"
  );
});
