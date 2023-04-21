
from django.db import models
from django.utils import timezone

class Caretaker(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField(default="example@example.com")
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=30)


class Patient(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField()
    address = models.CharField(max_length=255)
    medical_history = models.TextField()
    insurance_information = models.CharField(max_length=255)
    caretaker_email = models.EmailField(default="example@example.com")
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=30)


class Doctor(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10)
    phone_number = models.CharField(max_length=20)
    email = models.EmailField()
    address = models.CharField(max_length=200)
    medical_license_no = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    years_of_experience = models.IntegerField()
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    

class Medication(models.Model):
    name = models.CharField(max_length=255)
    dosage = models.CharField(max_length=50)
    start_date = models.DateField(default=timezone.now)
    end_date = models.DateField()
    frequency = models.CharField(max_length=50)
    # patient = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    def _str_(self):
        return self.name

class Education(models.Model):
    email = models.CharField(max_length=255)
    text = models.CharField(max_length=255)

    