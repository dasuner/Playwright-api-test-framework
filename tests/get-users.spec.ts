import { test, expect } from '@playwright/test';
import { request } from 'http';

test.describe(`Get Users`, {
    tag: [`@get`, `@getUsers`]
}, () => {

    //Verify status code
    test(`Get Users - Verify status code`,async({request})=>{
        const response = await request.get(`https://reqres.in/api/users?page=2`);
        console.log(response.status());
        expect(response.status()).toBe(200);
    })

    //Verify response body
    test(`Get Users - Verify response body`,async({request})=>{
        const response = await request.get(`https://reqres.in/api/users?page=2`);
        console.log(response.status());
        expect(response.status()).toBe(200);
        const responseBody = JSON.parse(await response.text());
        //console.log(responseBody);
        expect(responseBody.data[0].email).toEqual(`michael.lawson@reqres.in`);
        console.log(responseBody.data[0].email);
        expect(responseBody.per_page).toEqual(6);
    })

})