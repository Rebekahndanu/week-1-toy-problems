function calculatePoints(event) {
    event.preventDefault();
    const speed = parseInt(document.getElementById('speed').value);
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;
  
    if (speed <= speedLimit) {
      document.getElementById('result').innerText = "Ok";
      return;
    }

    const excessSpeed = speed - speedLimit;
    const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);
  
      if (demeritPoints >= maxDemeritPoints) {
        document.getElementById('result').innerText = "License suspended";
      } else {
        document.getElementById('result').innerText = "Points: " + demeritPoints;
      }
    }
