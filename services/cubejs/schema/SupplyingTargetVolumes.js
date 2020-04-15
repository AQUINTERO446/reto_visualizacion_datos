cube(`SupplyingTargetVolumes`, {
  sql: `SELECT * FROM public.supplying_targetvolumes`,
  
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

    atlatinco: {
      sql: `atlatinco`,
      type: `number`
    },

    guajira: {
      sql: `guajira`,
      type: `number`
    },

    bolivar: {
      sql: `bolivar`,
      type: `number`
    },

    cesar: {
      sql: `cesar`,
      type: `number`
    },

    magdalena: {
      sql: `magdalena`,
      type: `number`
    },

    norteSantander: {
      sql: `norte_santander`,
      type: `number`
    },

    magdalenaMedio: {
      sql: `magdalena_medio`,
      type: `number`
    },

    nororienteAntioqueno: {
      sql: `nororiente_antioqueño`,
      type: `number`
    },

    provinciaGuanentina: {
      sql: `provincia_guanentina`,
      type: `number`
    }
  }
});
