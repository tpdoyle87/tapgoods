# Feel the Swanson
  Feel the swanson is an app that allows you to grab random Ron Swanson quotes and rate them.
## Technical
Ruby version: 2.4.4
Rails version: 5.2.2
React version: 16.8.6
## Built with
  Feel the Swanson was built using a Rails back end and React front end. Using a Redux-saga for api calls and storage. React Toastify for handling errors.
  Authentication is handled by Rails using devise. You are only able to vote once per quote and are only allowed to vote once logged in.
## Additional Considerations
  The navbar and login are not using react in this current version (limited the build to 10 hours). This could be handled by building a react navbar component that looks at the state to see if there is a current user or not.
## Color Theme
  This runs a basic gray scale color theme except for the buttons. the buttons all use the parks and recreation color theme.
## See it Live
  **https://doug-tapgoods.herokuapp.com/**
## Installation
  first lets clone the repository
  ssh
  ```bash
    git clone git@github.com:tpdoyle87/tapgoods.git
  ```
  https
  ```bash
    git clone https://github.com/tpdoyle87/tapgoods.git
  ```
  Now that we have the project lets get into it
  ```bash
    cd tapgoods
  ```
  Now we will get it ready to run
  ```bash
    bundle
  ```
  ```bash
    yarn
  ```
  Now we should ahve all the packages that we need lets go ahead and get the database ready
  ```bash
    rails db:migrate db:seed
  ```
  With all the above steps completed you should now be able to run the project
  ```bash
    rails s
  ```
  That's it, I hope you enjoy Ron Swanson quotes!
