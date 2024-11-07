from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    email = models.EmailField(unique=True)

    #Comentar en caso de necesitar crear más superusuarios
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


