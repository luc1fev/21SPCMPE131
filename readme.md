# READ ME

## Folder Construction

- Material (Basic Website's Elements. i.g. png,website,sample..)
- handwritingdigit (Extend Function Essential files)
- milestore(local mp4 files record process, ignore  from ```.gitignore```,due to the size of mp4 )
- readme.md
- v2 ```core folder with environment and website logic codes(Django)```



## Quick Start
Build and run docker container at port 8000

change your pathway to ```v2``` and run

>  ```
>  docker-compose up
>  ```

Then, open ```localhost:8000``` in your brower



Update:

> pip add Faker simplejson Apr 22



### If you want reset environment 

```bash
docker-compse build
```



## Database Construction

| name   | Descirption                                                  | P.S.                  |
| ------ | ------------------------------------------------------------ | --------------------- |
| identi | primary key,auto increase                                    | Use as account number |
| name   | User name                                                    |                       |
| Amount | account amount, positive decimal (python decimal type, 10 digits max including decimal,2 decimal places) |                       |
| Pwd    | user password, no consider about encryption                  |                       |
| upload | reserverd element for cheque picture file location           |                       |





## Configuration
```localhost:8000/admin```

Default superuser

> Username: root

> password: qwer

## TODO

- [x] Right logic with login and registration  
- [x] modify registration form from BOA or just rebuild one
- [x] Transfer form template
  
- [x] Transfer Logic
- [x] Transfer CSS
- [x] Deposit Form
- [x] Deposit Logic
- [x] Deposit CSS

- [x] statement Logic
- [x] statement CSS
- [x] statement Form
  
- [x] ATM SIMULATOR
- [x] Cancel Acccount
- [x] Upload img

## BUG todo 
- [x] active tag when page changes
- [x] js to check currect amount
- [ ] sometimes Banner not rolling
- [x] other webpage display before login

- [x] reg page name length
- [x] balance problem when register new account with 0 amount
- [x] login in reg page get error

- [x] balance not update after some operation
- [x] reg page name length  



# common topic:
## How to use (demo)

### Index

> 0.0.0.0:8000/index
> 
> has all links

### Login

> 0.0.0.0:8000/login -> ```register```
>
> login with identi number as account 
> if password wrong will display wrong
> if identity number wrong will display no user

### Register

> 0.0.0.0:8000/register
> needs 6 characters for password
> no strict for username
> the message shows after registered is the login account number


### Admin

> 0.0.0.0:8000/admin
>
> admin user name: ```root```
> 
> admin user password: ```qwer```
> 
> The users are in Accounts Table
>
> the ```User name``` are the full name of the user when register
>
> Identi number is the login account number. start with 1. auto increasing by 1

### Transfer
> input an account as payee
> if no account will remind user "no user"
> 
> transfer amount should not excees the user amount
> otherwise will display `you have no such money`

### Deposit
> deposit numerical value

### Withdraw
> deposit numerical value
> the value cannot excees the user amount
> otherwise will display `you have no such money`

### Statement

## config

[docker-compose with pycharm](https://www.jetbrains.com/help/pycharm/using-docker-compose-as-a-remote-interpreter.html#example)

## Error

### "GET /favicon.ico HTTP/1.1" 404

request by http default. purpose for icon setup when user click "bookmark this page???

> Only appear during demo step.
>
> When css/js setup it will disappear.
>
> > further setup:
> >
> >  Place it into ```/static/``` when the page load static resources 
> >
> > [see](https://stackoverflow.com/questions/9371378/warning-not-found-favicon-ico)



### CSS not support IE
