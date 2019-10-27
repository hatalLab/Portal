from django.core.management.base import BaseCommand, CommandError
from portal_app import populate

class Command(BaseCommand):
    help = 'Closes the specified poll for voting'

    def handle(self, *args, **options):
        populate.main(100)