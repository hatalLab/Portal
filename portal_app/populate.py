import random
from functools import partial
from . import models
import faker
from faker.providers import internet

fake = faker.Faker()
fake.add_provider(internet)

def populate(n, model_cls, *additional_f, **ranges):
    models = []
    for _ in range(n):
        model = model_cls()
        for name, range_value in ranges.items():
            value = random.choice(range_value)
            setattr(model, name, value)
        for f in additional_f:
            f(model)
        if model not in models:
            models.append(model)
            model.save()

def populate_categories():
    categories = [
        'physics',
        'biology',
        'maths',
        'computer science',
        'sport',
    ]
    for c in categories:
        models.Category(name=c).save()

def populate_projects(n):
        values = {
            'name': [fake.name() for _ in range(1000)],
            'description': [fake.text() for _ in range(1000)],
        }
        def add_creator(model):
            model.creator = random.choice(models.User.objects.all())
            model.save()
            model.categories.set([random.choice(models.Category.objects.all())])
        populate(n, models.Project, add_creator, **values)
        print("Populated ", n,"projects")


def populate_ranks(n=None):
    ranks = [
        'rabat',
        'samal',
        'segem',
        'segen',
        'seren',
        'rav-seren',
        'saal',
        'alam',
    ]

    for rank in ranks:
        models.Rank(name=rank).save()

def populate_users(n):
    values = {
        'military_id': [str(random.randrange(80000, 90000)) for _ in range(1000)],
        'mail':[fake.ascii_email() for _ in range(1000)],
        'bio': [fake.text() for _ in range(1000)],
        'rank': models.Rank.objects.all(),
    }
    populate(n,models.User, models.User.set_default_pwd, **values)
