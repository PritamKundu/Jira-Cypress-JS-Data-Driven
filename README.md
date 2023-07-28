clone this repo and open terminal with root project directory and following the command step by step:
 
 
 #### System Installation tools:
 1. Node.JS
 2. npm
 3. VS Code (IDE)
 4. JDK
 5. Allure
 
 #### install the dependencies:

 ```bash
 npm init -y
 ```

 ```bash
 npm install cypress@10.10.0
 ```

 ```bash
 npm i cypress-xpath
 ```

  ```bash
 npm i node-xlsx
 ```

   ```bash
 npm i cypress-iframe
 ```

 #### Suite run: 

   ```bash
 npm run headless:report
 npm run dashboard:report
 ```

 ### Allure-Report:

   ```bash
  npm run allure:report
  ```

 #### Single run:

  ```bash
 npx cypress run --spec cypress/integration/*.js --env allure=true --browser chrome --headed
 ```

