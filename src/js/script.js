let countdown;

document.addEventListener('DOMContentLoaded', function() {
  startCountdown(1);
});

function startCountdown(option) {
  clearInterval(countdown);

  let targetDate;
  let title;

  switch(option) {
    case 1:
      targetDate = new Date("Nov 3, 2024 13:30:00 GMT-0300").getTime();
      title = "🧑‍🎓 Estudar todo o conteúdo de português do ENEM";
      break;
    case 2:
      targetDate = new Date("Aug 21, 2024 08:00:00 GMT-0300").getTime();
      title = "🤖 Participar da IA Conference 2024";
      break;
    case 3:
      targetDate = new Date("Sep 9, 2024 10:00:00 GMT-0300").getTime();
      title = "🖱️ Entrevista na Alura";
      break;
    case 4:
      targetDate = new Date("Oct 15, 2024 14:00:00 GMT-0300").getTime();
      title = "📚 Prova de Matemática";
      break;
    default:
      console.error("Opção inválida");
      return;
  }

  document.querySelector('.titleOption').innerText = title;

  document.querySelector('.greenText').innerText = "TEMPO PARA COMPLETAR OBJETIVO";
  document.getElementById("days").innerHTML = "00";
  document.getElementById("hours").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";

  document.querySelectorAll('.option').forEach(button => {
    button.classList.remove('active');
  });

  let desktopOptions = document.querySelectorAll('.groupOptions .option');
  desktopOptions.forEach((button, index) => {
    if (index === option - 1) {
      button.classList.add('active');
    }
  });

  let mobileOptions = document.querySelectorAll('.groupOptionsMobile .option');
  mobileOptions.forEach((button, index) => {
    if (index === option - 1) {
      button.classList.add('active');
    }
  });

  countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
      document.querySelector('.greenText').innerText = "EVENTO CONCLUÍDO!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }, 1000);
}
