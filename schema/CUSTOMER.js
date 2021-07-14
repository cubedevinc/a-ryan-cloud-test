cube(`CUSTOMER`, {
  sql: `SELECT * FROM "TPCH_SF1"."CUSTOMER"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [cName]
    }
  },
  
  dimensions: {
    cName: {
      sql: `${CUBE}."C_NAME"`,
      type: `string`
    },
    
    cComment: {
      sql: `${CUBE}."C_COMMENT"`,
      type: `string`
    },
    
    cMktsegment: {
      sql: `${CUBE}."C_MKTSEGMENT"`,
      type: `string`
    },
    
    cPhone: {
      sql: `${CUBE}."C_PHONE"`,
      type: `string`
    },
    
    cAddress: {
      sql: `${CUBE}."C_ADDRESS"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
