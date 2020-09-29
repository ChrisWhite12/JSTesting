const { TestScheduler } = require('jest')
let { repeatMessage } = require('../server/index')

test("Example Test", () => {
    expect("truthy string").toBeTruthy();
})

describe('multiple tests', () => {

    test("repeatMessage test1", () => {
        expect(repeatMessage('hello',3)).toEqual('hellohellohello');
    })
    test("repeatMessage test2", () => {
        expect(repeatMessage('hello',0)).toEqual('');
    })
    test("repeatMessage test3", () => {
        expect(repeatMessage('a',4)).toEqual('aaaa');
    })

    test('should be a func', () => {
        expect(typeof(repeatMessage))
    })


})

const request = require('supertest')
var {server,app} = require('../server/index')

afterAll(async (done) => {
    await server.close()

    await new Promise(resolve => setTimeout(() => resolve(),500))

    done()
})

describe('Express server home', () => {
    test('return 200 status code', async (done) => {
        const response = await request(app).get('/');
        expect(response.statusCode).toEqual(200)
        done();
    })
})

describe('Express server home', () => {
    test('show hello world', async (done) => {
        const response = await request(app).get('/');
        expect(response.body.message).toEqual("Hello World!")
        done();
    })
})

describe('/names page functionality', () => {
    test('should return Luke', async () => {
        const response = await request(app)
        .post('/names')
        .send({
            names: ['Luke', 'Ash', 'Nandini']
        })
        expect(response.body.firstName).toEqual("Luke")
    })
})