# Financial Modeling Prep API Wrapper
[![CircleCI](https://circleci.com/gh/schardtbc/fmp-api-wrapper/tree/master.svg?style=svg)](https://circleci.com/gh/schardtbc/fmp-api-wrapper/tree/master)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) 
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

https://financialmodelingprep.com/developer/docs

# Installation

```{bash}
npm install "fmp-api-wrapper"
```

# Usage

```{javascript}

import { Fmp } from "fmp-api-wrapper"

// All function calls return a Promise
// get company profile
Fmp.profile("AAPL")

// get most recent stock price
Fmp.price("AAPL")

// get discounted cash flow for a stock
Fmp.dcf("AAPL")

// get income statement for a stock
Fmp.incomeStatement("AAPL")

// get balance sheet statement for a stock
Fmp.balanceSheetStatement("AAPL")

// get the cash flow statement for a stock
fmp.cashFlowStatement("AAPL")

// get the days most active stocks
Fmp.mostActive()

// get stocks with the days highest gains
Fmp.gainers()

// get stocks with the days worst performance
Fmp.losers()
```





