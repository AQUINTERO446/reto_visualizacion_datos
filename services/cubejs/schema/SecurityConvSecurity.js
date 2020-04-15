cube(`SecurityConvSecurity`, {
  sql: `SELECT * FROM public.security_conv_security`,
  
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

    theftsPersons: {
      sql: `thefts_persons`,
      type: `number`
    },

    theftsCommerce: {
      sql: `thefts_commerce`,
      type: `number`
    },

    personalInjuries: {
      sql: `personal_injuries`,
      type: `number`
    },

    homicides: {
      sql: `homicides`,
      type: `number`
    }
  }
});
