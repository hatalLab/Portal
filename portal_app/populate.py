import random
from . import models
import faker

fake = faker.Faker()

def populate(n, model_cls, **ranges):
    models = []
    for _ in range(n):
        model = model_cls()
        for name, range_value in ranges.items():
            value = random.choice(range_value)
            setattr(model, name, value)

        if model not in models:
            models.append(model)
            model.save()

def populate_projects(n):
        values = {
            'name': [fake.name() for _ in range(1000)],
            'description': [fake.text() for _ in range(1000)]
        }
        populate(n, models.Project, **values)
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

populate_ranks()
