cube(`LINEITEM`, {
  sql: `SELECT * FROM "TPCH_SF1"."LINEITEM"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [lReceiptdate, lCommitdate, lShipdate]
    },
    
    lDiscount: {
      sql: `${CUBE}."L_DISCOUNT"`,
      type: `sum`
    },
    
    lQuantity: {
      sql: `${CUBE}."L_QUANTITY"`,
      type: `sum`
    },
    
    lLinenumber: {
      sql: `${CUBE}."L_LINENUMBER"`,
      type: `sum`
    },
    
    lExtendedprice: {
      sql: `${CUBE}."L_EXTENDEDPRICE"`,
      type: `sum`
    }
  },
  
  dimensions: {
    lReturnflag: {
      sql: `${CUBE}."L_RETURNFLAG"`,
      type: `string`
    },
    
    lLinestatus: {
      sql: `${CUBE}."L_LINESTATUS"`,
      type: `string`
    },
    
    lShipinstruct: {
      sql: `${CUBE}."L_SHIPINSTRUCT"`,
      type: `string`
    },
    
    lShipmode: {
      sql: `${CUBE}."L_SHIPMODE"`,
      type: `string`
    },
    
    lComment: {
      sql: `${CUBE}."L_COMMENT"`,
      type: `string`
    },
    
    lReceiptdate: {
      sql: `${CUBE}."L_RECEIPTDATE"`,
      type: `time`
    },
    
    lCommitdate: {
      sql: `${CUBE}."L_COMMITDATE"`,
      type: `time`
    },
    
    lShipdate: {
      sql: `${CUBE}."L_SHIPDATE"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
