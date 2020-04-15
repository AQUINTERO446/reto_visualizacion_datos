cube(`SecurityConvCoexistence`, {
  sql: `SELECT * FROM public.security_conv_coexistence`,
  
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

    contempts: {
      sql: `contempts`,
      type: `number`
    },

    establishments: {
      sql: `establishments`,
      type: `number`
    },

    underage: {
      sql: `underage`,
      type: `number`
    },

    domestic_violence: {
      sql: `domestic_violence`,
      type: `number`
    }
  }
});
