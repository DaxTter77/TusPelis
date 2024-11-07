from django.contrib import admin
from tipo_favoritos.models import TipoFavorito

# Register your models here.
@admin.register(TipoFavorito)
class TipoFavorito(admin.ModelAdmin):
    list_display = ['descripcion', 'estado']
