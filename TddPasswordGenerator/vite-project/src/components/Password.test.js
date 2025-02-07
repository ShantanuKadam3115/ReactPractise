import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest'; // Import Vitest utilities
import Password from './Password';

test('Should return a Password of atleast 8 digits', ()=>{
    const len = Password(9)
    expect(len.length ).toBeGreaterThanOrEqual(8)
})

test("if the length is less than 8 it should throw an error",()=>{
    expect(() => Password(6, true, false)).toThrowError("Length of the password is out of bounds")
})

test('Length of the Password should be equal to user\'s choise', ()=>{
    const len = Password(9)
    expect(len.length).toBe(9)
})

test('The generated password should contain a number',()=>{
    expect(Password(10, true, false)).toMatch(/[0-9]/);
    
})

test('the generated password when isCharAllowed is false should not have special characte')

test('The generated password should contain a special character',()=>{
    expect(Password(10, false, true)).toMatch(/[!,@,#,$,%,^,&,*,~,<,>,+]/);
})

