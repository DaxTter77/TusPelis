from rest_framework import serializers
from favoritos_user.models import FavoritosUser

class FavoritosUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoritosUser
        fields = ('id_favoritos_user', 'id_user', 'id_favorito', 'fecha_creacion')
