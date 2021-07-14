cube(`JLINEITEM`, {
  sql: `SELECT * FROM "TPCH_SF1"."JLINEITEM"`,
  
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
    lineitem: {
      sql: `${CUBE}."LINEITEM"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
