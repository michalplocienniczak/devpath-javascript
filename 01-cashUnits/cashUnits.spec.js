const cashUnits = require('./cashunits')

test('Returns correct cash units for price 123.45', () => {
  expect(cashUnits(123.45)).toEqual({
    100: 1,
    20: 1,
    2: 1,
    1: 1,
    0.2: 2,
    0.05: 1,
  })
})

test('Returns correct cash units for price 987.65', () => {
  expect(cashUnits(987.65)).toEqual({
    500: 1,
    200: 2,
    50: 1,
    20: 1,
    10: 1,
    5: 1,
    2: 1,
    0.5: 1,
    0.1: 1,
    0.05: 1,
  })
})

test('Returns correct cash units for price 543.21', () => {
  expect(cashUnits(543.21)).toEqual({
    500: 1,
    20: 2,
    2: 1,
    1: 1,
    0.2: 1,
    0.01: 1,
  })
})

test('Returns correct cash units for price 999.99', () => {
  expect(cashUnits(999.99)).toEqual({
    500: 1,
    200: 2,
    50: 1,
    20: 2,
    5: 1,
    2: 2,
    0.5: 1,
    0.2: 2,
    0.05: 1,
    0.02: 2,
  })
})

test('Returns correct cash units for price 111.11', () => {
  expect(cashUnits(111.11)).toEqual({
    100: 1,
    10: 1,
    1: 1,
    0.1: 1,
    0.01: 1,
  })
})

test('Returns correct cash units for price 777.77', () => {
  expect(cashUnits(777.77)).toEqual({
    500: 1,
    200: 1,
    50: 1,
    20: 1,
    5: 1,
    2: 1,
    0.5: 1,
    0.2: 1,
    0.05: 1,
    0.02: 1,
  })
})

test('Returns correct cash units for price 222.22', () => {
  expect(cashUnits(222.22)).toEqual({
    200: 1,
    20: 1,
    2: 1,
    0.2: 1,
    0.02: 1,
  })
})

test('Returns correct cash units for price 888.88', () => {
  expect(cashUnits(888.88)).toEqual({
    500: 1,
    200: 1,
    100: 1,
    50: 1,
    20: 1,
    10: 1,
    5: 1,
    2: 1,
    1: 1,
    0.5: 1,
    0.2: 1,
    0.1: 1,
    0.05: 1,
    0.02: 1,
    0.01: 1,
  })
})

test('Returns correct cash units for price 444.44', () => {
  expect(cashUnits(444.44)).toEqual({
    200: 2,
    20: 2,
    2: 2,
    0.2: 2,
    0.02: 2,
  })
})

test('Returns correct cash units for price 10560.72', () => {
  expect(cashUnits(10560.72)).toEqual({
    500: 21,
    50: 1,
    10: 1,
    0.5: 1,
    0.2: 1,
    0.02: 1,
  })
})
