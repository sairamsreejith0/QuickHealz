# Generated by Django 4.1.7 on 2023-04-16 23:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("backend", "0002_medication"),
    ]

    operations = [
        migrations.CreateModel(
            name="Education",
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
                ("email", models.CharField(max_length=255)),
                ("text", models.CharField(max_length=255)),
            ],
        ),
    ]