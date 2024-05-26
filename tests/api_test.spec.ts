import {test,expect} from '@playwright/test'

//GET Request
test('GET request',async({request})=>{
    const response = await request.get('https://reqres.in/api/users?page=2')
    expect (response.status()).toBe(200)
    console.log(await response.json())
    const text = await response.text();
    expect(text).toContain('Michael')
    })


//POST Request
test('POST request',async({request})=>{
    const response = await request.post('https://reqres.in/api/users',{
        data:{
            "name": "morpheus",
            "job": "leader"
        }
    })
    expect(response.status()).toBe(201)
    console.log(await response.json())
    const text = await response.text();
    expect(text).toContain('morpheus')
})

//PUT request
test('PUT request',async({request})=>{
    const response = await request.put('https://reqres.in/api/users/2',{
        data:{
            "name": "morpheus",
            "job": "zion resident"
        }
    })
    expect(response.status()).toBe(200)
    console.log(await response.json())
    const text = await response.text();
    expect(text).toContain('morpheus')
})

//DELETE request
test('DELETE request',async({request})=>{
    const response = await request.delete('https://reqres.in/api/users/2')
    expect(response.status()).toBe(204)
})