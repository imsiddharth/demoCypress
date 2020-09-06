# Demo Functional UI Tests

<p>
  <a href="https://twitter.com/intent/follow?screen_name=mad_pandey"><img align="left" src="https://img.shields.io/twitter/follow/mad_pandey.svg?style=social&label=Follow%20@mad_pandey" alt="Follow on Twitter"></a>
<br />
</p>



| **CI Provider**  | **Status** |
| ------------- | ------------- |
| **Github Actions**  | ![DemoCypress](https://github.com/imsiddharth/demoCypress)|
| **Travis** | [[!Travis](https://travis-ci.org/imsiddharth/demoCypress.svg)](https://travis-ci.org/imsiddharth/demoCypress) |




| CI Provider  | Build Status | Time Taken(Approx) |
| ------------- | ------------- | ------------- |
| **Github Actions**  | [![GitHub Actions status](https://github.com/vishalm/behave_parallel_demo/workflows/CI/badge.svg)](https://launch-editor.github.com/actions?workflowID=CI&event=push&nwo=vishalm%2Fbehave_parallel_demo)| 40+ Sec [Github Status](https://launch-editor.github.com/actions?workflowID=CI&event=push&nwo=vishalm%2Fbehave_parallel_demo)|
| **Azure DevOps**  | [![Build Status](https://dev.azure.com/vishalmishra84/Test%20Project/_apis/build/status/vishalm.behave_parallel_demo?branchName=master)](https://dev.azure.com/vishalmishra84/Test%20Project/_build/latest?definitionId=2&branchName=master) | 31+ Sec [Azure Stats](https://dev.azure.com/vishalmishra84/Test%20Project/_build?definitionId=2&view=ms.vss-pipelineanalytics-web.new-build-definition-pipeline-analytics-view-cardmetrics)|
| **Travis** | [![Travis](https://travis-ci.org/vishalm/behave_parallel_demo.svg)](https://travis-ci.org/vishalm/behave_parallel_demo)      | 33+ Sec [Travis Status](http://scribu.net/travis-stats/#vishalm/behave_parallel_demo/master)|




### What I added
  * Added Travis Integration 
  * Added Github Actions 
  * Added one small test which is in the document example
  * To run on CI added docker support.
  * Documentation is insightful, please read before adopting
  * Quick setup work. 

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