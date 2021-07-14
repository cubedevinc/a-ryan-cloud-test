cube(`JORDERS`, {
  sql: `SELECT * FROM "SNOWFLAKE_SAMPLE_DATA"."TPCH_SF100"."ORDERS"`,

  preAggregations: {
    benchmarkPreaggregation: {
      measures: [count],
      dimensions: [customerKey],
      timeDimension: date,
      granularity: `day`
    }
  },

  joins: {

  },

  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },

  dimensions: {
    date: {
      sql: `${CUBE}."O_ORDERDATE"`,
      type: `time`
    },

    customerKey: {
      sql: `${CUBE}."O_CUSTKEY"`,
      type: `number`
    }
  },

  dataSource: `default`
});
