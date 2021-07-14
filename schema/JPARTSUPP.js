cube(`JPARTSUPP`, {
  sql: `SELECT * FROM "TPCH_SF1"."JPARTSUPP"`,
  
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
    partsupp: {
      sql: `${CUBE}."PARTSUPP"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
