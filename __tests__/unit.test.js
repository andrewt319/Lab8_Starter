// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber
test('True 1: isPhoneNumber', () => {
    phoneNumber = '123-456-7890'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(true)

})

test('True 2: isPhoneNumber', () => {
    phoneNumber = '555-555-5555'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(true)
})

test('False 1: isPhoneNumber', () => {
    phoneNumber = '123'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(false)
})

test('False 2: isPhoneNumber', () => {
    phoneNumber = 'abc'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(false)
})


// isEmail
test('True 1: isEmail', () => {
    email = 'andrew@gmail.com'
    expect(functions.isEmail(email)).toBe(true)

})

test('True 2: isEmail', () => {
    email = 'bob@yahoo.com'
    expect(functions.isEmail(email)).toBe(true)
})

test('False 1: isEmail', () => {
    email = '@gmail@yahoo'
    expect(functions.isEmail(email)).toBe(false)
})

test('False 2: isEmail', () => {
    email = '@@@three'
    expect(functions.isEmail(email)).toBe(false)
})


// isStrongPassword
test('True 1: isStrongPassword', () => {
    password = 'aabasdfadfadfd'
    expect(functions.isStrongPassword(password)).toBe(true)

})

test('True 2: isStrongPassword', () => {
    password = 'bobyahoocom'
    expect(functions.isStrongPassword(password)).toBe(true)
})

test('False 1: isStrongPassword', () => {
    password = '1false'
    expect(functions.isStrongPassword(password)).toBe(false)
})

test('False 2: isStrongPassword', () => {
    password = 'a'
    expect(functions.isStrongPassword(password)).toBe(false)
})


// isDate
test('True 1: isDate', () => {
    date = '05/26/2023'
    expect(functions.isDate(date)).toBe(true)

})

test('True 2: isDate', () => {
    date = '12/12/2020'
    expect(functions.isDate(date)).toBe(true)
})

test('False 1: isDate', () => {
    date = '5/5/23'
    expect(functions.isDate(date)).toBe(false)
})

test('False 2: isDate', () => {
    date = '5/05/20222'
    expect(functions.isDate(date)).toBe(false)
})


// isHexColor
test('True 1: isHexColor', () => {
    HexColor = '#FFFFFF'
    expect(functions.isHexColor(HexColor)).toBe(true)

})

test('True 2: isHexColor', () => {
    HexColor = '#008000'
    expect(functions.isHexColor(HexColor)).toBe(true)
})

test('False 1: isHexColor', () => {
    HexColor = '#0'
    expect(functions.isHexColor(HexColor)).toBe(false)
})

test('False 2: isHexColor', () => {
    HexColor = 'Gree'
    expect(functions.isHexColor(HexColor)).toBe(false)
})