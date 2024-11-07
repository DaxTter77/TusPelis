from django.db import models
from favoritos.models import Favorito
from users.models import User

# Create your models here.
class FavoritosUser(models.Model):
    id_favoritos_user = models.BigAutoField(primary_key=True)
    id_user = models.ForeignKey(User, models.SET_NULL, null=True, db_column='id_user')
    id_favorito = models.ForeignKey(Favorito, on_delete=models.SET_NULL, null=True, db_column="id_favorito")
    fecha_creacion = models.DateTimeField(auto_now=True)

    class Meta:
        managed = False
        db_table = 'favoritos_user'