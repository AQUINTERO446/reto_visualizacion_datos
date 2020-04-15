cube(`WaterReinstallationWaterService`, {
  sql: `SELECT * FROM public.water_reinstallationwaterservice`,
  
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

    pending: {
      sql: `pending`,
      type: `number`
    },

    disconnection: {
      sql: `disconnection`,
      type: `number`
    }
  }
});
