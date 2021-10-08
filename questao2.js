var voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false }
]
// Object that contains the voters informations

function voterResults(arr) {
  // the function voterResults gets the voters and return the Results we want to setup
  return arr.reduce(
    // In this case, it'll return the array with the reduce function
    (totalVoters, currentVoters) => {
      // Which creates an anonymous function that contains the variables totalVoters and currentVoters
      return handleAges(totalVoters, currentVoters)
      // For each object of the voters's array, it'll return the function handleAges()
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0
    }
    // THe initial value
  )
}

let handleAges = (total, voter) => {
  // The function handleAges redirect the voters according to their Age range
  if (isYoung(voter.age)) {
    return handleYoung(total, voter)
  } else if (isMid(voter.age)) {
    return handleMid(total, voter)
  } else if (isOld(voter.age)) {
    return handleOld(total, voter)
  }
}

let isYoung = voterAge => (voterAge >= 18 && voterAge <= 25 ? true : false)
let isMid = voterAge => (voterAge >= 26 && voterAge <= 35 ? true : false)
let isOld = voterAge => (voterAge >= 36 && voterAge <= 55 ? true : false)
// The Age ranges

let handleYoung = handleVotes('numYoungVotes', 'numYoungPeople')
let handleMid = handleVotes('numMidVotesPeople', 'numMidsPeople')
let handleOld = handleVotes('numOldVotesPeople', 'numOldsPeople')
// For each age range, the objects are directed to the function handleVotes()

let handleVotes = (propVotes, propPeople) => (total, voter) => {
  return {
    ...total,
    [propVotes]: voter.voted ? total[propVotes] + 1 : total[propVotes],
    [propPeople]: total[propPeople] + 1
  }
}
// The handleVotes() get the properties of the voter and return the object with the correspondent values

console.log(voterResults(voters))
