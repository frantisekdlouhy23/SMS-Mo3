function goTo(page) {
  window.location.href = page;
}
function validateAndContinue() {
  const jmeno = document.getElementById('jmeno').value.trim();
  const telefon = document.getElementById('telefon').value.trim();
  const error = document.getElementById('error');
  if (!/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ][a-záčďéěíňóřšťúůýž]+ [A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ][a-záčďéěíňóřšťúůýž]+$/.test(jmeno)) {
    error.textContent = "Jméno musí být ve tvaru 'Jméno Příjmení'!";
    return;
  }
  if (!/^\+420\d{9}$/.test(telefon)) {
    error.textContent = "Telefon musí být ve tvaru +420XXXXXXXXX!";
    return;
  }
  error.textContent = "";
  goTo('balicek.html');
}
function saveAndGo() {
  const smsCount = document.getElementById('pocetSms').value;
  const radios = document.getElementsByName('casTyp');
  let casTyp = 'random';
  for (const r of radios) {
    if (r.checked) casTyp = r.value;
  }
  localStorage.setItem('smsCount', smsCount);
  localStorage.setItem('casTyp', casTyp);
  goTo('platba.html');
}
window.addEventListener('DOMContentLoaded', () => {
  if (location.pathname.includes('platba.html')) {
    const zone = document.getElementById('qrZone');
    const smsCount = localStorage.getItem('smsCount');
    const casTyp = localStorage.getItem('casTyp');
    if (smsCount === '1') zone.innerHTML = '<img src="assets/99.jpg" style="width:250px;"><p>1 SMS/den – <b>99 Kč/měsíc</b></p>';
    if (smsCount === '2') zone.innerHTML = '<img src="assets/179.jpg" style="width:250px;"><p>2 SMS/den – <b>179 Kč/měsíc</b></p>';
    if (smsCount === '3') zone.innerHTML = '<img src="assets/249.jpg" style="width:250px;"><p>3 SMS/den – <b>249 Kč/měsíc</b></p>';
    let popis = '';
    if (casTyp === 'random') popis = 'Náhodné rozeslání';
    if (casTyp === '81218') popis = '8:00 / 12:00 / 18:00';
    if (casTyp === '6301117') popis = '6:30 / 11:00 / 17:00';
    if (casTyp === '91420') popis = '9:00 / 14:00 / 20:00';
    document.getElementById('zvolenyCas').innerHTML = '<b>Způsob rozeslání:</b> ' + popis;
  }
});
function odesliSms() {
  alert('Testovací SMS odeslána! (Simulace)');
}
