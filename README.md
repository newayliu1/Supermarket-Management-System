[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Supermarket Management System

[Link to the system website](https://newayliu1.github.io/Supermarket-Management-System/)
[Back End API](https://github.com/newayliu1/SMS_Rails_API)

## Technologies Used

- Javascript
- HTML
- bootstrap
- css
- JQuery
- Ruby on Rails
- Handlebars

## Planing/Modeling

1. Design the ERD diagram and wireframe
2. build up the back end api first
2. Create html/css based on wireframe
3. Create button handlers in order to connect the egine with html.
4. work on authenication API connection
5. use handlerbars to display the response
6. debug
7. decorate user interface

## Development Story

The most difficulty part is having a proper ERD diagram for this project. The
relationship between Users and Products is many to many. Additionally, there are many attributes, data need to be stored for a product in my model. Thus, I was stuck
into the ERD for a whole day to come out a four-table database.

Since there are four tables in the database, the front end design has many forms and inputs for a user.

## Unsolved Problem
- decorate the user interface
- show the inventory's section while showing the expiration product

## WireFrame
[Teleport to My wireframe](http://imgur.com/1ltfr5u)

## ERD
[ERD](http://imgur.com/BivvM4d)

## User Story

- User is able to sign in, sign out, and sign up
- User is able to create product, inventory, and orders
- User is able to search products
- User is able to search the inventories, and orders by id
- User is able to update the price and section for an inventory
- User is able to delete inventory and order
- User is able to look up all the expiration orders
