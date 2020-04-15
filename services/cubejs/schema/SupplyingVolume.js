cube(`SupplyingVolume`, {
  sql: `SELECT * FROM public.supplying_volume`,
  
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

    entry: {
      sql: `entry`,
      type: `number`
    },

    firstOut: {
      sql: `first_out`,
      type: `number`
    },

    secondOut: {
      sql: `second_out`,
      type: `number`
    },

    collected: {
      sql: `collected`,
      type: `number`
    }
  }
});
