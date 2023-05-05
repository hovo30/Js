const players = [
    {
      name: 'Jason Mount',
      birthdate: '19.12.1993',
      country: 'Deutschland',
      number: '21',
      team: 'Manchester United',
      position: 'MF',
      goals: 4,
    },
    {
      name: 'Jason Mount',
      birthdate: '01.01.2001',
      country: 'Deutschland',
      number: '16',
      team: 'Manchester United',
      position: 'MF',
      goals: 0,
    },
    {
      name: 'Finne Bard',
      birthdate: '13.02.1995',
      country: 'Norwegen',
      number: '26',
      position: 'FW',
      team: 'Fulham United',
      goals: 1,
    },
    {
      name: 'Gerhardt Yannick',
      birthdate: '13.03.1994',
      country: 'Deutschland',
      number: 31,
      position: 'MF',
      team: 'Liverpool',
      goals: 8,
    },
  ];
  
  let arr = [];
  let number = [];
  function getGoalsStat() { 
      for (let player of players) {      
        //   arr.push({ name: player.name, team: player.team, goals: player.goals });  
        arr.push({player})   
        number.push({number: player.number})           
      }
  };
  getGoalsStat(players) 
  console.log(number)
  console.log(arr)
//   console.log(getGoalsStat(players));
  