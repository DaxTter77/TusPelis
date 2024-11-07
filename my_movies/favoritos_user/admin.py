from django.contrib import admin
from favoritos_user.models import FavoritosUser

# Register your models here.
@admin.register(FavoritosUser)
class FavoritosUserAdmin(admin.ModelAdmin):
    list_display = ("id_favorito", "id_user", "fecha_creacion")
