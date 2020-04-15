cube(`WaterWaterSources`, {
  sql: `SELECT * FROM public.water_watersources`,
  
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
    
    location: {
      sql: `location`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },

    location: {
      sql: `passengers`,
      type: `string`
    },

    flow: {
      sql: `flow`,
      type: `number`
    },

    turbidity: {
      sql: `turbidity`,
      type: `number`
    },

    color: {
      sql: `color`,
      type: `number`
    }
  }
});
