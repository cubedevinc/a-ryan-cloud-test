cube(`Orders`, {
  sql: `SELECT * FROM public.orders`,
  
  joins: {
    
  },
  preAggregations: {
    main: {
      measures: [Orders.number],
      dimensions: [Orders.status],
      timeDimension: Orders.completedAt,
      granularity: `day`
    }
  },
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt]
    },
    
    number: {
      sql: `number`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    completedAt: {
      sql: `completed_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
