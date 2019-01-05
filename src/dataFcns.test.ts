import {
  fmpResponseToJSON,
  keysToCamelCase,
  keysToSymbolProperty,
  renameKeysWith,
  toCamelCase
} from "./dataFcns";

test("fmpResponseToJSON strips html tags", () => {
  const res = '<pre>{ "AAPL": { "price": 146.2} }</pre>';
  expect(fmpResponseToJSON(res)).toEqual(
    expect.objectContaining({
      AAPL: {
        price: expect.any(Number)
      }
    })
  );
});

test("keysToSymbolProperty works", () => {
  const res = JSON.parse(
    '{ "AAPL": { "price": 146.2},"WDC": { "price": 34.32}}'
  );
  expect(keysToSymbolProperty(res)).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        symbol: "AAPL"
      })
    ])
  );
});

test("toCamelCase works", () => {
  expect(toCamelCase("this is that")).toEqual("thisIsThat");
});

test("renameKeys called with string returns the string", () => {
  expect(renameKeysWith("this and that", toCamelCase, 1, 1)).toEqual(
    "this and that"
  );
});

test("renameKeys", () => {
  const res = { "this or that": { price: 146.2 } };
  expect(renameKeysWith(res, toCamelCase)).toEqual(
    expect.objectContaining({
      thisOrThat: {
        price: expect.any(Number)
      }
    })
  );
});

test("renameKeys embedded key using default func params", () => {
  const res = { "this or that": { "stock price": 146.2 } };
  expect(renameKeysWith(res, toCamelCase, 1, 2)).toEqual(
    expect.objectContaining({
      "this or that": {
        stockPrice: expect.any(Number)
      }
    })
  );
});

test("renameKeys embedded key 1 deep", () => {
  const res = { "this or that": { "stock price": 146.2 } };
  expect(renameKeysWith(res, toCamelCase, 1, 1)).toEqual(
    expect.objectContaining({
      thisOrThat: {
        "stock price": expect.any(Number)
      }
    })
  );
});

test("renameKeys embedded key 3 levels deep", () => {
  const res = {
    "this or that": {
      "day spread": { "day high": 150.0, "day low": 123.0 },
      "stock price": 146.2
    }
  };
  expect(renameKeysWith(res, toCamelCase, 1, 3)).toEqual(
    expect.objectContaining({
      "this or that": {
        "day spread": {
          dayHigh: expect.any(Number),
          dayLow: expect.any(Number)
        },
        "stock price": expect.any(Number)
      }
    })
  );
});

test("keysToCamelCase", () => {
  const res = {
    "this or that": {
      "day spread": { "day high": 150.0, "day low": 123.0 },
      "stock price": 146.2
    }
  };
  expect(keysToCamelCase(res)).toEqual(
    expect.objectContaining({
      "this or that": {
        daySpread: {
          "day high": expect.any(Number),
          "day low": expect.any(Number)
        },
        stockPrice: expect.any(Number)
      }
    })
  );
});
