# Generated by Django 3.1.7 on 2021-04-09 04:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Accounts',
            fields=[
                ('identi', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
                ('amount', models.DecimalField(decimal_places=2, default=0, max_digits=10)),
                ('pwd', models.CharField(max_length=64)),
                ('upload', models.FileField(upload_to='uploads/')),
            ],
        ),
    ]
