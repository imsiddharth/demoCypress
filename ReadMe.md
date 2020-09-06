# Demo Functional UI Tests

### Summary
This directory contains the UI Tests for front-end projects, these tests are written in nodejs using [cypress.io](https://www.cypress.io) and [mocha](https://mochajs.org/) test framework.

### Test approach 
We try to minimise the number of e2e tests that we have, as by nature these are slow, due to that it's flaky. Given the majority of Blackthornrx pages are with limited functionality it is important to ***focus on core functional areas/user journeys only***.


### Wait Strategy

### Installation
You should have Node.js installed. If you don't have Node installed, we recommend installing NVM to assist managing multiple active Node.js versions.
Blackthornrx recommended version is `10+`.
    
Once node is installed, execute:   

    npm install

### How do I run the tests on my local machine?

To Test on UI:
 
    npm run cypress

To Test on headless:
 
    npm test


### Run Single feature, or test
During test development you may wish to execute a single test or spec. This should not be handled via the package.json. It should be done so via commandline. 

    npm run test --spec spec_name_with_path