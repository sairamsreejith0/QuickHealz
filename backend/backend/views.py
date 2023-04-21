# views.py (in your Django app)

from rest_framework import viewsets
from django.contrib.auth import logout
from django.shortcuts import redirect
from .models import Patient
from .models import Doctor
from .models import Education
from .models import Caretaker
from django.http import JsonResponse
from .serializers import PatientSerializer
from .serializers import DoctorSerializer
from .serializers import CaretakerSerializer
from django.shortcuts import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
from .models import Medication
from .serializers import MedicationSerializer
from django_q.tasks import async_task
from .serializers import EducationSerializer
# backend/views.py

from django_q.tasks import async_task
from django.core.mail import send_mail


class PatientRegistrationViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    
class DoctorRegistrationViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    
class CaretakerRegistrationViewSet(viewsets.ModelViewSet):
    queryset = Caretaker.objects.all()
    serializer_class = CaretakerSerializer

class EducationRegistrationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class MedicationListCreateViewSet(viewsets.ModelViewSet):
    queryset = Medication.objects.all()
    serializer_class = MedicationSerializer


@csrf_exempt
def Login(request):

    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
        userType = data.get('userType')
      
        try:
            # Query Patient model to check for match in database
            if userType =='patient':
                patient = Patient.objects.get(email=email, password=password)
            elif userType == 'doctor':
                doctor = Doctor.objects.get(email=email,password=password)
            else:
                caretaker = Caretaker.objects.get(email=email,password=password)        
            # Perform actions on successful login, e.g., return success response
            return HttpResponse('Success')
        except Patient.DoesNotExist:
            # Perform actions on failed login, e.g., return error response
            return HttpResponse('Invalid username or password')
    else:
        # Perform actions for other HTTP methods, e.g., return error response
        return HttpResponse('Method not allowed')

@csrf_exempt
def geteducationres(request):
    educationRec = Education.objects.all()
    print(educationRec)
    data = {"education":[]}
    for value in educationRec:
        data["education"].append({
            "email": value.email,
            "text": value.text,
        })
        
    return JsonResponse(data)

