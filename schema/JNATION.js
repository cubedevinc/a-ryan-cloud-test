cube(`JNATION`, {
  sql: `SELECT * FROM "TPCH_SF1"."JNATION"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
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
    nation: {
      sql: `${CUBE}."NATION"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
