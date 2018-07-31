# eCommerce React on Rails

## Overview

This is my final project for WDI16 at General Assembly.

For this app, I decided to build an eCommerce website using React on the Front-end and Rails on the Back-end. The payment method is being processed with Stripe's API.

The user can add items to the cart. One in the cart they can edit the qty on each item and see the changes in real time. If the item quantity is zero, the item is automatically removed from the cart.

All these actions are being saved in the database, so the user can come back and finish they order later.

There is no interface for an admin yet, but the actions for full CRUD on the products exist on the backend. This allows the admin to create, update or delete products in store if desired.

The Stripe API is in charge of processing the payments. Currently, this version is in test mode, so it won't actually charge any card. But if the user wants to test the interface, they can use card number 4242 4242 4242 4242 and input an expiration date in the future. The code and the zip code can be any number.

This store is not real, and the products are not actually on sale. So please don't try to use your credit card (Nothing, will happen, and the info is encrypted but is still not a good idea).


### [Live eShopper site](https://wdi16-eshopper.herokuapp.com/)

## Technologies Used

* Posgresql
* Ruby on Rails
* React.js
* Styled Components
* SASS
* Semantic UI
* Alertify.js
* [Trello](https://trello.com/b/LbsO4LLY/ecommerce)

## Features

* Create orders
* Edit orders
* Update orders
* Delete orders
* Create Line Items
* Edit Line Items
* Update Line Items
* Delete Line Items
* Create products
* Edit Products
* Update Products
* Delete Products
* Proces Payments
.
<details>
<summary>Wireframe</summary>
<br>

![Image of Wireframe](https://github.com/Tilingo/eShopper/blob/master/public/images/wireframe1.jpg)

![Image of Wireframe](https://github.com/Tilingo/eShopper/blob/master/public/images/wireframe2.jpg)

</details>

<details>
<summary>ERD</summary>
<br>

![Image of ERD](https://github.com/Tilingo/eShopper/blob/master/public/images/ERD.jpg)

</details>

## Future Development

* Implement a User model to create accounts
* Improve the payment method on the backend to handle different amounts
