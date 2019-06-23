function populateAnalysis(data, target) {
  // go over the data set
  for (let i = 0; i < data.length; i++) {
    let { original_date: date, appeared, numbers, hasWinner, jackpot } = data[
      i
    ];

    // get the date
    let lastDate = new Date(date);

    // draw numbers
    for (let j = 0; j < numbers.length; j++) {
      let drawNumber = numbers[j];

      // get number from target array
      let current = target[drawNumber - 1];

      // date comparison
      let currentDate = new Date(current.last);
      if (lastDate > currentDate) {
        current.last = lastDate;
      }

      // number of times appeared
      current.appeared += 1;

      // jackpot
      if (hasWinner) {
        current.jackpotTimes += 1;
        current.jackpots.push({
          lastDate,
          jackpot
        });
      }
    }

    // affinity
    for (let j = 0; j < numbers.length; j++) {
      let drawNumber = numbers[j];

      // get number from target array
      let current = target[drawNumber - 1];

      for (let k = 0; k < numbers.length; k++) {
        if (numbers[k] !== drawNumber) {
          let otherNumber = numbers[k];

          current.affinity[otherNumber - 1].appearedWith += 1;
        }
      }
    }
  }

  return target;
}

export default populateAnalysis;
