import {test,expect} from '@playwright/test';

test(`Verify Status`,async({request})=>{
    const response = await request.get(`https://reqres.in/api/users/2`);
    console.log(response.status());
    expect(response.status()).toBe(200);
})

test(`Verify response email`,async({request})=>{
    const response = await request.get(`https://reqres.in/api/users/2`);
    const responseBody = JSON.parse(await response.text());
    console.log(responseBody.data.email);
    expect(responseBody.data.email).toEqual(`janet.weaver@reqres.in`);
})

test(`Verify response id`,async({request})=>{
    const response = await request.get(`https://reqres.in/api/users/2`);
    const responseBody = JSON.parse(await response.text());
    console.log(responseBody.data.id);
    expect(responseBody.data.id).toEqual(2);
})

