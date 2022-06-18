const authController = require('./auth');
const authService = require('../services/auth.service');
const {log} = require("sharp/lib/libvips");

describe('Auth Controller', () => {
    beforeAll(() => {
        console.log('before ALL');
    });

    beforeEach(() => {
        console.log('before Each');
    });

    describe('Register', () => {
        test('New User should register with email', async () => {
            let next = jest.fn();
            authService.registerUser = jest.fn((data) => data);
            const req = {
                body: {
                    name: "UserName",
                    email: "email@gmail.com",
                    password: "qwerty123"
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn((data) => data),
            }

            const result = await authController.register(req, res, next);
            expect(result.code).toBe(201);
            expect(result.data.name).toBe('UserName');
            expect(result.data.email).toBe('email@gmail.com');
            expect(result.data.password).toBeUndefined();
            expect(next).toBeCalledTimes(0);
        })
        test('Old User should not be able to register again', async () => {
            let next = jest.fn();
            authService.registerUser = jest.fn((data) => {
                throw new Error();
            });

            const req = {
                body: {
                    name: "UserName",
                    email: "email@gmail.com",
                    password: "qwerty123"
                }
            };
            const res = {
                status: jest.fn(function () {
                    return this;
                }),
                json: jest.fn((data) => data),
            }
            await authController.register(req, res, next);
            expect(next).toBeCalledTimes(1);
        })
    })

    describe('Login', () => {
        test('User should login with correct creds', async () => {
            const next = jest.fn();
            const req = {
                body: {
                    email: "email@gmail.com",
                    password: "qwerty123"
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn((data) => data),
            };

            authService.loginUser = jest.fn(() => {
                return {
                    token: 'test-jwt-token'
                }
            });

            const result = await authController.login(req, res, next);

            expect(result.code).toBe(200);
            expect(result.data.token).toBe('test-jwt-token');
        });
    })
})
