# Mobile Search Tech Test

## Getting started

This is a React Native project.

Building on iOS requires a macOS development environment.

If you have not set up a React Native development environment before on your machine, please follow the instructions for 'React Native Cli Quickstart': https://reactnative.dev/docs/environment-setup

### Running this project

Download and install all necessary packages:

    npm install

Install pods:

    npm pod install

Start the server:

    npm start

Build on your open iOS simulator:

    npm run ios

Build on your open android simulator:

    npm run android

### Testing and linting

Check your code with eslint:

    npm run lint

Autoformat code using prettier:

    npm run format

Run your jest tests:

    npm run test

&nbsp;

## The exercise

**Goal:** Build a movie search page.

**Duration:** 4hr (after set up is complete)

**Description:** he purpose of this technical is to attain an understanding of the technical capabilities of a candidate through the creation of a reasonably contrived yet

**Constraints:** - React Native app that consists of two screens - **Screen 1** (default screen as you open the app) will allow users to search for movies. By default no search term will have been input so the screen should show an empty state to signify the user should search. Calling the search API will return 10 results per page. There should be an infinite scroll in place to allow loading of more results as the user scrolls.

- **Screen 2** will be presented when a user taps into a specific movie from screen 1. Upon doing so you will need to call the second API to retrieve the specific movie details. You'll display the movie's title, image, release date, rating, and the year it was produced. If you have time and would like to display any additional metadata, feel free to do so.

- Tests to cover the core aspect of the app

**Technical Implementation Thoughts:**

1.  Implemented react navigation for two screens.
2.  I opted for a simple clean architecture with react context hook for global state management and a provider to abstract logic from the screen..
3.  I separated components that can possibly be reused in other screens via props to minimise code bloating and maximise efficiency.
4.  I used a Flatlist to render the infinite list of movie issues.
5.  Implemented Tests.
6.  Implemented Accessibility.
7.  Responsive interface to accommodate various screen sizes and devices.

**Simulation video for ios and an android tablet available in the link below:**
https://drive.google.com/drive/folders/1WM-K6scA0stAMumLDsijWNkInO-KFNF7?usp=sharing
