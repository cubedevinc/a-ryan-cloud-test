cube(`JSUPPLIER`, {
  sql: `SELECT * FROM "TPCH_SF1"."JSUPPLIER"`,
  
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
    supplier: {
      sql: `${CUBE}."SUPPLIER"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
