from django.db import models
from django.utils.timezone import now

class Metrolinea(models.Model):
    created_at = models.DateTimeField(default=now)
    passengers = models.IntegerField()

class Subpoena(models.Model):
    created_at = models.DateTimeField(default=now)
    total_subpoena = models.IntegerField()
    covid_subpoena = models.IntegerField()

class Accidents(models.Model):
    created_at = models.DateTimeField(default=now)
    transit = models.IntegerField()
    motorcycle = models.IntegerField()
    car = models.IntegerField()

class Injuries(models.Model):
    created_at = models.DateTimeField(default=now)
    transit = models.IntegerField()
    motorcycle = models.IntegerField()
    car = models.IntegerField()
    pedestrians = models.IntegerField()
    bicyclist = models.IntegerField()

class Deaths(models.Model):
    created_at = models.DateTimeField(default=now)
    transit = models.IntegerField()
    motorcycle = models.IntegerField()
    car = models.IntegerField()
    pedestrians = models.IntegerField()
    bicyclist = models.IntegerField()
