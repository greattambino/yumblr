# Schema Information

## categories
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
category     | string    | not null
retaurant_id | integer   | not null, foreign key (references restaurants), indexed

## fooditems
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
name         | string    | not null
price        | integer   | not null
image_url    | string    | not null
retaurant_id | integer   | not null, foreign key (references restaurants), indexed

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
fooditem_id | integer   | not null, foreign key (references fooditems), indexed
liker_id    | integer   | not null, foreign key (references users), indexed

## restaurant_categories
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
category_id  | integer   | not null, foreign key (references category), indexed
retaurant_id | integer   | not null, foreign key (references restaurants), indexed

## restaurants
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
description     | string    |
address         | string    | not null, uniqueness by zip code
city            | string    | not null
state           | string    | not null, length: maximum: 2
zip_code        | integer   | not null, length: minimum: 5
phone_number    | string    |
hours           | string    |
url             | string    |
category_id     | integer   | not null, foreign key (references categories), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
first_name      | string    | not null, indexed
last_name       | string    | not null, indexed
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Bonus: restaurants
column name     | data type | details
----------------|-----------|-----------------------
price_rating    | integer   | not null, between 1-5
review_rating   | integer   | not null, between 1-5
lat             | integer   | not null
lng             | integer   | not null

## Bonus: users
column name     | data type | details
----------------|-----------|-----------------------
avatar          | string    |
default_city    | string    |
