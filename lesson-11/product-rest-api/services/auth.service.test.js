const bcrypt = require('bcryptjs');

const {User} = require('../models/user');
const {registerUser} = require('./auth.service');


describe('Auth Service', () => {
    describe('registration', () => {
        it('should throw an Error if User already exists', async () => {
            const spy = jest.spyOn(bcrypt, 'hash');

            // mock return User to test situation when it is not a new User
            User.findOne = jest.fn((data) => data);

            await expect(async () => await registerUser({email: 'email', password: 'password', name: 'name'}))
                .rejects
                .toThrow('User already exists.');
            expect(spy).toHaveBeenCalledTimes(0);
        })

        it('should create User if it is new User', async () => {
            // mock bcrypt to make test fast and isolated
            bcrypt.hash = jest.fn(() => 'bcrypt-hash')

            // mock return null to test situation when User was not found in DB
            User.findOne = jest.fn(() => null);
            User.create = jest.fn((data) => data);

            const result = await registerUser({
                email: 'email',
                password: 'password',
                name: 'name',
                avatarURL: 'gravatarURL',
            });

            expect(result).toStrictEqual({
                "avatarURL": "gravatarURL",
                "email": "email",
                "name": "name",
                "password": "bcrypt-hash"
            });
            expect(bcrypt.hash).toHaveBeenCalledTimes(1);
        })
    })

});
