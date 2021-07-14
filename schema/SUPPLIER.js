cube(`SUPPLIER`, {
  sql: `SELECT * FROM "TPCH_SF1"."SUPPLIER"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [sName]
    }
  },
  
  dimensions: {
    sAddress: {
      sql: `${CUBE}."S_ADDRESS"`,
      type: `string`
    },
    
    sName: {
      sql: `${CUBE}."S_NAME"`,
      type: `string`
    },
    
    sPhone: {
      sql: `${CUBE}."S_PHONE"`,
      type: `string`
    },
    
    sComment: {
      sql: `${CUBE}."S_COMMENT"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
