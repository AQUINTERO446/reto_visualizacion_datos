# Generated by Django 2.2 on 2020-03-25 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('supplying', '0002_auto_20200325_1256'),
    ]

    operations = [
        migrations.AlterField(
            model_name='targetvolumes',
            name='created_at',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='volume',
            name='created_at',
            field=models.DateField(auto_now_add=True),
        ),
    ]
