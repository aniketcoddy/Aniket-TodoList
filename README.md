Todo List Webpage

This is a simple Todo List webpage built using React and Redux for state management. It allows users to add and remove tasks from their todo list.

Components :

Todo Component
Description: This component provides an input field for users to enter new tasks. Tasks can be added either by pressing the Enter key or by clicking the "Add" button.
Props: None
State: Manages the input value for adding new tasks.
Actions:
handleOnChange: Updates the state with the input value.
handleKeyDown: Triggers the addition of a new task when the Enter key is pressed.
addNewUser: Dispatches an action to add a new task to the Redux store.


List Component
Description: This component displays the list of tasks added by the user. Each task can be deleted individually by clicking on the delete icon.
Props: None
State: None
Actions:
deleteUser: Dispatches an action to remove a task from the Redux store.


Redux Store
Description: The Redux store manages the state of the application, including the list of tasks.
Reducer: userSlice.reducer manages the state of the user's todo list.
Actions:
addUser: Action creator to add a new task to the list.
removeUser: Action creator to remove a task from the list.


Usage
Clone this repository to your local machine.
Install dependencies using npm install.
Start the development server using npm start.
Open your browser and navigate to http://localhost:3000 to view the Todo List webpage.


Dependencies
React
React Redux
Redux Toolkit