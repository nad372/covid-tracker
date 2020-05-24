# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2020-05-24 17:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0003_booking'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='firstName',
            field=models.CharField(default='', max_length=300),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='booking',
            name='lastName',
            field=models.CharField(default='', max_length=300),
            preserve_default=False,
        ),
    ]