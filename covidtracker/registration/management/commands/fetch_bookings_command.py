from django.core.management.base import BaseCommand, CommandError
from .fetch_bookings import BookingsFetcher
from registration.models import Booking

class Command(BaseCommand):

    def handle(self, *args, **options):
        bookingFetcher = BookingsFetcher()
        bookings = bookingFetcher.fetch()

        for each in bookings:
            _id = int(each['id'])
            client = each['client']
            client_email = each['client_email']
            event = each['event']
            unit = each['unit']
            record_date = each[]

            booking = Booking(id=_id, client=client, 
                clientEmail=client_email,
                event=event, unit=unit)
            booking.save()
            break