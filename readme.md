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
  
- [ ] Transfer Logic
- [ ] Transfer CSS
- [ ] Deposit Form
- [ ] Deposit Logic
- [ ] Deposit CSS

- [ ] ATM SIMULATOR





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

### Register

> 0.0.0.0:8000/register


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


## config

[docker-compose with pycharm](https://www.jetbrains.com/help/pycharm/using-docker-compose-as-a-remote-interpreter.html#example)



## Error

"GET /favicon.ico HTTP/1.1" 404

request by http default. purpose for icon setup when user click "bookmark this page”

> Only appear during demo step.
>
> When css/js setup it will disappear.
>
> > further setup:
> >
> >  Place it into ```/static/``` when the page load static resources 
> >
> > [see](https://stackoverflow.com/questions/9371378/warning-not-found-favicon-ico)



