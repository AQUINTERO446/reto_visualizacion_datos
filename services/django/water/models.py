from django.db import models
from django.utils.timezone import now

class ReinstallationWaterService(models.Model):
    created_at = models.DateField(auto_now_add=True)
    disconnection = models.IntegerField()
    pending  = models.IntegerField()

class WaterSources(models.Model):
    LOCATION_CHOICES = (
        ("TON", "Tona"),
        ("RFR", "Rio Frío"),
        ("SUR", "Suratá"),
    )
    created_at = models.DateField(auto_now_add=True)
    location = models.CharField( 
        max_length = 20, 
        choices = LOCATION_CHOICES, 
        default = 'TON'
        ) 
    flow = models.IntegerField()
    turbidity = models.IntegerField()
    color = models.IntegerField()

class WaterProduction(models.Model):
    LOCATION_CHOICES = (
        ("FLO", "Floridablanca"),
        ("BOS", "Bosconia"),
        ("MOR", "Morrorico"),
        ("LFL", "La Flora"),
        ("TOT", "Total"),
    )
    created_at = models.DateField(auto_now_add=True)
    location = models.CharField( 
        max_length = 20, 
        choices = LOCATION_CHOICES, 
        default = 'TON'
        ) 
    plant_capacity = models.IntegerField()
    flow_treated = models.IntegerField()
    flow_delivered = models.IntegerField()
    daily_production = models.IntegerField()
    consumption_per_capita = models.IntegerField()

class Inventory(models.Model):
    LOCATION_CHOICES = (
        ("FLO", "Floridablanca"),
        ("BOS", "Bosconia"),
        ("MOR", "Morrorico"),
        ("LFL", "La Flora"),
    )
    created_at = models.DateField(auto_now_add=True)
    location = models.CharField( 
        max_length = 20, 
        choices = LOCATION_CHOICES, 
        default = 'TON'
        ) 
    coagultant_available = models.IntegerField()
    coagulant_estimated_duration = models.IntegerField()
    disinfectant_available = models.IntegerField()
    disinfectan_estimated_duration = models.IntegerField()

class DamageRate(models.Model):
    created_at = models.DateField(auto_now_add=True)
    parent_networks = models.IntegerField()
    rush = models.IntegerField()
