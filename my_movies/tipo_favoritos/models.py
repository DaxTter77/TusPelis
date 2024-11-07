from django.db import models

# Create your models here.
class TipoFavorito(models.Model):
    id_tipo = models.BigAutoField(primary_key=True)
    descripcion = models.CharField(max_length=50)
    estado = models.CharField(max_length=1, db_comment='ESTADO PUEDE SER ACTIVO CON "A" E INACTIVO CON "I"')


    class Meta:
        managed = False
        db_table = 'tipo_favorito'

    def  __str__(self):
        return str(self.id_tipo) + ' - ' + self.descripcion
