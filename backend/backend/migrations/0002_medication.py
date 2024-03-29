# Generated by Django 4.1.7 on 2023-04-16 04:34

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("backend", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Medication",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("dosage", models.CharField(max_length=50)),
                ("start_date", models.DateField(default=django.utils.timezone.now)),
                ("end_date", models.DateField()),
                ("frequency", models.CharField(max_length=50)),
            ],
        ),
    ]
