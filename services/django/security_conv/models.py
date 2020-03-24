from django.db import models

class Security(models.Model):
    thefts_persons = models.IntegerField()
    thefts_commerce = models.IntegerField()
    personal_injuries = models.IntegerField()
    domestic_violence = models.IntegerField()
    homicides = models.IntegerField()

class Coexistence(models.Model):
    contempts = models.IntegerField()
    establishments = models.IntegerField()
    underage = models.IntegerField()
    domestic_violence = models.IntegerField()
