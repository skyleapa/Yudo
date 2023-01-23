# nwHacks2023 **1st place** 🏆

Presenting Yudo! Our approach to innovating exercise with technology.

## Inspiration
Since the pandemic, millions of people worldwide have turned to online alternatives to replace public fitness facilities and other physical activities. At-home exercises have become widely acknowledged, and are even prescribed by physiotherapists (like the one who judged us in the competition!) but the problem is that there is no way of telling whether people are doing the exercises accurately and whether they notice potentially physically damaging bad habits they may have developed. Even now, those habits may continuously affect and damage their bodies if left unnoticed. That is why we created **Yudo**.

## What it does
Yudo is an exercise web app that uses **TensorFlow AI**, a custom-developed exercise detection algorithm, and **pose detection** to help users improve their form while doing various exercises. 

Once you open the web app, select your desired workout and Yudo will provide a quick exercise demo video. The closer your form matches the demo, the higher your accuracy score will be. After completing an exercise, Yudo will provide feedback generated via **ChatGPT** to help users identify and correct the discrepancies in their form.

## What we learned
- How to use TensorFlow AI and React
- Practical applications of mathematics in computer science algorithms

![image](https://user-images.githubusercontent.com/5387769/213974740-06054471-6993-4925-9dff-53178f03084b.png)
![image](https://user-images.githubusercontent.com/5387769/213974808-488857bd-acc3-4c24-85e6-4df582a77710.png)
![image](https://user-images.githubusercontent.com/5387769/213974874-08b26c7b-458c-45ad-8f69-e535ea032245.png)
<img width="439" alt="image" src="https://user-images.githubusercontent.com/5387769/213975268-86f0b5f0-3f95-45e5-bbb9-984bcffd9c3f.png">
![image](https://user-images.githubusercontent.com/5387769/213975363-fd40141a-60c8-4aec-bc3d-a99c39cce6bf.png)

## How we built it
We first developed the connection between **TensorFlow** and streaming Livestream Video via **BlazePose** and **JSON**. We used the video's data and sent it to TensorFlow, which returned back a JSON object of the different nodes and coordinates which we used to draw the nodes onto a 2D canvas that updates every single frame and projected this on top of the video element. The continuous flow of JSON data from Tensorflow helped create a series of data sets of what different planks forms would look like. We used our own created data sets, took the relative positions of the relevant nodes, and then created mathematical formulas which matched that of the data sets.

After a discussion with Sean, a MLH member, we decided to integrate OpenAI into our project by having it provide feedback based on how well your plank form is. We did so by utilizing the **ExpressJS** back-end to handle requests for the AI-response endpoint. In the process, we also used **Nodaemon**, a process for continuously restarting servers on code change, to help with our development. We also used **Axios** to send data back and forth between the front end and backend

The front end was designed using **Figma** and **Procreate** to create a framework that we could base our **React** components on. Since it was our first time using React and Tensorflow, it took a lot of trial and error to get CSS and HTML elements to work with our React components.

## Cloning

When you clone this do the following:
1. ```npm i``` in the server and client folders to install dependencies
2. use ```npm start``` in either folder to host the respective servers, front-end is at localhost:3000 and back-end is at localhost:5001
3. ```npm install -g nodemon``` to install nodemon if you are planning on forking and updating the back-end


## Challenges we ran into
- Learning and implementing TensorFlow AI and React for the first time during the hackathon
- Creating a mathematical algorithm that accurately measures the form of a user while performing a specific exercise
- Making visual elements appear and move smoothly on a live video feed

## Accomplishments that we're proud of
- This is our 2nd hackathon (except Darryl)
- Efficient and even work distribution between all team members
- Creation of our own data set to accurately model a specific exercise
- A visually aesthetic, mathematically accurate and working application!

## What's next for Yudo
- Implementation of more exercises
- Faster and more accurate live video feed and accuracy score calculations
- Provide live feedback during the duration of the exercise
- Integrate a database for users to save their accuracy scores and track their progress
