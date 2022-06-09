## Lesson 8
``
/registration
``

#### 1 Algorithm
1. if User exists in our db -> send error status 409;
2. if it is a new User -> hash and salt password -> save User to DB

``
/login
``

#### 2 Algorithm
1. request validation
2. if no user with login => 401
3. else => verify password
4. if wrong password => 401
5. else generate jwt token and send token to the client


``
/logout
``
#### 3 Algorithm
1. Get user from request
2. Find user in collection
3. set token null


``
auth middlewares
``
#### 4 Algorithm
1. Get token from Request headers
2. Validate token
3. Extract user id and find user by id
4. Verify that tokens
5. Write user to Request

``
pagination
``

#### 5 Algorithm
skip - how many products I should skip in db

total = 20
page 1 products 5  =>  1-5  skip = 0
page 2 products 5  => 6-10  skip = 5
page 3 products 5  => 11-15 skip = 10
...
skipped = (page - 1) * limitPrePage
