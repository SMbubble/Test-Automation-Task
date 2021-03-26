# Test-Automation-Task
## Basic Overview

Test Automation suite to validate UI functionalities in Xeneta Demo and Career pages.
 Demo url - https://www.xeneta.com/demo 
 Career url - https://www.xeneta.com/careers

## Requirements

- Node.js - working with Node.js 14.* version
- NPM
- Cypress - working with 6.8.0 version.
- Visual studio code - working with 1.54.* version

## Install and Run

1. Clone the Github repository (https://github.com/SMbubble/Test-Automation-Task) in local machine.
2. Open the project folder in Visual Studio Code
3. Run 'npx cypress open' in the terminal to start the cypress test runner.
4. Select the test file(s) in the Test runner to execute the testcases.

## Test Cases:
/* Demo.spec.js */

1. Click on watch videos button and verify if correct page is being opened.
2. Fill and submit Group live demo - Sign up form with valid data.

/* Career.spec.js */

1. Verify the functionality of all the tabs unders Our Values section.
2. Verify the Global Tribe section and elements in each product cards.
3. Verify the panel toggle functionality for one of Open roles in the page.

## Test-suite Structure
In the Project folder > Cypress >

1. Integration folder contains the main test files (Demo.spec.js and Career.spec.js) with the test case
2. page-objects folder has the Page objects used to interact with AUT elements from the main test files .
3. fixtures folder has testdata for test case (if any used). 

```




