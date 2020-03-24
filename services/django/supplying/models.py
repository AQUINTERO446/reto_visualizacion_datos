from django.db import models

class Volume(models.Model):
    entry = models.IntegerField()
    first_out  = models.IntegerField()
    second_out  = models.IntegerField()
    collected  = models.IntegerField()


class TargetVolumes(models.Model):
    atlatinco = models.IntegerField()
    guajira  = models.IntegerField()
    bolivar  = models.IntegerField()
    cesar  = models.IntegerField()
    magdalena  = models.IntegerField()
    norte_santander  = models.IntegerField()
    magdalena_medio  = models.IntegerField()
    nororiente_antioqueño  = models.IntegerField()
    provincia_guanentina  = models.IntegerField()