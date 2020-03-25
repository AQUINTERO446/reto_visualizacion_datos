from django.db import models
from django.utils.timezone import now

class Volume(models.Model):
    created_at = models.DateField(auto_now_add=True)
    entry = models.IntegerField()
    first_out  = models.IntegerField()
    second_out  = models.IntegerField()
    collected  = models.IntegerField()


class TargetVolumes(models.Model):
    created_at = models.DateField(auto_now_add=True)
    atlatinco = models.IntegerField()
    guajira  = models.IntegerField()
    bolivar  = models.IntegerField()
    cesar  = models.IntegerField()
    magdalena  = models.IntegerField()
    norte_santander  = models.IntegerField()
    magdalena_medio  = models.IntegerField()
    nororiente_antioqueño  = models.IntegerField()
    provincia_guanentina  = models.IntegerField()