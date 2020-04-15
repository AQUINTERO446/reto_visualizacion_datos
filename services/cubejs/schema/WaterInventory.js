cube(`WaterInventory`, {
  sql: `SELECT * FROM public.water_inventory`,
  
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

    coagultantAvailable: {
      sql: `coagultant_available`,
      type: `number`
    },

    coagulantEstimatedDuration: {
      sql: `coagulant_estimated_duration`,
      type: `number`
    },

    disinfectantAvailable: {
      sql: `disinfectant_available`,
      type: `number`
    },

    disinfectanEstimatedDuration: {
      sql: `disinfectan_estimated_duration`,
      type: `number`
    }
  }
});
