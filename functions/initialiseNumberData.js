function initialiseNumberData() {
  let numberData = [];

  for (let i = 0; i < 40; i++) {
    let defaultObj = {
      number: i + 1,
      last: new Date(true),
      appeared: 0,
      jackpotTimes: 0,
      jackpots: [],
      affinity: []
    };

    for (let j = 0; j < 40; j++) {
      defaultObj.affinity[j] = {
        number: j + 1,
        appearedWith: 0
      };
    }

    numberData[i] = defaultObj;
  }

  return numberData;
}

export default initialiseNumberData;
