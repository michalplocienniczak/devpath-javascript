const csvParsing = require('./csvParsing')

test('Returns correct array of values for csv string', () => {
  expect(csvParsing('1,2,3,4,5,6,7,8,9,10')).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ])
})

test('Returns correct array of values for csv string with strings', () => {
  expect(csvParsing('1,"2",3,"4",5,"6",7,"8",9,"10"')).toEqual([
    1,
    '2',
    3,
    '4',
    5,
    '6',
    7,
    '8',
    9,
    '10',
  ])
})

test('Returns correct array of values for csv string with strings with commas', () => {
  expect(csvParsing('1,"2,3",4,"5,6",7,"8,9",10')).toEqual([
    1,
    '2,3',
    4,
    '5,6',
    7,
    '8,9',
    10,
  ])
})

test('Returns correct array of values for csv string with strings with commas', () => {
  expect(
    csvParsing('"pears","apples","walnuts","grapes","cheese,cake",-22.5')
  ).toEqual(['pears', 'apples', 'walnuts', 'grapes', 'cheese,cake', -22.5])
})

test('Returns correct array of values for csv string.', () => {
  expect(
    csvParsing(
      '1,"Que?","Kay?",2,"Si.","Sea? Kay, sea?","No, no, no. Que... ‘what’.",234,"Kay Watt?","Si, que ‘what’.","C.K. Watt?",3,"Yes!","comma,comma, comma , :)"'
    )
  ).toEqual([
    1,
    'Que?',
    'Kay?',
    2,
    'Si.',
    'Sea? Kay, sea?',
    'No, no, no. Que... ‘what’.',
    234,
    'Kay Watt?',
    'Si, que ‘what’.',
    'C.K. Watt?',
    3,
    'Yes!',
    'comma,comma, comma , :)',
  ])
})
