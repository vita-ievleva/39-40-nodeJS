## Lesson 11

Send email to new User to confirm the email

``
registration
``

1) Update User model
2) Update Registration flow
- Add step to send email

3) Create service to send email via SendGrid

``
new route GET /verify/:code
``
1) add route
2) update User => verify: true, and verification code - null


``
login
``
Add verification that user confirm email
