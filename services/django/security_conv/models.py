from django.db import models
from django.utils.timezone import now

class Security(models.Model):
    created_at = models.DateTimeField(default=now)
    thefts_persons = models.IntegerField()
    thefts_commerce = models.IntegerField()
    personal_injuries = models.IntegerField()
    homicides = models.IntegerField()

class Coexistence(models.Model):
    created_at = models.DateTimeField(default=now)
    contempts = models.IntegerField()
    establishments = models.IntegerField()
    underage = models.IntegerField()
    domestic_violence = models.IntegerField()
