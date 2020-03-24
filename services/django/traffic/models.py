from django.db import models

class Metrolinea(models.Model):
    passengers = models.IntegerField()

class Subpoena(models.Model):
    total_subpoena = models.IntegerField()
    covid_subpoena = models.IntegerField()

class Accidents(models.Model):
    transit = models.IntegerField()
    motorcycle = models.IntegerField()
    car = models.IntegerField()

class Injuries(models.Model):
    transit = models.IntegerField()
    motorcycle = models.IntegerField()
    car = models.IntegerField()
    pedestrians = models.IntegerField()
    bicyclist = models.IntegerField()

class Deaths(models.Model):
    transit = models.IntegerField()
    motorcycle = models.IntegerField()
    car = models.IntegerField()
    pedestrians = models.IntegerField()
    bicyclist = models.IntegerField()
