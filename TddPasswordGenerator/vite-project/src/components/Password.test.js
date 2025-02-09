import { test, expect } from 'vitest'; // Import Vitest utilities
import Password from './Password';

test('Should return a Password of atleast 8 digits', ()=>{
    const len = Password(9)
    expect(len.length ).toBeGreaterThanOrEqual(8)
})

test("if the length is less than 8 it should throw an error",()=>{
    expect(() => Password(6, true, false)).toThrowError("Length of the password is out of bounds")
})

test("if the length is greater than 16 it should throw an error",()=>{
    expect(() => Password(17, true, true)).toThrowError("Length of the password is out of bounds")
})

test('Length of the Password should be equal to user\'s choise', ()=>{
    const len = Password(9)
    expect(len.length).toBe(9)
})

test('The generated password should contain a number',()=>{
    expect(Password(10, true, false)).toMatch(/[0-9]/);
    
})

test('The generated password should contain a special character',()=>{
    expect(Password(10, false, true)).toMatch(/[!,@,#,$,%,^,&,*,~,<,>,+]/);
})

test('The generated password should have both a munber and a character', ()=>{
    const pass = Password(10, true, true)
    expect(pass).toMatch(/[0-9,!,@,#,$,%,^,&,*,~,<,>,+]/)
})

test('the generated passwords should be different all the times', ()=>{
    const pass1 = Password(11, true, true)
    const pass2 = Password(11, true, true)
    const pass3 = Password(11, true, true)
    const pass4 = Password(11, true, true)

    // expect(pass1).not.toBe(pass2);
    // expect(pass1).not.toBe(pass3);
    // expect(pass1).not.toBe(pass4);
    // expect(pass2).not.toBe(pass3);
    // expect(pass2).not.toBe(pass4);
    // expect(pass3).not.toBe(pass4);
    
    const passwordSet = new Set([pass1, pass2, pass3, pass4])
    expect(passwordSet.size).toBe(4)
})



