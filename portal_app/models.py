from django.db import models
from django.contrib.auth import models as auth_models


class Rank(models.Model):

    name            = models.CharField(max_length=32)

class User(auth_models.AbstractBaseUser):

    military_id = models.CharField(max_length=32,verbose_name="Mispar Ishi", unique=True)
    name            = models.CharField(max_length=64, verbose_name="Name")
    mail               = models.EmailField(max_length=256)
    rank              = models.ForeignKey(Rank, on_delete=models.PROTECT)
    bio                 = models.TextField(default="")
    password   = models.CharField(max_length=512)

    USERNAME_FIELD = 'military_id'
    EMAIL_FIELD             = 'mail'
    REQUIRED_FIELDS  = ['mail', 'rank']

    def set_default_pwd(self):
        self.set_password("chocolate")

class Project(models.Model):

    name = models.CharField(max_length=256)
    description = models.TextField(max_length=512, default="")
    img_path      = models.ImageField(upload_to='images', default="project-default.png")

    # Participants
    creator     = models.ForeignKey(User,
                                    on_delete=models.CASCADE,
                                    related_name='projects',
                                    )

    @property
    def html_categories(self):
        return " ".join([c.name.lower() for c in self.categories.all()])

class Category(models.Model):

    name = models.CharField(max_length=256)
    projects    = models.ManyToManyField(
                                            Project,
                                            related_name="categories",
                             )

    def human_name(self):
        return "{} ({})".format(self.name, self.projects.count())

    def html_name(self):
        name = self.name.lower()
        return name.replace(' ', '_')
