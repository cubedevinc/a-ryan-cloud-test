//const SnowflakeDriver = require('@cubejs-backend/snowflake-driver');

module.exports = {
/*
  queryTransformer: (query, { securityContext }) => {
  const { team } = securityContext;
  if (team.id) {
    query.filters.push({
      member: 'Events.teamId',
      operator: 'equals',
      values: [team.id],
    });
  }
  return query;
},
*/
/*
  scheduledRefreshContexts: async () => [
    {
      securityContext: {
        tenantId: 'TPCH_SF1',
      },
    },
  ],
  contextToAppId: ({ securityContext }) =>
  `CUBEJS_APP_${securityContext.tenantId}`,
  preAggregationsSchema: ({ securityContext }) =>
  `pre_aggregations_${securityContext.tenantId}`
*/
  /*
  driverFactory: () =>
    new SnowflakeDriver({
      readOnly: true,
    }),
    */
};
