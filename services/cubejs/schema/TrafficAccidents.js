cube(`TrafficAccidents`, {
  sql: `SELECT * FROM public.traffic_accidents`,
  
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

    transit: {
      sql: `transit`,
      type: `number`
    },

    motorcycle: {
      sql: `motorcycle`,
      type: `number`
    },

    car: {
      sql: `car`,
      type: `number`
    }
  }
});
