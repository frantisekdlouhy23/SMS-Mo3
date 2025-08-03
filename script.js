
function goTo(page) {
  window.location.href = page;
}

// Uloží volbu počtu SMS do localStorage a pokračuje na platbu
function saveAndGo() {
  var smsCount = document.getElementById('pocetSms').value;
  localStorage.setItem('smsCount', smsCount);
  window.location.href = 'platba.html';
}

// Na stránce platba.html zobrazí pouze správný QR a cenu
window.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.includes('platba.html')) {
    var zone = document.getElementById('qrZone');
    var smsCount = localStorage.getItem('smsCount');
    if (smsCount === '1') {
      zone.innerHTML = '<img src="99.jpg" alt="QR platba 99 Kč" style="width: 250px;"><p>1 SMS / den – <b>99 Kč / měsíc</b></p>';
    } else if (smsCount === '2') {
      zone.innerHTML = '<img src="179.jpg" alt="QR platba 179 Kč" style="width: 250px;"><p>2 SMS / den – <b>179 Kč / měsíc</b></p>';
    } else if (smsCount === '3') {
      zone.innerHTML = '<img src="249.jpg" alt="QR platba 249 Kč" style="width: 250px;"><p>3 SMS / den – <b>249 Kč / měsíc</b></p>';
    } else {
      zone.innerHTML = '<p style="color:#ff4a4a;font-weight:bold;">Nejprve si zvol počet SMS!</p>';
    }
  }
});

function odesliSms() {
  alert("Testovací SMS byla odeslána na tvé číslo. (Simulace)");
}

// Validace jména a čísla
function validateAndContinue() {
  const jmeno = document.getElementById('jmeno').value.trim();
  const telefon = document.getElementById('telefon').value.trim();
  const error = document.getElementById('error');
  // Kontrola jména: dvě slova, každé začíná velkým písmenem
  if (!/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ][a-záčďéěíňóřšťúůýž]+ [A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ][a-záčďéěíňóřšťúůýž]+$/.test(jmeno)) {
    error.textContent = "Jméno musí být ve tvaru 'Jméno Příjmení' a začínat velkými písmeny!";
    return;
  }
  // Kontrola čísla: +420XXXXXXXXX
  if (!/^\+420\d{9}$/.test(telefon)) {
    error.textContent = "Telefon musí být ve tvaru +420XXXXXXXXX (např. +420123456789)!";
    return;
  }
  error.textContent = "";
  goTo('balicek.html');
}
