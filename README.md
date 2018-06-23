React chart app representing selections of profiles.

Simple composite chart that represents data of **Added**, **Removed** and **Selection size** segments from old and live data.

## Problem
- Support	existing chart to render real time data from api responses as deltas or full payloads.

## Assumption
- Chart component exists that support displaying only last month changes.

## Solution
- #### Assumption of existing chart compoonent architecture
  ![chart_stage_1](https://user-images.githubusercontent.com/14848432/41812349-e5f4f5bc-773e-11e8-8293-f2060db2cc0a.png)
  
  - Currently the chart renders only **Last month data**.
  - The data is fetched from an API.
  - **setChartData()** action is dispatched to **Reducer**.
  - **Reducer** sets the data to **Store**.
  - **Store** updates the **Component State** with new data.
  - Component **Renders** the chart from data.
  
- #### Extending existing chart compoonent architecture to support rendering real-time data.
  ![chart_stage_2](https://user-images.githubusercontent.com/14848432/41812982-7108f3a0-774a-11e8-9046-504b1bac51c4.png)
  
  - The data is fetched from an API (delta or Full payload).
  - **updateChateData()** action is dispatched to a middleware function - **parseData()** with the **payload** from API.
  - **parseData()** reads `current chart data` from **store**, updates `[modify / append]` to the current chart data and      returns.
  - **updateChateData()** now dispatchs **setChartData()** with `[new / modified]` chart data.
  - **setChartData()** action is dispatched to **Reducer**.
  - **Reducer** sets the data to **Store**.
  - **Store** updates the **Component State** with new data.
  - Component **Re-Renders** the chart from data. 


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

####  `npm run deploy`

The app will be deployed at [https://deepakkadarivel.github.io/liveChart](https://deepakkadarivel.github.io/liveChart/)
