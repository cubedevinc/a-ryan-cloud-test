cube(`PARTSUPP`, {
  sql: `SELECT * FROM "TPCH_SF1"."PARTSUPP"`,
  
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
    },
    
    psAvailqty: {
      sql: `${CUBE}."PS_AVAILQTY"`,
      type: `sum`
    },
    
    psSupplycost: {
      sql: `${CUBE}."PS_SUPPLYCOST"`,
      type: `sum`
    }
  },
  
  dimensions: {
    psComment: {
      sql: `${CUBE}."PS_COMMENT"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
