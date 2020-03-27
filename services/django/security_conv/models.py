from django.db import models
import datetime

class Security(models.Model):
    created_at = models.DateField(default=datetime.date.today)
    thefts_persons = models.IntegerField()
    thefts_commerce = models.IntegerField()
    personal_injuries = models.IntegerField()
    homicides = models.IntegerField()

class Coexistence(models.Model):
    created_at = models.DateField(default=datetime.date.today)
    contempts = models.IntegerField()
    establishments = models.IntegerField()
    underage = models.IntegerField()
    domestic_violence = models.IntegerField()
