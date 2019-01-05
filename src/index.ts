import { keysToCamelCase, keysToSymbolProperty } from "./dataFcns";
import { fmpClient } from "./fmp";

export class Fmp {
  public static price(symbol: string) {
    return fmpClient(`/company/price/${symbol}`);
  }

  public static profile(symbol: string) {
    return fmpClient(`/company/profile/${symbol}`);
  }

  public static rating(symbol: string) {
    return fmpClient(`/company/rating/${symbol}`);
  }

  public static dcf(symbol: string) {
    return fmpClient(`/company/discounted-cash-flow/${symbol}`);
  }

  public static incomeStatement(symbol: string) {
    return fmpClient(`/financials/income-statement/${symbol}`).then(data =>
      keysToCamelCase(data)
    );
  }

  public static balanceSheetStatement(symbol: string) {
    return fmpClient(`/financials/balance-sheet-statement/${symbol}`).then(
      data => keysToCamelCase(data)
    );
  }

  public static cashFlowStatement(symbol: string) {
    return fmpClient(`/financials/cash-flow-statement/${symbol}`).then(data =>
      keysToCamelCase(data)
    );
  }

  public static mostActive() {
    return fmpClient(`/stock/actives`).then(data => keysToSymbolProperty(data));
  }

  public static gainers() {
    return fmpClient(`/stock/gainers`).then(data => keysToSymbolProperty(data));
  }

  public static losers() {
    return fmpClient(`/stock/gainers`).then(data => keysToSymbolProperty(data));
  }
}
