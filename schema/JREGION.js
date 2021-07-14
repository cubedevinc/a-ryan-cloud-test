cube(`JREGION`, {
  sql: `SELECT * FROM "TPCH_SF1"."JREGION"`,
  
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
    region: {
      sql: `${CUBE}."REGION"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
