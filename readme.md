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