/**
 * @jest-environment node
 */

import { Fmp } from "./index";

test("Apple Stock price works with async await", async () => {
  const tmp = await Fmp.price("AAPL");
  expect(tmp).toEqual(
    expect.objectContaining({
      AAPL: {
        price: expect.any(Number)
      }
    })
  );
});

test("Apple Stock dcf works with async await", async () => {
  const tmp = await Fmp.dcf("AAPL");
  expect(tmp).toEqual(
    expect.objectContaining({
      AAPL: {
        DCF: expect.any(Number)
      }
    })
  );
});

test("Apple Stock rating() works with async await", async () => {
  const tmp = await Fmp.rating("AAPL");
  expect(tmp).toEqual(
    expect.objectContaining({
      AAPL: {
        rating: expect.any(Number)
      }
    })
  );
});

test("Apple Stock profile() works with async await", async () => {
  const tmp = await Fmp.profile("AAPL");
  expect(tmp).toEqual(
    expect.objectContaining({
      AAPL: expect.objectContaining({
        CEO: expect.any(String)
      })
    })
  );
});

test("Apple Stock incomeStatement() works with async await", async () => {
  const tmp = await Fmp.incomeStatement("AAPL");
  expect(tmp).toEqual(
    expect.objectContaining({
      AAPL: expect.objectContaining({
        costOfRevenue: expect.any(Object)
      })
    })
  );
});

test("Apple Stock cashFlowStatement() works with async await", async () => {
  const tmp = await Fmp.cashFlowStatement("AAPL");
  expect(tmp).toEqual(
    expect.objectContaining({
      AAPL: expect.objectContaining({
        accountsReceivable: expect.any(Object)
      })
    })
  );
});

test("Apple Stock balanceSheetStatement() works with async await", async () => {
  const tmp = await Fmp.balanceSheetStatement("AAPL");
  expect(tmp).toEqual(
    expect.objectContaining({
      AAPL: expect.objectContaining({
        accumulatedDepreciation: expect.any(Object)
      })
    })
  );
});

test("gainers() works with async await", async () => {
  const tmp = await Fmp.gainers();
  expect(tmp).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        symbol: expect.any(String)
      })
    ])
  );
});

test("losers() works with async await", async () => {
  const tmp = await Fmp.losers();
  expect(tmp).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        symbol: expect.any(String)
      })
    ])
  );
});

test("actives() works with async await", async () => {
  const tmp = await Fmp.mostActive();
  expect(tmp).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        symbol: expect.any(String)
      })
    ])
  );
});
