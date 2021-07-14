cube(`JPART`, {
  sql: `SELECT * FROM "TPCH_SF1"."JPART"`,
  
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
    part: {
      sql: `${CUBE}."PART"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
