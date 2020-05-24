from django.shortcuts import render
from django.http import HttpResponse
from .models import Person, Employer

from django.template import loader


# Create your views here.
def index(request):
    all_people = Person.objects.all()
    all_employers = Employer.objects.all()
    template = loader.get_template('registration/form.html')
    context = {
        'all_employers': all_employers,
        'all_people': all_people
    }

    return HttpResponse(template.render(context, request))

# def getBookings(request):
    

