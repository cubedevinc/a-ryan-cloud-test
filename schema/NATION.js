cube(`NATION`, {
  sql: `SELECT * FROM "TPCH_SF1"."NATION"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {

  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [nName]
    }
  },

  dimensions: {
    nComment: {
      sql: `${CUBE}."N_COMMENT"`,
      type: `string`
    },

    nName: {
      sql: `${CUBE}."N_NAME"`,
      type: `string`
    }
  },

  dataSource: `default`
});
