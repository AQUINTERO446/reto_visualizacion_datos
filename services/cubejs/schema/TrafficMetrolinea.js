cube(`TrafficMetrolinea`, {
  sql: `SELECT * FROM public.traffic_metrolinea`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt]
    },

    countLastWeekPassengers: {
      type: `count`,
      sql: `passengers`,
      drillMembers: [id, createdAt, passengers],
      filters: [
        { sql: `${CUBE}.created_at = (now() - interval '7 days')` }
      ]
    },
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

    passengers: {
      sql: `passengers`,
      type: `number`
    }
  }
});
