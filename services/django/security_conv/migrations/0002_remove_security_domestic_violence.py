# Generated by Django 2.2 on 2020-03-25 12:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('security_conv', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='security',
            name='domestic_violence',
        ),
    ]