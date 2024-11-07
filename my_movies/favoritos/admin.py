from django.contrib import admin
from favoritos.models import Favorito

# Register your models here.
@admin.register(Favorito)
class FavoritoAdmin(admin.ModelAdmin):
    list_display = ("titulo","sinopsis","año","rating_general","genero","mostrar_imagen","id_tipo")