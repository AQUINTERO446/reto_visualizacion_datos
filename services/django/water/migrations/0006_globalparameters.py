# Generated by Django 2.2 on 2020-03-28 16:55

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('water', '0005_remove_waterproduction_consumption_per_capita'),
    ]

    operations = [
        migrations.CreateModel(
            name='GlobalParameters',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateField(default=datetime.date.today)),
                ('consumption_per_capita', models.IntegerField()),
            ],
        ),
    ]
