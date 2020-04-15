cube(`TrafficSubpoena`, {
  sql: `SELECT * FROM public.traffic_subpoena`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },

    total_subpoena: {
      sql: `total_subpoena`,
      type: `number`
    },

    covid_subpoena: {
      sql: `covid_subpoena`,
      type: `number`
    }
  }
});
