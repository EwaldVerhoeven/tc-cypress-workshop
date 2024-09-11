### Exercise 1 - First test
#### Assignment:
"Write a first test that (manually) logs in a (random) user, providing a username and password."
#### Bonus:
"Test that the user is indeed logged in (2 ways to do this)"
<br><br>
### Exercise 2 - Custom commands
#### Assignment:
"Use the code from exercise 1 to create a Cypress 'custom command' and refactor your 'first test' to use this command."
#### BONUS:
"Make us of the cy.session() api in your custom command to store session data."
<br><br>
### Exercise 3 - Hooks and fixtures
#### Assignment
"Automate the test script ('Testscript2.png') and use before/beforeEach/after/afterEach 'hooks' to make your test more efficient. Also (!important) make use of 'test data' by implementing the ```cy.fixtures api```. There are multiple ways of doing this. See what works (best) for you."
<br><br>
### Exercise 4 - Network requests
#### Assignment 1
"Add a POST request in your before/beforeEach hook to one of the endpoints. Test for its response code (200) and response body"
#### Assignment 2
"Spy on a GET request (sent by the front-end) to the '/api/builds' endpoint and assert the expected (200) status code".
#### Assignment 3
"Alter the response body (IE 'mock') from the previous assignment to set all 'skill levels' to there maximum value."
<br><br>
### Exercise 5 - POM (Page object model)
#### Assignment
"Implement the POM by adding 'pages' (page objects)"
#### BONUS
"Add an extra layer in your POM to abstract all 'actions' to be performed on your page objects (selectors). like ```MyPage.performTask(param1, param2?)``` instead of ```Mypage.myElement.should("be.visible").click()```"