# Mobile tech test

## Getting started

This is a React Native project.

Building on iOS requires a macOS development environment.

If you do not own a MacBook that is completely fine. However, this means that you will only be able to build on android. Please let us know - we will ensure to only review your test using an android simulator.

If you have not set up a React Native development environment before on your machine, please follow the instructions for 'React Native Cli Quickstart': https://reactnative.dev/docs/environment-setup

Note: Xcode is a 12.6 GB download, and Android Studio is 1 GB, so this may take a while to install.

We recommend using Ruby 3.0.1 and JDK 11, or newer.

### Running this project

Download and install all necessary packages:

    npm install

Install pods:

    npm postinstall

Start the server:

    npm start

Build on your open iOS simulator:

    npm run ios

Build on your open android simulator:

    npm run android

### Testing and linting

Check your code with eslint:

    npm run lint

Autoformat your code using prettier:

    npm run format

Run your jest tests:

    npm run test

&nbsp;

## The exercise

**Goal:** Build a magazine home page.

**Duration:** 1-2hr (after set up is complete)

**Description:** The screen must have the title "Magazine issues". We would like you to display the data contained in data.json. Between the title and the data, you should create 4 toggles which filter based on cover name. The default is that all 4 are switched on. Switching off a toggle should hide all instances of that issue type. Switching it back on should bring them back. We would like you to include a footnote at the bottom "The full archive is available to Which? members". The whole screen should be scrollable, not just the data.

**Constraints:** You should consider mobile portrait, mobile landscape and tablet devices. Mobile portrait will have one item per row. Mobile landscape will have 2 items per row. Tablet will have 3 items per row with the content centered. The content should not touch the edge of the screen. You should take care to account for phone notches.

You do not need to use any additional libraries but if you do, you should be able to explain the reasons for your choices in this Readme file.

**Third party package added and why:**
To identify tablet devices I opted for the popular react native library react-native-device-info. The library is still actively well maintained and supported and have been my go to in several successful user applications.
I am aware that it is possible to write a custom function to possibly infer the device type, example is using the device PixelRatio function from react-native but they fail in some devices. An example is this blog post https://www.folkstalk.com/tech/react-native-check-if-tablet-or-screen-in-inches-solutions/ , in the blog they pushed a theory that if the Pixel Ratio of a device is less than 1.6 then it's a tablet device, I found this to be false while testing on a Google nexus 9 tablet emulator with resolution of 2048 x 1536 pixels, 288 PPI.
In the end, it felt right to trust a known package that is dedicated to this specific use case than writing custom functions that have not been tested extensively for the sake of not using a third party package.

**Technical Implementation Thoughts:**

1.  I think this is a good test that focuses on actual use case scenarios that a developer might encounter while working on the Witch app, especially relating to the magazine section that is periodically updated each month.
2.  I opted for a simple clean architecture with react context hook for global state management and a provider to abstract logic from the screen. This solution can easily be reused in other screens if the app had navigation and the extra screens are within the provider.
3.  I seperated components that can possibly be reused in other screens via props to minimise code bloating and maximise efficiency.
4.  I used a Flatlist to render the list of magazine issues, my intention was to use Flashlist by shopify( https://shopify.github.io/flash-list/) since it offers a more streamlined and efficient way to render lists but that would have meant adding an extra package and given that the data is static with a relatively small size, there will be no performance concerns for the purpose of this test.
5.  My approach to development has always been a mixture of test driven and component driven implementation which I demonstrated throughout.
6.  I left comments in the code to explain my thought process during the implementation, looking forward to your feedback, thanks for a good test.

We are not expecting you to include navigation elements as part of this test.

We would like you to use typescript if possible and update the unit tests to reflect your changes.

**Criteria for assessment:**

-   Project layout/structure
-   Coding style, i.e. your approach not whether you use semicolons or not ;)
-   Your approach to unit testing/TDD
-   Maintainability and extensibility
-   Use of responsive design
-   Accessibility
-   Naming conventions used
-   Meeting the requirements

The test won’t be assessed on design at all, so don’t worry how it looks.

Please update this Readme with justfications for any key decisions on your approach and style.
