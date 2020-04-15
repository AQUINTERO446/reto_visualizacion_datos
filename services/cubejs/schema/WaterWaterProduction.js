cube(`WaterWaterProduction`, {
  sql: `SELECT * FROM public.water_waterproduction`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt]
    },
    totalProduction: {
      sql: `${dailyProduction}`,
      type: `sum`
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

    plantCapacity: {
      sql: `plant_capacity`,
      type: `number`
    },

    flowTreated: {
      sql: `flow_treated`,
      type: `number`
    },

    flowDelivered: {
      sql: `flow_delivered`,
      type: `number`
    },

    dailyProduction: {
      sql: `daily_production`,
      type: `number`
    },

    consumptionPerCapita: {
      sql: `consumption_per_capita`,
      type: `number`
    }
  }
});
