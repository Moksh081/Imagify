IMAGIFY

Imagify is a web application that allows users to log in and generate images from text descriptions using advanced AI. Each user receives 5 free credits upon registration to try out the image generation feature.

Features
-User Authentication: Login/Signup functionality for users.
-Free Credits: New users receive 5 free credits.
-AI-Powered Image Generation: Convert text descriptions into realistic images.
-Responsive Design: Fully optimized for desktop and mobile devices.

Tech Stack :

Frontend
-React.js
-Tailwind CSS
-Framer Motion (for animations)

Backend
-Node.js
-Express.js

Database
-MongoDB

Payment Gateway
-Razorpay (for purchasing additional credits)

Installation
Prerequisites
-Node.js installed on your machine.
-MongoDB set up locally or on the cloud (e.g., MongoDB Atlas).

Steps
Clone the Repository:

git clone https://github.com/your-username/imagify.git  
cd imagify
  
Install Dependencies:

npm install  
cd client  
npm install  
cd ..  


Set up Environment Variables:
Create a .env file in the root directory and add the following:

MONGO_URI=your_mongo_connection_string  
JWT_SECRET=your_jwt_secret  
RAZORPAY_KEY_ID=your_razorpay_key_id  
RAZORPAY_KEY_SECRET=your_razorpay_key_secret  
BACKEND_URL=http://localhost:4000  

Start the Application:

Start the backend server:

npm run server  

Start the frontend:

cd client  
npm start 
 
