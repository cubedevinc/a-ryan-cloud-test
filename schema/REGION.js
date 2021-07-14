cube(`REGION`, {
  sql: `SELECT * FROM "TPCH_SF1"."REGION"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [rName]
    }
  },
  
  dimensions: {
    rName: {
      sql: `${CUBE}."R_NAME"`,
      type: `string`
    },
    
    rComment: {
      sql: `${CUBE}."R_COMMENT"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
