cube(`JCUSTOMER`, {
  sql: `SELECT * FROM "TPCH_SF1"."JCUSTOMER"`,
  
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
    customer: {
      sql: `${CUBE}."CUSTOMER"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
