from django.core.management.base import BaseCommand, CommandError
from .fetch_bookings import BookingsFetcher

class Command(BaseCommand):

    def handle(self, *args, **options):
        bookingFetcher = BookingsFetcher()
        bookings = bookingFetcher.fetch()

        print(len(bookings))
        print(bookings[0])