from rest_framework import serializers
from favoritos.models import Favorito

class FavoritosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorito
        fields = ('id_favorito', 'titulo', 'sinopsis', 'anio', 'rating_general', 'genero', 'imagen_caratula', 'id_tipo')

