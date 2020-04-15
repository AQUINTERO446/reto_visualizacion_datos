cube(`TrafficInjuries`, {
  sql: `SELECT * FROM public.traffic_injuries`,
  
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
    },

    pedestrians: {
      sql: `pedestrians`,
      type: `number`
    },

    bicyclist: {
      sql: `bicyclist`,
      type: `number`
    }
  }
});
