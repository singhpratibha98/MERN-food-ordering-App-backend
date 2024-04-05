<h1>Food Ordering App</h1>
Implemented the Rest API for the backend in which i have implemented the user profile API, Login API, Register API, etc

<h1>API Template</h1>
<h3>Description</h3>
There is an list of API of an food ordering App.

<h3>Base URL</h3>
The base URL for API request is :-
<h3><b>1) User Route(get user, create user , update user</b></h3>
http://localhost:10000/api/my/user

<h3><b>2) My Restaurant Route</b></h3>
http://localhost:10000/api/my/restaurant

<h3><b>3) Restaurant Route</b></h3>
http://localhost:10000/api/restaurant

<h3><b>4) Order Route</b></h3>
http://localhost:10000/api/order

<h3><b>5) health message Route</b></h3>
http://localhost:10000/health

<h3><b>6) checkout API</b></h3>
http://localhost:10000/api/order/checkout/webhook

<h3>End Points</h3>
The End Points of API is :-
<h3><b>User API</b></h3>
<h4>get user</h4>
GET/

<h4>Create User</h4>
POST/

<h4>Update User</h4>
PUt/

<h3><b>My Restaurant Route</b></h3>
<h4>get my restaurant</h4>
GET/

<h4>get my restaurant Order</h4>
GET/order

<h4>update order Status</h4>
PATCH/order/:orderId/status

<h4>Create my restaurant</h4>
POST/

<h4>Update my restaurant</h4>
PUT/

<h3><b>Restaurant Route</b></h3>
<h4>get restaurant</h4>
GET/:restaurantId

<h4>Search Restaurant</h4>
GET/search/:city

<h3><b>Order Route</b></h4>
<h4>get my order</h4>
GET/

<h4>Create checkout session</h4>
POST/checkout/create-checkout-session

<h4>Stripe webhook handler</h4>
POST/checkout/webhook
