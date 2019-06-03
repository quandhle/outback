# Outback Store
<img src="https://readme-screenshots.s3-us-west-1.amazonaws.com/outback1.png" width="33%" height="auto"> <img src="https://readme-screenshots.s3-us-west-1.amazonaws.com/outback2.png" width="33%" height="auto"> <img src="https://readme-screenshots.s3-us-west-1.amazonaws.com/outback3.png" width="33%" height="auto">

<a href="https://outback.quandhle.com/" target="_blank">outback.quandhle.com</a>
<br>Mobile/desktop responsive app store designed for climbing enthusiasts to find all their necessary gear to send and succeed

## App Features
- Record trip details while traveling
  - View world map and add pins to places user has visted
  - Keep track of budget expenses
  - Log notes and upload photos
  - View trip summary and timeline
- View previous trips
- Share trip details with family and friends through Facebook, Twitter, and Email
- Persistent user login

## Accomplishments
- Created a full scale application with front-end and back-end integration
- Technologies used:
   - React.js
   - Redux
   - PHP
   - Sass
   - Materialize

## Project Planning and Progression Management
- Click on the links below to view the project planning and progression tracking tools
   - <a href="https://www.meistertask.com/projects/d5wdruhifd/join/" target="_blank">Task management</a>
   - <a href="https://www.figma.com/file/Xmh37OwoBnlSgdptWpvYidkO/Myster-Travel?node-id=0%3A1" target="_blank">Wireframe planning</a>
   - <a href="https://dbdesigner.page.link/aRYkTggDqqMi98sE8" target="_blank">Database schema</a>

## Setup Instructions
This repo is built with React.js with Redux and PHP. Follow the below setup instructions to get started.
  1. Fork this repo
  2. Clone your forked copy of this repo
     - `git clone https://github.com/[your_username]/mystertravel.git`
  3. In the terminal, change directory into the newly cloned repo
     - navigate to the application folder `cd outback`
  4. Install dependencies
     - `npm install`
  5. Use MAMP, XAMPP, or a similar program to start your local Apache and MySQL servers
     - Point root directory to the /public
     - Set Apache port to the defined port in the proxy > target property found in the package.json file
     - Import the sql database into phpMyAdmin, or similar found in the public/api/data folder
  6. Back in the terminal, start your server:
     - npm start
  7. Open a browser and navigate to `localhost:[your port number]`

## Author
**Quan Le** (https://github.com/quandhle)
