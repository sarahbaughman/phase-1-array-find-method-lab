// code your solution here

const records = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]

function superbowlWin(record) {
    let oneWay = record.find(element => element.result === "W")
    if (oneWay)
        return oneWay.year
    else return oneWay
}

superbowlWin(records)


