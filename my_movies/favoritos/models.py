from django.db import models
from tipo_favoritos.models import TipoFavorito
from django.utils.html import format_html

# Create your models here.
class Favorito(models.Model):
    id_favorito = models.BigAutoField(primary_key=True)
    titulo = models.CharField(max_length=100)
    sinopsis = models.TextField(max_length=100, blank=True, null=True)
    anio = models.CharField(max_length=4)
    rating_general = models.FloatField(blank=True, null=True)
    genero = models.CharField(max_length=100)
    imagen_caratula = models.ImageField(upload_to="favoritos/", null=True, blank=True)
    id_tipo = models.ForeignKey(TipoFavorito, on_delete=models.SET_NULL, null=True, db_column="id_tipo")

    class Meta:
        managed = False
        db_table = 'favoritos'

    def mostrar_imagen(self):
        if self.imagen_caratula:
            return format_html('<img src="{}" width="100" height="60"'.format(self.imagen_caratula.url))
    
    def año(self):
        return self.anio

    def __str__(self) -> str:
        return str(self.id_favorito) + ' - ' + self.titulo

    mostrar_imagen.short_description = "Imagen caratula"
    año.short_description = "Año"