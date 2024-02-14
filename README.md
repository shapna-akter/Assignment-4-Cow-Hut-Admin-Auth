
## Application Routes

## Main part

<hr/>

#### Auth (User)

api/v1/auth/login (post)

api/v1/auth/signup (post)

api/v1/auth/refresh-token (post)

#### Auth (Admin)

api/v1/admins/create-admin (post)

api/v1/admins/login (post)

#### User

only admin can access the users api

api/v1/api/v1/users/ (64ab4eb6002a381a892f0a5a admin id to get all the users need to use admin token from the client side)

api/v1/api/v1/users/64ab4e1b002a381a892f0a56 (get Single user)

api/v1/api/v1/users/64ab4e1b002a381a892f0a56 ( update single user)

api/v1/api/v1/users/64ab4f81002a381a892f0a61 ( delete user)

### Cows

api/v1/api/v1/cows/ (post)

api/v1/api/v1/cows/ (get all)

api/v1/api/v1/cows/64ab505a06a1d8953225fec4 (single get)

api/v1/api/v1/cows/64ab505a06a1d8953225fec4 (patch)

api/v1/api/v1/cows/64ab505a06a1d8953225fec4 (delete)

### Orders

api/v1/api/v1/orsers (post)

api/v1/api/v1/orsers (get)

## Bonus Part

<hr/>

### Admin

api/v1/api/v1/admins/create-admin

### My Profile

api/v1/api/v1/users/my-profile (get)

api/v1/api/v1/users/my-profile (patch)

### Order

api/v1/api/v1/orders/64ab50c206a1d8953225fecc (get)
