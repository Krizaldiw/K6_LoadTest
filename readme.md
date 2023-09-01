# API Load Testing with K6

This application you can run on NODE JS

### Step by step
* Install Node JS
* Create directory your-jest-automation

```bash
mkdir my-test-project
```

* Install k6, k6-html-reporters

```bash
npm install k6 k6-html-reporter --save-dev
```

* Run Test

```bash
k6 run test test/endpointLoadTest.js
```

* NPM Install on terminal
* Corret k6 and k6-html-reporter after NPM Install has successfully install


## NOTE

1. Create a Test file in the ./test folder
2. Create a function if the request is always reused
3. Don't display the credentials in the test file, save them in the configuration
4. Don't push your project direct to master(production) but we have stage development --> master
5. Show Reporting load test at folder report
6. Don't forget to pull

## Contact

Name - @Krizaldiw - <muhkhalifrizaldiw@gmail.com>