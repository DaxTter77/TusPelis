from rest_framework import serializers
from tipo_favoritos.models import TipoFavorito

class TipoFavoritosSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoFavorito
        fields = ('id_tipo', 'descripcion', 'estado')
