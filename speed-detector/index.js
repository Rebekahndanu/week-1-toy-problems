function calculatePoints(event) {
    event.preventDefault();
     // Retrieves the speed value entered in the form input field
    const speed = parseInt(document.getElementById('speed').value);
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;

    // Checks if the speed is within the limit
    if (speed <= speedLimit) {
      document.getElementById('result').innerText = "Ok";
      return;
    }

    // Calculates the excess speed over the limit and corresponding demerit points
    const excessSpeed = speed - speedLimit;
    const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);

      // Displays the appropriate message based on demerit points: "License suspended" or the points earned
      if (demeritPoints >= maxDemeritPoints) {
        document.getElementById('result').innerText = "License suspended";
      } else {
        document.getElementById('result').innerText = "Points: " + demeritPoints;
      }
    }
