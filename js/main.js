/* ================================
   HERO WATER DROPLET ANIMATION
================================ */

const hero = document.querySelector('.hero');

for (let i = 0; i < 20; i++) {
  const drop = document.createElement('span');
  drop.classList.add('drop');
  drop.style.left = Math.random() * 100 + '%';
  drop.style.animationDuration = 3 + Math.random() * 5 + 's';
  hero.appendChild(drop);
}

/* ================================
   QUOTE FORM – WHATSAPP
================================ */

function sendWhatsApp() {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !phone || !message) {
    alert("Please fill in Name, Phone, and Job Details.");
    return;
  }

  const text =
    `QUOTE REQUEST\n\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Email: ${email}\n\n` +
    `Job Details:\n${message}`;

  const encodedText = encodeURIComponent(text);

  window.open(
    `https://wa.me/27836055476?text=${encodedText}`,
    '_blank'
  );
}

/* ================================
   QUOTE FORM – EMAIL (FIXED)
================================ */

function sendEmail() {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !phone || !message) {
    alert("Please fill in Name, Phone, and Job Details.");
    return;
  }

  const subject = encodeURIComponent(
    "Quote Request – Just Plumbing Solutions"
  );

  const body = encodeURIComponent(
    `QUOTE REQUEST\n\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Email: ${email}\n\n` +
    `Job Details:\n${message}`
  );

  const mailtoLink =
    `mailto:justplumbingsolutions@gmail.com` +
    `?subject=${subject}&body=${body}`;

  // Use window.open for better browser support
  window.open(mailtoLink, '_self');
}
