function calculateDaysDifference() {
      const startDate = document.getElementById('startDate').value;
      const endDate = document.getElementById('endDate').value;
      const includeEndDate = document.getElementById('includeEndDate').checked;

      const start = new Date(startDate);
      const end = new Date(endDate);
      const endInclusive = includeEndDate ? end.setDate(end.getDate() + 1) : end;
      const timeDiff = new Date(endInclusive).getTime() - start.getTime();
      const daysDiff = Math.round(timeDiff / (1000 * 3600 * 24));
      displayResult(daysDiff);
    }
    function displayResult(daysDifference) {
      const resultContainer = document.getElementById('resultContainer');
      resultContainer.innerHTML = `
        <p class="result-text">The difference is <span class="result-bold">${daysDifference}</span> day(s).</p>
      `;
    }
