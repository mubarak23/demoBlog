Get Start

1. clone the project
2. run npm install
3. setup your postgres DB and seup your .env file with following variables
   LOCALHOST_DB_CONNECTION=postgres
   LOCALHOST_HOSTNAME=
   LOCALHOST_DB_NAME=
   LOCALHOST_USERNAME=
   LOCALHOST_PASSWORD=
   LOCALHOST_PORT=5432
   DIALECT=postgres

4. npx sequelize-cli db:migrate

5. follow the route set and test each of the endpoint

6. the follow are the enpoints, their payload and response
   A. create a post
   /demo/v1/posts/create -- POST Request
   payload: {
   "body":"Demo Account ",
   "title": "Test Delete resource",
   "createdBy": "demo_account",
   "imageUrl": "/demo/v1/posts/delete"
   }
   B. /demo/v1/posts/paginate -- GET Request
   Response
   C. /demo/v1/posts/all --- GET Request

   D. /demo/v1/post/{post_id} -- GET Request

   E. /demo/v1/post/update -- PATCH Request
   Payload: {
   "id": 2,
   "title": "anything",
   "body": "Demo body, Demo Account Everything is Good From here",
   "imageUrl": "/demo/v1/posts/create",
   "createdBy": "demo"
   }

   F. /demo/v1/post/delete/{post_id} --- DELETE Request

   G. /demo/v1/comment/add
   Payload: {
   "body":"Another Test for Comment on Post ",
   "post_id": 2,
   "commentBy": "Owner"
   }

   H. /demo/v1/comment/single -- POST Request
   Payload: {
   "id": 3,
   "post_id": 2
   }

   I . demo/v1/comment/delete/{comment_id}/{post_id} -- GET Request

deploy APIs on heroku : http://glacial-citadel-42719.herokuapp.com/
