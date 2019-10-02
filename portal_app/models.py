from django.db import models

class Rank(models.Model):
    name            = models.CharField(max_length=32)

class User(models.Model):

    id      = models.IntegerField(verbose_name="Mispar Ishi",
                                                                primary_key=True,
                                )

    name            = models.CharField(max_length=128)
    rank              = models.ForeignKey(Rank, on_delete=models.PROTECT)
    bio                 = models.TextField(default="")
    mail               = models.EmailField(max_length=256)
    pwd_hash  = models.CharField(max_length=512)


class Project(models.Model):

    name = models.CharField(max_length=256)
    description = models.TextField(max_length=512, default="")
    # Participants
    creator     = models.ForeignKey(User,
                                    on_delete=models.CASCADE,
                                    related_name='projects',
                                    )

class Category(models.Model):

    name = models.CharField(max_length=256)
    projects    = models.ManyToManyField(
                                            Project,
                                            related_name="categories",
                             )
