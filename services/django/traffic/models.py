from django.db import models
import datetime

class Metrolinea(models.Model):
    created_at = models.DateField(default=datetime.date.today)
    passengers = models.IntegerField()

class Subpoena(models.Model):
    created_at = models.DateField(default=datetime.date.today)
    total_subpoena = models.IntegerField()
    covid_subpoena = models.IntegerField()

class Accidents(models.Model):
    created_at = models.DateField(default=datetime.date.today)
    transit = models.IntegerField()
    motorcycle = models.IntegerField()
    car = models.IntegerField()

class Injuries(models.Model):
    created_at = models.DateField(default=datetime.date.today)
    transit = models.IntegerField()
    motorcycle = models.IntegerField()
    car = models.IntegerField()
    pedestrians = models.IntegerField()
    bicyclist = models.IntegerField()

class Deaths(models.Model):
    created_at = models.DateField(default=datetime.date.today)
    transit = models.IntegerField()
    motorcycle = models.IntegerField()
    car = models.IntegerField()
    pedestrians = models.IntegerField()
    bicyclist = models.IntegerField()
