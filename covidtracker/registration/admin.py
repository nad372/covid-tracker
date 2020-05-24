from django.contrib import admin
from .models import Employer
from .models import Person
from .models import Test
from .models import Booking
# Register your models here.
admin.site.register(Employer)
admin.site.register(Person)
admin.site.register(Test)
admin.site.register(Booking)