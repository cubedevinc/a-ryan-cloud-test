cube(`PART`, {
  sql: `SELECT * FROM "TPCH_SF1"."PART"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [pName]
    },
    
    pRetailprice: {
      sql: `${CUBE}."P_RETAILPRICE"`,
      type: `sum`
    }
  },
  
  dimensions: {
    pBrand: {
      sql: `${CUBE}."P_BRAND"`,
      type: `string`
    },
    
    pMfgr: {
      sql: `${CUBE}."P_MFGR"`,
      type: `string`
    },
    
    pType: {
      sql: `${CUBE}."P_TYPE"`,
      type: `string`
    },
    
    pComment: {
      sql: `${CUBE}."P_COMMENT"`,
      type: `string`
    },
    
    pName: {
      sql: `${CUBE}."P_NAME"`,
      type: `string`
    },
    
    pContainer: {
      sql: `${CUBE}."P_CONTAINER"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
