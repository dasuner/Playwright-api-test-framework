import { test, expect } from '@playwright/test'

test.describe('reqres basis tests', () => {

    //GET Single User
    test('get single user', async ({ request }) => {
        const response = await request.get('https://reqres.in/api/users/2')
        console.log(await response.json())
        expect(response.status()).toBe(200)
        const text = await response.text()
        expect(text).toContain('Janet')
    })

    //POST User
    test('create a user', async ({ request }) => {
        const response = await request.post('https://reqres.in/api/users', {
            data: {
                "name": "morpheus",
                "job": "leader"
            }
        })
        console.log(await response.json())
        expect(response.status()).toBe(201)
        const text = await response.text()
        expect(text).toContain('morpheus')
    })

    //PUT User
    test('update a user', async ({ request }) => {
        const response = await request.put('https://reqres.in/api/users/2', {
            data: {
                "name": "morpheus",
                "job": "zion resident"
            }
        })
        console.log(await response.json())
        expect(response.status()).toBe(200)
        const text = await response.text()
        expect(text).toContain('zion resident')
    })

    //DELETE User
    test('delete a user', async ({ request }) => {
        const response = await request.delete('https://reqres.in/api/users/2')
        expect(response.status()).toBe(204)
    })
})

