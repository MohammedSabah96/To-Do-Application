# Generated by Django 3.1.3 on 2020-11-13 00:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('toodoo', '0002_task_important'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='title',
            field=models.CharField(max_length=255, unique=True),
        ),
    ]